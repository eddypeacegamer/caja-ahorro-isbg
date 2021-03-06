/**
 * 
 */
package com.business.cybord.repositories.dao;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.business.cybord.models.Constants.SqlConstants;
import com.business.cybord.models.dtos.SaldoPrestamoDto;
import com.business.cybord.models.enums.TipoSaldoPrestamoEnum;
import com.business.cybord.models.enums.sql.PrestamoFilterEnum;
import com.business.cybord.models.enums.sql.SaldoPrestamoFilterEnum;
import com.business.cybord.models.enums.sql.UsuariosFilterEnum;
import com.business.cybord.utils.extractor.SaldoPrestamoReportRowMapper;
import com.business.cybord.utils.extractor.SaldoPrestamoRowMapper;
import com.healthmarketscience.sqlbuilder.BinaryCondition;
import com.healthmarketscience.sqlbuilder.CustomSql;
import com.healthmarketscience.sqlbuilder.SelectQuery;
import com.healthmarketscience.sqlbuilder.dbspec.basic.DbColumn;
import com.healthmarketscience.sqlbuilder.dbspec.basic.DbSchema;
import com.healthmarketscience.sqlbuilder.dbspec.basic.DbSpec;
import com.healthmarketscience.sqlbuilder.dbspec.basic.DbTable;

/**
 * @author ralfdemoledor
 *
 */
@Repository
public class SaldoPrestamoDao {

	@Autowired
	private JdbcTemplate template;

	private DateTimeFormatter dateFormat = DateTimeFormatter.ISO_LOCAL_DATE;

	private static final Logger log = LoggerFactory.getLogger(SaldoPrestamoDao.class);

	private static final String INSERT_SALDO_PRESTAMO = "INSERT INTO isbg.saldo_prestamo"
			+ "(id_prestamo,no_pago, tipo, monto, validado, origen,observaciones, fecha_creacion, fecha_actualizacion) VALUES(?, ? ,?, ?, ?, ?, ?, now(), now())";

	private static final String UPDATE_SALDPO_PRESTAMO = "UPDATE isbg.saldo_prestamo SET validado=?, origen=?,fecha_actualizacion= now() WHERE id_saldo_prestamo=?";
	
	private static final String SALDOS_BY_PRESTAMO_AND_NO_PAGO = "SELECT sp.id_saldo_prestamo, sp.id_prestamo,p.id_deudor,sp.no_pago,p.monto  as monto_prestamo , p.saldo_pendiente, p.estatus, p.no_quincenas, p.tasa_interes,sp.tipo,sp.origen,sp.validado, sp.monto, sp.fecha_creacion , sp.fecha_actualizacion " + 
			"FROM prestamo p  INNER JOIN saldo_prestamo sp ON sp.id_prestamo = p.id_prestamo WHERE sp.id_prestamo = ? AND sp.no_pago = ?";

	private static final String SALDO_PRESTAMO_PERIODO = "SELECT SUM(saldo_prestamo.monto) FROM saldo_prestamo"
			+ " INNER JOIN prestamo ON saldo_prestamo.id_prestamo = prestamo.id_prestamo"
			+ " INNER JOIN usuarios ON usuarios.id_usuario = prestamo.id_deudor"
			+ " WHERE saldo_prestamo.tipo = ? AND saldo_prestamo.validado = 'VALIDO' " + " AND usuarios.tipo_usuario = ? "
			+ " AND saldo_prestamo.fecha_creacion BETWEEN ? AND ? ";

	private static final String NO_PAGO = "SELECT IF(MAX(no_pago) IS NULL, 1, MAX(no_pago)+1) AS no_pago  FROM saldo_prestamo where id_prestamo = ?";

