package com.business.cybord.services;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.business.cybord.mappers.SaldoAhorroMapper;
import com.business.cybord.models.Meses;
import com.business.cybord.models.dtos.RecursoDto;
import com.business.cybord.models.dtos.SaldoAhorroDto;
import com.business.cybord.models.dtos.UsuarioDto;
import com.business.cybord.models.dtos.composed.ConciliaSaldoDto;
import com.business.cybord.models.dtos.composed.ConciliadorReportDto;
import com.business.cybord.models.dtos.composed.ReporteSaldosDto;
import com.business.cybord.models.dtos.composed.SaldoAhorroCajaDto;
import com.business.cybord.models.dtos.reports.ReporteAhorroDto;
import com.business.cybord.models.entities.SaldoAhorro;
import com.business.cybord.models.enums.TipoAtributoUsuarioEnum;
import com.business.cybord.models.error.IsbgServiceException;
import com.business.cybord.repositories.SaldoAhorroRepository;
import com.business.cybord.repositories.dao.ReportesSaldosDao;
import com.business.cybord.repositories.dao.reportes.ReporteAhorroDao;

@Service
public class SaldoAhorroService {

	@Autowired
	private SaldoAhorroRepository respository;

	@Autowired
	private SaldoAhorroMapper mapper;

	@Autowired
	private ReportesSaldosDao reportesSaldosDao;

	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private DownloaderService reportService;

	@Autowired
	private CajaUtilityService cajaUtilityService;

	@Autowired
	private ReporteAhorroDao reporteAhorroDao;

	private static final Logger log = LoggerFactory.getLogger(SaldoAhorroService.class);

	public Page<ReporteSaldosDto> getSaldosAhorros(Map<String, String> parameters) {
		int page = (parameters.get("page") == null) ? 0 : Integer.valueOf(parameters.get("page"));
		int size = (parameters.get("size") == null) ? 10 : Integer.valueOf(parameters.get("size"));
		return reportesSaldosDao.findAll(parameters, PageRequest.of(page, size, Sort.by("fechaActualizacion")));
	}

	public RecursoDto getSaldosAhorrosReport(Map<String, String> parameters) throws IOException {
		int page = (parameters.get("page") == null) ? 0 : Integer.valueOf(parameters.get("page"));
		int size = (parameters.get("size") == null) ? 10 : Integer.valueOf(parameters.get("size"));
		Page<ReporteSaldosDto> saldos = reportesSaldosDao.findAll(parameters,
				PageRequest.of(page, size, Sort.by("fechaActualizacion")));

		List<Map<String, String>> data = saldos.getContent().stream().map(s -> {
			Map<String, String> map = new HashMap<>();
			map.put("TIPO EMPLEADO", s.getTipoEmpleado());
			map.put("NO EMPLEADO", s.getNoEmpleado());
			map.put("AHORRADOR", s.getAhorrador());
			map.put("ORIGEN", s.getOrigen());
			map.put("TIPO", s.getTipo());
			map.put("OBSERVACIONES", s.getObservaciones());
			map.put("MONTO", s.getMonto().toString());
			map.put("FECHA", s.getFecha());
			return map;
		}).collect(Collectors.toList());

		return reportService.generateBase64Report("REGISTRO AHORRO", data);
	}

	public Page<ReporteAhorroDto> getPagedReporteAhorroByFiltros(Map<String, String> parameters) {
		int page = (parameters.get("page") == null) ? 0 : Integer.valueOf(parameters.get("page"));
		int size = (parameters.get("size") == null) ? 10 : Integer.valueOf(parameters.get("size"));

		return reporteAhorroDao.findAll(parameters, cajaUtilityService.getInicioCajaActual(),
				cajaUtilityService.getFinCajaActual(), PageRequest.of(page, size));
	}
	
