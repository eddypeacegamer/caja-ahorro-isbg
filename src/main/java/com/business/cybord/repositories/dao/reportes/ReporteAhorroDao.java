package com.business.cybord.repositories.dao.reportes;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.stereotype.Repository;

import com.business.cybord.models.Constants.SqlConstants;
import com.business.cybord.models.dtos.reports.ReporteAhorroDto;
import com.business.cybord.models.enums.sql.UsuarioAhorroFilterEnum;
import com.business.cybord.utils.extractor.reportes.ReporteAhorroRowMapper;
import com.healthmarketscience.sqlbuilder.BinaryCondition;
import com.healthmarketscience.sqlbuilder.FunctionCall;
import com.healthmarketscience.sqlbuilder.SelectQuery;
import com.healthmarketscience.sqlbuilder.dbspec.basic.DbSchema;
import com.healthmarketscience.sqlbuilder.dbspec.basic.DbSpec;
import com.healthmarketscience.sqlbuilder.dbspec.basic.DbTable;

@Repository
public class ReporteAhorroDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private static final Logger log = LoggerFactory.getLogger(ReporteAhorroDao.class);
	
	private static final   String TOTAL="(SELECT "
									+ "		SUM(B.monto) AS monto"
									+ "	FROM saldo_ahorro B"
									+ "	where t0.id_usuario=B.id_usuario"
									+ "		and validado=true) as total";
	
	private static final String VALOR ="(SELECT "
				+ "		SUM(B.monto) AS monto "
				+ "	FROM saldo_ahorro B "
				+ "	where t0.id_usuario=B.id_usuario"
				+ "		and validado=true"
				+ "	    and fecha_creacion between 'f1' and 'f2'"
				+ "        and tipo='?') as ?";

	

	public Page<ReporteAhorroDto> findAll(Map<String, String> parameters,LocalDate since, LocalDate to, Pageable pageable) {
		int total = jdbcTemplate.queryForObject(count(parameters), new Object[] {}, (rs, rowNum) -> rs.getInt(1));

		List<ReporteAhorroDto> rows = jdbcTemplate.query(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				return con.prepareStatement(query(parameters,since,to, pageable));
			}
		}, new ReporteAhorroRowMapper());
		return new PageImpl<>(rows, pageable, total);
	}

	public String query(Map<String, String> parameters,LocalDate since, LocalDate to, Pageable pageable) {
		DbSchema schema = new DbSpec().addDefaultSchema();

		DbTable usuarios = schema.addTable("usuarios");

		usuarios.addColumn("id_usuario","String", null);
		usuarios.addColumn("tipo_usuario", "String", null);
		usuarios.addColumn("nombre", "String", null);
		usuarios.addColumn("no_empleado", "String", null);
		
		usuarios.addColumn("total", "String", null);
		usuarios.addColumn("ahorro", "String", null);
		usuarios.addColumn("ajuste", "String", null);
		usuarios.addColumn("interes", "String", null);
		usuarios.addColumn("retiro", "String", null);

		SelectQuery select = new SelectQuery().addFromTable(usuarios)
				.addColumns(usuarios.findColumns("id_usuario"))
				.addColumns(usuarios.findColumns("tipo_usuario"))
				.addColumns(usuarios.findColumns("nombre"))
				.addColumns(usuarios.findColumns("no_empleado"))
				.addColumns(usuarios.findColumns("total"))
				.addColumns(usuarios.findColumns("ahorro"))
				.addColumns(usuarios.findColumns("ajuste"))
				.addColumns(usuarios.findColumns("interes"))
				.addColumns(usuarios.findColumns("retiro"));

		for (UsuarioAhorroFilterEnum usuario : UsuarioAhorroFilterEnum.values()) {
			if (parameters.containsKey(usuario.getParamName())) {
				if (usuario.isLikeable()) {
					usuarios.addColumn(usuario.getFieldName(), "String", null);
					select.addCondition(BinaryCondition.like(usuarios.addColumn(usuario.getFieldName()),
							"%" + parameters.get(usuario.getParamName()) + "%"));
				} else {
					usuarios.addColumn(usuario.getFieldName(), "String", null);
					select.addCondition(BinaryCondition.equalTo(usuarios.addColumn(usuario.getFieldName()),
							parameters.get(usuario.getParamName())));
				}
			}
		}
		String query = select.toString()
				.concat(" " + SqlConstants.LIMIT + " " + pageable.getPageSize() + " " + SqlConstants.OFFSET + " "
						+ pageable.getOffset());
		log.info(query);
		log.info(queryRefactor(query,parameters,since, to));
		return queryRefactor(query,parameters,since, to);
	}

	public String count(Map<String, String> parameters) {
		DbSchema schema = new DbSpec().addDefaultSchema();
		DbTable usuarios = schema.addTable("usuarios");

		SelectQuery selectByParams = new SelectQuery().addFromTable(usuarios).addCustomColumns(FunctionCall.countAll());

		for (UsuarioAhorroFilterEnum usuario : UsuarioAhorroFilterEnum.values()) {
			if (parameters.containsKey(usuario.getParamName())) {
				if (usuario.isLikeable()) {
					usuarios.addColumn(usuario.getFieldName(), "String", null);
					selectByParams.addCondition(BinaryCondition.like(usuarios.addColumn(usuario.getFieldName()),
							"%" + parameters.get(usuario.getParamName()) + "%"));
				} else {
					usuarios.addColumn(usuario.getFieldName(), "String", null);
					selectByParams.addCondition(BinaryCondition.equalTo(usuarios.addColumn(usuario.getFieldName()),
							parameters.get(usuario.getParamName())));
				}
			}
		}
		log.info(selectByParams.toString());
		return selectByParams.toString();
	}
	
	
	private String queryRefactor(String query,Map<String, String> parameters, LocalDate since, LocalDate to) {
		DateTimeFormatter formatter =  DateTimeFormatter.ISO_LOCAL_DATE;
		return query.replace("t0.total", TOTAL)
		.replace("t0.ahorro", VALOR.replace("?", "ahorro").replace("f1", since.format(formatter)).replace("f2", to.format(formatter)))
		.replace("t0.ajuste", VALOR.replace("?", "ajuste").replace("f1", since.format(formatter)).replace("f2", to.format(formatter)))
		.replace("t0.interes", VALOR.replace("?", "interes").replace("f1", since.format(formatter)).replace("f2", to.format(formatter)))
		.replace("t0.retiro", VALOR.replace("?", "retiro").replace("f1", since.format(formatter)).replace("f2", to.format(formatter)));
		
	}
	
}