	public SaldoPrestamoDto insertSaldoPrestamo(SaldoPrestamoDto saldo) {
		KeyHolder keyHolder = new GeneratedKeyHolder();
		template.update(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(INSERT_SALDO_PRESTAMO,
						new String[] { "id_saldo_prestamo" });
				ps.setInt(1, saldo.getIdPrestamo());
				ps.setInt(2, saldo.getNoPago());
				ps.setString(3, saldo.getTipo());
				ps.setBigDecimal(4, saldo.getMonto());
				ps.setBoolean(5, Boolean.FALSE);
				ps.setString(6, saldo.getOrigen());
				ps.setString(7, saldo.getObservaciones());
				return ps;
			}
		}, keyHolder);
		saldo.setId(keyHolder.getKey().intValue());
		return saldo;
	}

	public int updateSaldoPrestamo(int id, SaldoPrestamoDto saldo) {

		return template.update(new PreparedStatementCreator() {

			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(UPDATE_SALDPO_PRESTAMO);
				ps.setString(1, saldo.getValidado());
				ps.setString(2, saldo.getOrigen());
				ps.setInt(3, id);
				return ps;
			}
		});
	}
	
	public List<SaldoPrestamoDto> getSaldosByIdPrestamoAndNoPago(Integer idPrestamo, Integer noPago){
		return template.query(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(SALDOS_BY_PRESTAMO_AND_NO_PAGO);
				ps.setInt(1, idPrestamo);
				ps.setInt(2, noPago);
				return ps;
			}
		}, new SaldoPrestamoRowMapper());
	}

	public Page<SaldoPrestamoDto> findAll(Map<String, String> parameters, Pageable pageable) {
		int total = template.queryForObject(saldoPrestamoCount(parameters), new Object[] {},
				(rs, rowNum) -> rs.getInt(1));

		List<SaldoPrestamoDto> rows = template.query(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(query(parameters, pageable));
				return ps;
			}
		}, new SaldoPrestamoReportRowMapper());

		return new PageImpl<>(rows, pageable, total);
	}

	private SelectQuery applyQueryFiltes(SelectQuery selectByParams, DbTable prestamo, DbTable usuarios,
			DbTable saldoPrestamo, Map<String, String> parameters) {

		String since = parameters.containsKey(SqlConstants.SINCE) ? parameters.get(SqlConstants.SINCE)
				: LocalDate.now().minusMonths(18).format(dateFormat);
		String to = parameters.containsKey(SqlConstants.TO) ? parameters.get(SqlConstants.TO)
				: LocalDate.now().plusDays(2).format(dateFormat);

		DbColumn noPagoCol = saldoPrestamo.addColumn("no_pago", "number", null);
		DbColumn idPrestamoCol = saldoPrestamo.addColumn("id_prestamo", "number", null);
		DbColumn fechaCreacionCol = saldoPrestamo.addColumn("fecha_creacion", "String", null);

		selectByParams.addCondition(BinaryCondition.greaterThanOrEq(fechaCreacionCol, since))
				.addCondition(BinaryCondition.lessThanOrEq(fechaCreacionCol, to))
				.addGroupings(noPagoCol, idPrestamoCol);

		for (PrestamoFilterEnum prest : PrestamoFilterEnum.values()) {
			if (parameters.containsKey(prest.getParamName())) {
				prestamo.addColumn(prest.getFieldName(), "String", null);
				selectByParams.addCondition(BinaryCondition.equalTo(prestamo.addColumn(prest.getFieldName()),
						parameters.get(prest.getParamName())));
			}
		}

		for (UsuariosFilterEnum sol : UsuariosFilterEnum.values()) {
			if (parameters.containsKey(sol.getParamName())) {
				if (sol.isLikeable()) {
					usuarios.addColumn(sol.getFieldName(), "String", null);
					selectByParams.addCondition(BinaryCondition.like(usuarios.addColumn(sol.getFieldName()),
							"%" + parameters.get(sol.getParamName()) + "%"));
				} else {
					usuarios.addColumn(sol.getFieldName(), "String", null);
					selectByParams.addCondition(BinaryCondition.equalTo(usuarios.addColumn(sol.getFieldName()),
							parameters.get(sol.getParamName())));
				}
			}
		}

		for (SaldoPrestamoFilterEnum saldoP : SaldoPrestamoFilterEnum.values()) {
			if (parameters.containsKey(saldoP.getParamName())) {
				if (saldoP.isLikeable()) {
					saldoPrestamo.addColumn(saldoP.getFieldName(), "String", null);
					selectByParams.addCondition(BinaryCondition.like(saldoPrestamo.addColumn(saldoP.getFieldName()),
							"%" + parameters.get(saldoP.getParamName()) + "%"));
				} else {
					saldoPrestamo.addColumn(saldoP.getFieldName(), "String", null);
					selectByParams.addCondition(BinaryCondition.equalTo(saldoPrestamo.addColumn(saldoP.getFieldName()),
							parameters.get(saldoP.getParamName())));
				}
			}
		}

		return selectByParams;
	}

	public String query(Map<String, String> parameters, Pageable pageable) {

		DbSchema schema = new DbSpec().addDefaultSchema();

		DbTable saldoPrestamo = schema.addTable("saldo_prestamo");
		DbTable prestamo = schema.addTable("prestamo");
		DbTable usuarios = schema.addTable("usuarios");

		DbColumn joinColumnA = new DbColumn(saldoPrestamo, "id_prestamo", "integer", 0);
		DbColumn joinColumnA2 = new DbColumn(prestamo, "id_prestamo", "integer", 0);
		DbColumn joinColumnB = new DbColumn(prestamo, "id_deudor", "integer", 0);
		DbColumn joinColumnB2 = new DbColumn(usuarios, "id_usuario", "integer", 0);

		String spTbAlias = saldoPrestamo.getAlias();
		String utbAlias = usuarios.getAlias();
		String pTbAlias = prestamo.getAlias();

		SelectQuery selectByParams = applyQueryFiltes(
				new SelectQuery().addFromTable(saldoPrestamo)
						.addJoin(SelectQuery.JoinType.INNER, saldoPrestamo, prestamo,
								BinaryCondition.equalTo(joinColumnA, joinColumnA2))
						.addJoin(SelectQuery.JoinType.INNER, prestamo, usuarios,
								BinaryCondition.equalTo(joinColumnB, joinColumnB2))
						.addCustomColumns(new CustomSql(String.format("%s.no_empleado", utbAlias)),
								new CustomSql(String.format("%s.nombre", utbAlias)),
								new CustomSql(String.format("%s.tipo_usuario", utbAlias)),
								new CustomSql(String.format("%s.id_usuario", utbAlias)))
						.addCustomColumns(new CustomSql(String.format("%s.estatus", pTbAlias)),
								new CustomSql(String.format("%s.monto as monto_prestamo", pTbAlias)),
								new CustomSql(String.format("%s.no_quincenas", pTbAlias)),
								new CustomSql(String.format("%s.saldo_pendiente", pTbAlias)),
								new CustomSql(String.format("%s.id_deudor", pTbAlias)),
								new CustomSql(String.format("%s.fecha_terminacion", pTbAlias)),
								new CustomSql(String.format("%s.tasa_interes", pTbAlias)))
						.addCustomColumns(new CustomSql(String.format("%s.fecha_creacion", spTbAlias)),
								new CustomSql(String.format("%s.fecha_actualizacion", spTbAlias)),
								new CustomSql(String.format("%s.validado", spTbAlias)),
								new CustomSql(String.format("%s.origen", spTbAlias)),
								new CustomSql(String.format("%s.tipo", spTbAlias)),
								new CustomSql(String.format("%s.id_saldo_prestamo", spTbAlias)),
								new CustomSql(String.format("%s.observaciones", spTbAlias)),
								new CustomSql(String.format("%s.id_prestamo", spTbAlias)),
								new CustomSql(String.format("%s.no_pago", spTbAlias)),
								new CustomSql(new CustomSql(String.format("SUM(%s.monto) as monto", spTbAlias)))),
				prestamo, usuarios, saldoPrestamo, parameters);

		String query = selectByParams.validate().toString().concat(" " + SqlConstants.LIMIT + " "
				+ pageable.getPageSize() + " " + SqlConstants.OFFSET + " " + pageable.getOffset());
		log.info(query);
		return query;
	}

	public String saldoPrestamoCount(Map<String, String> parameters) {

		DbSchema schema = new DbSpec().addDefaultSchema();

		DbTable saldoPrestamo = schema.addTable("saldo_prestamo");
		DbTable prestamo = schema.addTable("prestamo");
		DbTable usuarios = schema.addTable("usuarios");

		DbColumn joinColumnA = new DbColumn(saldoPrestamo, "id_prestamo", "integer", 0);
		DbColumn joinColumnA2 = new DbColumn(prestamo, "id_prestamo", "integer", 0);
		DbColumn joinColumnB = new DbColumn(prestamo, "id_deudor", "integer", 0);
		DbColumn joinColumnB2 = new DbColumn(usuarios, "id_usuario", "integer", 0);

		SelectQuery selectByParams = applyQueryFiltes(
				new SelectQuery().addFromTable(saldoPrestamo)
						.addCustomColumns(new CustomSql(String.format("%s.id_prestamo", saldoPrestamo.getAlias())))
						.addJoin(SelectQuery.JoinType.INNER, saldoPrestamo, prestamo,
								BinaryCondition.equalTo(joinColumnA, joinColumnA2))
						.addJoin(SelectQuery.JoinType.INNER, prestamo, usuarios,
								BinaryCondition.equalTo(joinColumnB, joinColumnB2)),
				prestamo, usuarios, saldoPrestamo, parameters);

		String query = String.format("SELECT COUNT(*) FROM (%s) as C", selectByParams.validate().toString());
		log.info(query);
		return query;
	}

	public Optional<BigDecimal> getSaldoPrestamoInteresesByPeriod(String tipoUsuario, LocalDateTime fechaInicial,
			LocalDateTime fechaFinal) {

		return template.query(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(SALDO_PRESTAMO_PERIODO);
				ps.setString(1, TipoSaldoPrestamoEnum.INTERES.name());
				ps.setString(2, tipoUsuario);
				ps.setTimestamp(3, Timestamp.valueOf(fechaInicial));
				ps.setTimestamp(4, Timestamp.valueOf(fechaFinal));
				return ps;
			}
		}, new ResultSetExtractor<Optional<BigDecimal>>() {

			@Override
			public Optional<BigDecimal> extractData(ResultSet rs) throws SQLException, DataAccessException {

				return rs.next() ? rs.getBigDecimal(1) != null ? Optional.of(rs.getBigDecimal(1)) : Optional.empty()
						: Optional.empty();
			}
		});

	}

	public Integer getNoPago(int ipPrestamo) {
		return template.query(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(NO_PAGO);
				ps.setInt(1, ipPrestamo);
				return ps;
			}
		}, new ResultSetExtractor<Integer>() {

			@Override
			public Integer extractData(ResultSet rs) throws SQLException, DataAccessException {

				return rs.next() ? rs.getInt(1) : 0;
			}
		});
	}

}