	public RecursoDto getPagedReporteAhorroByFiltrosReport(Map<String, String> parameters) throws IOException {
		int page = (parameters.get("page") == null) ? 0 : Integer.valueOf(parameters.get("page"));
		int size = (parameters.get("size") == null) ? 10 : Integer.valueOf(parameters.get("size"));

		Page<ReporteAhorroDto> ahorros = reporteAhorroDao.findAll(parameters, cajaUtilityService.getInicioCajaActual(),
				cajaUtilityService.getFinCajaActual(), PageRequest.of(page, size));

		List<Map<String, String>> data = ahorros.getContent().stream().map(s -> {
			Map<String, String> map = new HashMap<>();
			map.put("ID USUARIO", s.getIdUsuario().toString());
			map.put("TIPO USUARIO", s.getTipoUsuario());
			map.put("NO EMPLEADO", s.getNoEmpleado());
			map.put("NOMBRE", s.getNombre());
			map.put("MONTO AHORRO", s.getAhorro().setScale(2, RoundingMode.HALF_UP).toString());
			map.put("MONTO AJUSTE", s.getAjuste().setScale(2, RoundingMode.HALF_UP).toString());
			map.put("MONTO RETIRO", s.getRetiro().setScale(2, RoundingMode.HALF_UP).toString());
			map.put("MONTO INTERES", s.getInteres().setScale(2, RoundingMode.HALF_UP).toString());
			map.put("AHORRO TOTAL", s.getTotal().setScale(2, RoundingMode.HALF_UP).toString());
			return map;
		}).collect(Collectors.toList());

		return reportService.generateBase64Report("AHORRO USUARIOS", data);
	}

	public Map<String, List<SaldoAhorroCajaDto>> getSaldosAhorrosCurrentCajaAnual() {
		LocalDate start = cajaUtilityService.getInicioCajaActual();
		LocalDate end = cajaUtilityService.getFinCajaActual();
		return reportesSaldosDao.getAhorrosCajaAnual(start, end).stream().map(s -> {
			s.setMes(Meses.getMesByNumber(s.getMes()).name());
			return s;
		}).collect(Collectors.groupingBy(SaldoAhorroCajaDto::getTipo, Collectors.toList()));
	}

	public List<SaldoAhorroCajaDto> getSaldosAhorrosCurrentCajaAnualAgrupado() {
		LocalDate start = cajaUtilityService.getInicioCajaActual();
		LocalDate end = cajaUtilityService.getFinCajaActual();

		return reportesSaldosDao.getAhorrosCajaAgrupado(start, end);
	}

	public List<SaldoAhorroDto> getSaldosAhorroByUsuario(Integer id) {
		LocalDate start = cajaUtilityService.getInicioCajaActual();
		LocalDate end = cajaUtilityService.getFinCajaActual();

		log.info("finding ahorro of user {}, between {} and {}", id, start, end);

		return mapper
				.getDtosFromEntity(respository.findAhorosUsuarioCajaActual(id, Date.valueOf(start), Date.valueOf(end)));
	}

	public SaldoAhorroDto getSaldoAhorroByIdAndIdUsuario(Integer idUsuario, Integer idSaldo) {
		Optional<SaldoAhorro> saldoAhorro = respository.findByIdUsuarioAndId(idUsuario, idSaldo);
		if (saldoAhorro.isPresent()) {
			return mapper.getDtoFromEntity(saldoAhorro.get());
		} else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					String.format("No existe una cohencidencia de saldo y suauario %d", idUsuario));
		}
	}

	public SaldoAhorroDto insertSadoAhorro(Integer userId, SaldoAhorroDto saldoAhorroDto, Authentication authentication)
			throws IsbgServiceException {
		OidcUser oidcUser = (OidcUser) authentication.getPrincipal();
		if (oidcUser != null && oidcUser.getAttributes() != null && oidcUser.getEmail() != null) {
			return insertSadoAhorro(userId, saldoAhorroDto, oidcUser.getEmail());
		} else {
			throw new IsbgServiceException("No se esta logeado en el sistema",
					"Se requiere estar logeado en eel sistema", HttpStatus.CONFLICT.value());
		}

	}

	public SaldoAhorroDto insertSadoAhorro(Integer userId, SaldoAhorroDto saldoAhorroDto, String corrreo) {
		Optional<SaldoAhorro> prestamoEntity = respository.findByIdUsuarioAndId(userId, saldoAhorroDto.getId());
		if (prestamoEntity.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					String.format("Ya existe un saldo usuario %d", userId));
		} else {
			SaldoAhorro saldoAhorro = mapper.getEntityFromDto(saldoAhorroDto);
			saldoAhorro.setOrigen(corrreo);
			return mapper.getDtoFromEntity(respository.save(saldoAhorro));
		}
	}

	public ConciliadorReportDto conciliarAhorros(List<ConciliaSaldoDto> ahorros, Optional<Integer> days)
			throws IsbgServiceException {
		ConciliadorReportDto report = new ConciliadorReportDto();
		if (ahorros != null && !ahorros.isEmpty()) {
			int day = !days.isPresent() ? 8 : days.get();
			conciliacion(report, ahorros);
			List<SaldoAhorroDto> saldos = reportesSaldosDao.getAhorrosInternosLastDays(day);
			validacionAhorro(report, saldos);
			return report;
		} else {
			throw new IsbgServiceException("No se mando ningun ahorro para validar",
					"Se requiere la lista de ahorros a validar", HttpStatus.CONFLICT.value());
		}
	}

	private void validacionAhorro(ConciliadorReportDto report, List<SaldoAhorroDto> saldos) {
		List<ConciliaSaldoDto> correctos = new ArrayList<>();
		for (SaldoAhorroDto dto : saldos) {
			ConciliaSaldoDto conciliaDto = mapper.getConciliaDtoFromSaldo(dto);
			Optional<ConciliaSaldoDto> saldoValidado = report.getCorrectos().stream()
					.filter(a -> a.getIdUsuario() == dto.getIdUsuario())
					.filter(a -> a.getSaldo().compareTo(dto.getMonto()) == 0).findFirst();
			if (saldoValidado.isPresent()) {
				conciliaDto.setNoEmpleado(saldoValidado.get().getNoEmpleado());
				conciliaDto.setNombre(saldoValidado.get().getNombre());
				correctos.add(conciliaDto);
				dto.setValidado(true);
			} else {
				Optional<ConciliaSaldoDto> usuario = report.getCorrectos().stream()
						.filter(a -> a.getIdUsuario() == dto.getIdUsuario()).findFirst();
				if (usuario.isPresent()) {
					conciliaDto.setObservaciones(
							String.format("El monto de ahorro %.2f no es el esperado", dto.getMonto()));
					conciliaDto.setNoEmpleado(usuario.get().getNoEmpleado());
					conciliaDto.setNombre(usuario.get().getNombre());
					report.addError(conciliaDto);
				} else {
					if (!report.getErrores().stream()
							.anyMatch(a -> a.getIdUsuario() != null && a.getIdUsuario() == dto.getIdUsuario())) {
						conciliaDto.setObservaciones(String.format("El usuario no tiene registro en la coincilacion"));
						UsuarioDto userDto = usuarioService.getUserById(dto.getIdUsuario());
						conciliaDto.setNoEmpleado(userDto.getNoEmpleado());
						conciliaDto.setNombre(userDto.getNombre());
						report.addError(conciliaDto);
					}
				}
			}
		}
		for (ConciliaSaldoDto csdtdo : report.getCorrectos()) {
			if (!correctos.stream().anyMatch(a -> a.getIdUsuario() == csdtdo.getIdUsuario())) {
				csdtdo.setObservaciones("El sistema no genero su ahorro quincencal");
				report.addError(csdtdo);
			}
		}
		report.setCorrectos(correctos);

	}

	private void conciliacion(ConciliadorReportDto report, List<ConciliaSaldoDto> ahorros) {
		for (ConciliaSaldoDto csd : ahorros) {
			try {
				UsuarioDto usuarioDto = usuarioService.getUserByNoEmpleado(csd.getNoEmpleado());
				csd.setIdUsuario(usuarioDto.getId());
				csd.setNombre(usuarioDto.getNombre());
				if (!usuarioDto.isAhorrador()) {
					csd.setObservaciones("El Empleado no esta dado de alta como ahorrador");
					report.addError(csd);
				} else {
					if (usuarioDto.getDatosUsuario() != null && !usuarioDto.getDatosUsuario().isEmpty()
							&& usuarioDto.getDatosUsuario().containsKey(TipoAtributoUsuarioEnum.AHORRO.name())) {
						String ahorro = usuarioDto.getDatosUsuario().get(TipoAtributoUsuarioEnum.AHORRO.name());
						BigDecimal a = new BigDecimal(ahorro);
						if (a.compareTo(csd.getSaldo()) == 0) {
							report.addcorrecto(csd);
						} else {
							csd.setObservaciones("Incosistencia en el monto de ahorro");
							report.addError(csd);
						}
					} else {
						csd.setObservaciones("El Empleado no tiene bien configurado su monto de ahorro");
						report.addError(csd);
					}
				}
			} catch (ResponseStatusException e) {
				csd.setObservaciones(e.getReason());
				report.addError(csd);
			}
		}
	}

	public List<ConciliaSaldoDto> ahorrosInternos(List<ConciliaSaldoDto> saldos, Authentication authentication) {
		OidcUser oidcUser = (OidcUser) authentication.getPrincipal();
		String origen = null;
		List<ConciliaSaldoDto> saldosGuardados = new ArrayList<>();
		if (oidcUser != null && oidcUser.getAttributes() != null && oidcUser.getEmail() != null) {
			origen = oidcUser.getEmail();
		}
		for (ConciliaSaldoDto dto : saldos) {
			Optional<SaldoAhorro> ahorro = respository.findById(dto.getId());
			if (ahorro.isPresent()) {
				ahorro.get().setId(dto.getId());
				ahorro.get().setOrigen(origen);
				ahorro.get().setValidado(true);
				respository.save(ahorro.get());
				saldosGuardados.add(dto);
			}
		}
		return saldosGuardados;
	}

	public ConciliadorReportDto ahorrosExternos(List<SaldoAhorroDto> saldos, Optional<Integer> days,
			Authentication authentication) {
		ConciliadorReportDto reporte = new ConciliadorReportDto();
		int day = !days.isPresent() ? 8 : days.get();
		List<SaldoAhorroDto> ahorradores = reportesSaldosDao.getAhorrosExternosLastDays(day);
		List<SaldoAhorro> ahorros = mapper.getEntitysFromDtos(saldos);
		OidcUser oidcUser = (OidcUser) authentication.getPrincipal();
		if (oidcUser != null && oidcUser.getAttributes() != null && oidcUser.getEmail() != null) {
			if (saldos != null && !saldos.isEmpty()) {
				for (SaldoAhorro ahorro : ahorros) {
					UsuarioDto user = usuarioService.getUserById(ahorro.getIdUsuario());
					Integer idUSer = ahorro.getIdUsuario();
					if (ahorradores.stream().anyMatch(a -> idUSer.equals(a.getIdUsuario()))) {
						reporte.addError(new ConciliaSaldoDto(ahorro.getIdUsuario(), user.getNoEmpleado(),
								user.getNombre(), ahorro.getMonto(), true, "Ya tiene un ahorro cargado"));
					} else {
						ahorro.setOrigen(oidcUser.getEmail());
						ahorro = respository.save(ahorro);
						reporte.addcorrecto(new ConciliaSaldoDto(ahorro.getIdUsuario(), user.getNoEmpleado(),
								user.getNombre(), ahorro.getMonto(), true, null));
					}
				}
			} else {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Esta vacia la lista");
			}
			for (UsuarioDto dto : usuarioService.findByTipoUsuarioAndAhorrador("EXTERNO", true)) {
				if (reporte.getCorrectos().stream().noneMatch(a -> a.getIdUsuario().equals(dto.getId()))
						&& !reporte.getErrores().stream().anyMatch(a -> a.getIdUsuario().equals(dto.getId()))) {
					reporte.addError(new ConciliaSaldoDto(dto.getId(), dto.getNoEmpleado(), dto.getNombre(), null, true,
							"Usuario ahorrador sin insumo de ahorro"));
				}
			}
			return reporte;
		} else {
			throw new ResponseStatusException(HttpStatus.CONFLICT, "Tu sesion no se encuentra activa");
		}

	}

	public Optional<BigDecimal> getSaldosAhorroTotal() {
		return reportesSaldosDao.getSaldoAhorroTotal(cajaUtilityService.getInicioCajaActual(), LocalDate.now());
	}

	public Optional<BigDecimal> findSaldoAhorroSumByIdUsuario(Integer id) {
		return respository.findSaldoAhorroSumByIdUsuario(id, Date.valueOf(cajaUtilityService.getInicioCajaActual()),
				Timestamp.valueOf(LocalDateTime.now()));
	}

}
