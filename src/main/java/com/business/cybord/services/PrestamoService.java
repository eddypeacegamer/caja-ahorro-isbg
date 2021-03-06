package com.business.cybord.services;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.sql.SQLException;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;

import com.business.cybord.mappers.InteresGeneradoLogMapper;
import com.business.cybord.mappers.PrestamoMapper;
import com.business.cybord.models.Constants;
import com.business.cybord.models.dtos.CalculoInteresDto;
import com.business.cybord.models.dtos.GeneracionRenglonDto;
import com.business.cybord.models.dtos.InteresGeneradoLogDto;
import com.business.cybord.models.dtos.PrestamoDto;
import com.business.cybord.models.dtos.RecursoDto;
import com.business.cybord.models.dtos.SaldoPrestamoDto;
import com.business.cybord.models.dtos.reports.ReportePrestamoDto;
import com.business.cybord.models.entities.InteresGeneradoLog;
import com.business.cybord.models.entities.Prestamo;
import com.business.cybord.models.entities.SaldoAhorro;
import com.business.cybord.models.entities.Usuario;
import com.business.cybord.models.entities.ValidacionAval;
import com.business.cybord.models.enums.EstatusPrestamoEnum;
import com.business.cybord.models.enums.SaldoPrestamoEstatus;
import com.business.cybord.models.enums.TipoAhorroEnum;
import com.business.cybord.models.enums.TipoSaldoPrestamoEnum;
import com.business.cybord.models.enums.TipoUsuarioEnum;
import com.business.cybord.repositories.InteresGeneradoLogRepository;
import com.business.cybord.repositories.PrestamoRepository;
import com.business.cybord.repositories.SaldoAhorroRepository;
import com.business.cybord.repositories.UsuariosRepository;
import com.business.cybord.repositories.ValidacionAvalRepository;
import com.business.cybord.repositories.dao.SaldoPrestamoDao;
import com.business.cybord.repositories.dao.reportes.ReportePrestamoDao;
import com.business.cybord.utils.builder.CalculoInteresDtoBuilder;
import com.business.cybord.utils.builder.InteresGeneradoLogBuilder;
import com.business.cybord.utils.builder.PrestamoBuilder;
import com.business.cybord.utils.builder.SaldoAhorroBuilder;
import com.business.cybord.utils.builder.SaldoPrestamoBuilder;

@Service
public class PrestamoService {

	@Autowired
	private PrestamoRepository repository;

	@Autowired
	private SaldoPrestamoDao saldosDao;

	@Autowired
	private PrestamoMapper mapper;

	@Autowired
	private CatalogoService catalogoService;

	@Autowired
	private ValidacionAvalRepository avalRepository;

	@Autowired
	private SaldoAhorroService saldoAhorroService;

	@Autowired
	private SaldoAhorroRepository saldoAhorroRepository;

	@Autowired
	private UsuariosRepository usuarioRepository;

	@Autowired
	private DownloaderService reportService;

	@Autowired
	private InteresGeneradoLogRepository interesGeneradoRepository;

	@Autowired
	private InteresGeneradoLogMapper interesGeneradoLogMapper;

	@Autowired
	private CajaUtilityService cajaUtilityService;

	@Autowired
	private ReportePrestamoDao reportePrestamoDao;
	
	

	public Optional<BigDecimal> getSaldoPrestamoInteresByPeriod(String tipoUsuario, LocalDateTime fechaInicial,
			LocalDateTime fechaFinal) {
		return saldosDao.getSaldoPrestamoInteresesByPeriod(tipoUsuario, fechaInicial, fechaFinal);
	}

	private static final DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE;

	private static final Logger log = LoggerFactory.getLogger(PrestamoService.class);

	public Page<ReportePrestamoDto> getPagedReportePrestamosByFiltros(Map<String, String> parameters) {
		int page = (parameters.get("page") == null) ? 0 : Integer.valueOf(parameters.get("page"));
		int size = (parameters.get("size") == null) ? 10 : Integer.valueOf(parameters.get("size"));
		LocalDate start = parameters.containsKey("since") ? LocalDate.parse(parameters.get("since"), formatter)
				: cajaUtilityService.getInicioCajaActual();
		LocalDate end = parameters.containsKey("to") ? LocalDate.parse(parameters.get("to"), formatter)
				: cajaUtilityService.getFinCajaActual();

		return reportePrestamoDao.findAll(parameters, start, end, PageRequest.of(page, size));
	}

	public RecursoDto getPagedReportePrestamosByFiltrosReport(Map<String, String> parameters) throws IOException {
		int page = (parameters.get("page") == null) ? 0 : Integer.valueOf(parameters.get("page"));
		int size = (parameters.get("size") == null) ? 10 : Integer.valueOf(parameters.get("size"));

		LocalDate start = parameters.containsKey("since") ? LocalDate.parse(parameters.get("since"), formatter)
				: cajaUtilityService.getInicioCajaActual();
		LocalDate end = parameters.containsKey("to") ? LocalDate.parse(parameters.get("to"), formatter)
				: cajaUtilityService.getFinCajaActual();

		Page<ReportePrestamoDto> prestamos = reportePrestamoDao.findAll(parameters, start, end,
				PageRequest.of(page, size));

		List<Map<String, String>> data = prestamos.getContent().stream().map(s -> {
			Map<String, String> map = new HashMap<>();
			map.put("ID SOLICITUD", s.getIdSolicitud().toString());
			map.put("ID USUARIO", s.getIdUsuario().toString());
			map.put("TIPO USUARIO", s.getTipoUsuario());
			map.put("NO EMPLEADO", s.getNoEmpleado());
			map.put("NOMBRE", s.getNombre());
			map.put("TIPO", s.getTipo());
			map.put("MONTO PRESTAMO", s.getMontoPrestamo().setScale(2, RoundingMode.HALF_UP).toString());
			map.put("TASA INTERES", s.getTasaInteres().setScale(2, RoundingMode.HALF_UP).toString());
			map.put("NO QUINCENAS",s.getNoQuincenas().toString());
			map.put("MONTO PAGOS", s.getPagos().setScale(2, RoundingMode.HALF_UP).toString());
			map.put("MONTO INTERES", s.getInteres().setScale(2, RoundingMode.HALF_UP).toString());
			map.put("MONTO AJUSTE", s.getAjuste().setScale(2, RoundingMode.HALF_UP).toString());
			map.put("INTERES TOTAL",s.getInteresPrestamo().setScale(2, RoundingMode.HALF_UP).toString());
			map.put("SALDO PENDIENTE",s.getSaldoPendiente().setScale(2, RoundingMode.HALF_UP).toString());
			map.put("FECHA_CREACION", s.getFechaCreacion().toString());
			map.put("FECHA_ACTUALIZACION", s.getFechaActualizacion().toString());
			
			return map;
		}).collect(Collectors.toList());

		return reportService.generateBase64Report("PRESTAMOS USUARIOS", data);
	}

	public Page<PrestamoDto> findPrestamosByFiltros(Map<String, String> parameters) {
		int page = (parameters.get("page") == null) ? 0 : Integer.valueOf(parameters.get("page"));
		int size = (parameters.get("size") == null) ? 10 : Integer.valueOf(parameters.get("size"));
		Page<Prestamo> prestamos = repository.findAll(PageRequest.of(page, size));
		return new PageImpl<>(mapper.getDtosFromEntities(prestamos.getContent()), PageRequest.of(page, size),
				prestamos.getTotalElements());
	}

	public List<PrestamoDto> getPrestamosByUsuarioId(Integer id) {
		return mapper.getDtosFromEntity(repository.findByIdDeudor(id));
	}

	public List<PrestamoDto> getPrestamosdeUnUsuarioByIdNotCompleted(Integer id) {
		return mapper.getDtosFromEntity(repository.findByIdDeudorNotCompleted(id));
	}

	public Page<SaldoPrestamoDto> getPrestamosyParams(@RequestParam Map<String, String> parameters) {
		int page = (parameters.get("page") == null) ? 0 : Integer.valueOf(parameters.get("page"));
		int size = (parameters.get("size") == null) ? 10 : Integer.valueOf(parameters.get("size"));
		return saldosDao.findAll(parameters, PageRequest.of(page, size, Sort.by("fechaActualizacion")));
	}

	public RecursoDto getPrestamosReportParams(Map<String, String> parameters) throws IOException {
		int page = (parameters.get("page") == null) ? 0 : Integer.valueOf(parameters.get("page"));
		int size = (parameters.get("size") == null) ? 10 : Integer.valueOf(parameters.get("size"));
		Page<SaldoPrestamoDto> saldos = saldosDao.findAll(parameters,
				PageRequest.of(page, size, Sort.by("fechaActualizacion")));

		List<Map<String, String>> data = saldos.getContent().stream().map(s -> {
			Map<String, String> map = new HashMap<>();
			map.put("MONTO", s.getMonto().toString());
			map.put("NO PAGO", s.getNoPago().toString());
			map.put("TIPO", s.getTipo());
			map.put("VALIDADO", s.getValidado());
			map.put("NO QUINCENAS", s.getNoQuincenas().toString());
			map.put("MONTO PRESTAMO", s.getMontoPrestamo().toString());
			map.put("SALDO PENDIENTE", s.getSaldoPendiente().toString());
			map.put("TIPO EMPLEADO", s.getTipoUsuario());
			map.put("NO EMPLEADO", s.getNoEmpleado());
			map.put("NOMBRE", s.getNombreEmpleado());
			map.put("ESTATUS", s.getEstatus());
			map.put("MODIFICADO", s.getOrigen());
			map.put("OBSERVACIONES", s.getObservaciones());
			map.put("FECHA ALTA", s.getFechaCreacion().toString());
			map.put("FECHA MODIFICACION", s.getFechaActualizacion().toString());
			return map;
		}).collect(Collectors.toList());

		return reportService.generateBase64Report("REGISTROS PRESTAMO", data);
	}

	public PrestamoDto getPrestamoByIdPrestamoAndIdusuario(Integer idUsuario, Integer idPrestamo) {
		Optional<Prestamo> prestamo = repository.findByIdAndIdDeudor(idPrestamo, idUsuario);
		if (prestamo.isPresent()) {
			return mapper.getDtoFromEntity(prestamo.get());
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe un usuario para ese prestamo");
		}
	}

	public PrestamoDto getPrestamoByIdPrestamoAndIdusuarioAndIdSaldo(Integer idUsuario, Integer idPrestamo,
			Integer idSaldo) {
		Optional<Prestamo> prestamo = repository.findByIdAndIdDeudorAndIdSaldo(idUsuario, idPrestamo, idSaldo);
		if (prestamo.isPresent()) {
			return mapper.getDtoFromEntity(prestamo.get());
		} else {

			throw new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("No existe el saldo %d", idSaldo));
		}
	}

	public PrestamoDto insertPrestamo(Integer userId, PrestamoDto prestamoDto) {
		Optional<Prestamo> prestamoEntity = repository.findByIdAndIdDeudor(prestamoDto.getId(), userId);
		if (prestamoEntity.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					String.format("Ya existe un prestamo para ese usuario user %d", userId));
		} else {
			Prestamo prestamo = mapper.getEntityFromDto(prestamoDto);
			prestamo.setSaldosPrestamo(mapper.getSaldoEntitiesFromSaldoDtos(prestamoDto.getSaldosPrestamo()));
			return mapper.getDtoFromEntity(repository.save(prestamo));
		}
	}

	@Transactional(rollbackOn = { DataAccessException.class, SQLException.class })
	public SaldoPrestamoDto insertPagoPrestamo(Integer idPrestamo, SaldoPrestamoDto dto) {
		repository.findById(idPrestamo).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
				String.format("El prestamo con id %d  no existe.", idPrestamo)));
		int noPago = saldosDao.getNoPago(idPrestamo);
		dto.setNoPago(noPago);
		return saldosDao.insertSaldoPrestamo(dto);
	}
	
	public List<SaldoPrestamoDto> getPagosByIdPrestamoAndNoPago(Integer idPrestamo, Integer noPago){
		return saldosDao.getSaldosByIdPrestamoAndNoPago(idPrestamo, noPago);
	}

	/**
	 * Valida los pagos de un pretamos ligados al mismo idPrestamo y noPago, todos los pagos ligados
	 * seran validados y se cambiara el estatus a 1
	 * @param idPrestamo identificador unico del prestamo
	 * @param noPago no de pago
	 * @return Regresala informacion del prestamo, descontando los pagos realizados
	 */
	@Transactional(rollbackOn = { DataAccessException.class, SQLException.class })
	public PrestamoDto approvePagoPrestamo(Integer idPrestamo, Integer noPago, String validador) {
		
		List<SaldoPrestamoDto> saldos = saldosDao.getSaldosByIdPrestamoAndNoPago(idPrestamo, noPago);
		
		int updatedRecords = saldos.stream().map(s->{ 
			s.setValidado(SaldoPrestamoEstatus.VALIDO.name());
			return saldosDao.updateSaldoPrestamo(s.getId(), s);}).reduce(0, (a,b)->a+b);
		
		if (!saldos.isEmpty() && saldos.size() == updatedRecords) {
			Prestamo prestamo = repository.findById(saldos.get(0).getIdPrestamo())
					.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
							"El saldo no se encuentra ligado a ningun prestamo"));
			
			for (SaldoPrestamoDto saldo : saldos) {
				saldo.setValidado(SaldoPrestamoEstatus.VALIDO.name());
				saldo.setOrigen(validador);
				if (!saldo.getTipo().equals(TipoSaldoPrestamoEnum.INTERES.name())) {
					prestamo.setSaldoPendiente(prestamo.getSaldoPendiente().subtract(saldo.getMonto()));
					if (prestamo.getSaldoPendiente().compareTo(BigDecimal.ZERO) <= 0) {
						prestamo.setEstatus(EstatusPrestamoEnum.TERMINADO.name());
					}
				}
			}
			log.info("Updating saldo pendiente del prestamo : {}", prestamo);
			repository.save(prestamo);
			return mapper.getDtoFromEntity(prestamo);
		} else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "El saldo no fue correctamente actualizado");
		}	
	}
	
	@Transactional(rollbackOn = { DataAccessException.class, SQLException.class })
	public void rejectPagoPrestamo(Integer idPrestamo, Integer noPago, String validador) {
		
		List<SaldoPrestamoDto> saldos = saldosDao.getSaldosByIdPrestamoAndNoPago(idPrestamo, noPago);
		int updatedRecords = saldos.stream().map(s->{ 
			s.setValidado(SaldoPrestamoEstatus.RECHAZADO.name());
			return saldosDao.updateSaldoPrestamo(s.getId(), s);}).reduce(0, (a,b)->a+b);
		if (saldos.size() != updatedRecords) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "El saldo no fue correctamente actualizado");
		} 
	}

	@Transactional(rollbackOn = { DataAccessException.class, SQLException.class })
	public List<SaldoPrestamoDto> generarSaldoPrestamo() {
		List<Prestamo> prestamosActivoTraspasado = repository.findActivoTraspasado();
		List<Prestamo> activos = prestamosActivoTraspasado.stream()
				.filter(p -> p.getEstatus().equals(EstatusPrestamoEnum.ACTIVO.name())).collect(Collectors.toList());
		List<Prestamo> traspasados = prestamosActivoTraspasado.stream()
				.filter(p -> p.getEstatus().equals(EstatusPrestamoEnum.TRASPASADO.name())).collect(Collectors.toList());
		List<SaldoPrestamoDto> generados = new ArrayList<>();

		for (Prestamo activo : activos) {
			int noPago = saldosDao.getNoPago(activo.getId());
			BigDecimal sum = montoEfectivamentePagado(activo);
			if (sum.equals(activo.getMonto())) {
				activo.setEstatus(EstatusPrestamoEnum.TERMINADO.name());
				repository.save(activo);
			} else {
				generados.add(createSaldoPrestamoPago(activo, noPago));
				generados.add(createSaldoPrestamoInteres(activo, noPago));
			}
		}

		for (Prestamo traspasado : traspasados) {
			int noPago = saldosDao.getNoPago(traspasado.getId());
			BigDecimal sum = montoEfectivamentePagado(traspasado);

			if (sum.equals(traspasado.getMonto())) {
				traspasado.setEstatus(EstatusPrestamoEnum.TRASPASADO_TERMINADO.name());
				repository.save(traspasado);
			} else {
				generados.add(createSaldoPrestamoPago(traspasado, noPago));
			}
		}
		return generados;
	}

	@Transactional(rollbackOn = { DataAccessException.class, SQLException.class, ResponseStatusException.class })
	public List<PrestamoDto> traspasarPrestamo(Integer idPrestamo) {
		Prestamo prestamo = repository.findById(idPrestamo)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
						String.format("No existe el prestamo con id %d", idPrestamo)));

		if (!(prestamo.getEstatus().equals(EstatusPrestamoEnum.ACTIVO.name())
				|| prestamo.getEstatus().equals(EstatusPrestamoEnum.SUSPENDIDO.name()))) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					String.format("El prestamo con id %d no tiene el estatus correcto", idPrestamo));
		}
		List<ValidacionAval> avales = avalRepository.findByIdSolicitud(prestamo.getSolicitud().getId());
		if (avales.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					String.format("El prestamo con id %d no tiene avales", idPrestamo));
		}
		BigDecimal montoEfectivamentePagado = montoEfectivamentePagado(prestamo);
		BigDecimal saldoPorAval = (prestamo.getMonto().subtract(montoEfectivamentePagado))
				.divide(new BigDecimal(avales.size()), 2, RoundingMode.HALF_UP);
		prestamo.setEstatus(EstatusPrestamoEnum.A_PAGAR_POR_AVAL.name());
		repository.save(prestamo);
		List<Prestamo> prestamosGenerados = new ArrayList<>();
		for (ValidacionAval aval : avales) {
			Usuario usuarioAval = usuarioRepository.findById(aval.getIdUsuarioAval())
					.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
							String.format("No existe el usuario con id  %d", aval.getIdUsuarioAval())));
			Prestamo prestamoAval = new PrestamoBuilder().setIdDeudor(usuarioAval.getId())
					.setEstatus(EstatusPrestamoEnum.TRASPASADO.name()).setMonto(saldoPorAval)
					.setNoQuincenas(prestamo.getNoQuincenas() - prestamo.getSaldosPrestamo().stream()
							.filter(sp -> sp.getTipo().equals(TipoSaldoPrestamoEnum.PAGO.name()))
							.filter(sp -> sp.getValidado().equals(true)).mapToInt(e -> 1).sum())
					.setSaldoPendiente(saldoPorAval).setFechaTerminacion(prestamo.getFechaTerminacion())
					.setSolicitud(prestamo.getSolicitud()).setTasaInteres(BigDecimal.ZERO).build();
			prestamoAval = repository.save(prestamoAval);
			prestamosGenerados.add(prestamoAval);
		}

		return mapper.getDtosFromEntity(prestamosGenerados);
	}

	public CalculoInteresDto calculoInteres(String tipoUsuario, LocalDateTime fechaInicial, LocalDateTime fechaFinal) {

		TipoUsuarioEnum tipoUsuarioValue;

		try {
			tipoUsuarioValue = TipoUsuarioEnum.valueOf(tipoUsuario);
		} catch (IllegalArgumentException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "El tipo de usuario no es valido");
		}

		validarFecha(fechaInicial, fechaFinal);

		Optional<BigDecimal> saldoAhorroTotal = saldoAhorroService.getSaldosAhorroTotal();

		Optional<BigDecimal> saldoPrestamoInteres = saldosDao
				.getSaldoPrestamoInteresesByPeriod(tipoUsuarioValue.getTipo(), fechaInicial, fechaFinal);

		if (!saldoAhorroTotal.isPresent() || !saldoPrestamoInteres.isPresent()) {
			throw new ResponseStatusException(HttpStatus.CONFLICT,
					"No existen intereses para el periodo o aun no existen ahorros");
		} else {

			BigDecimal interesRetencion = saldoPrestamoInteres.get()
					.multiply(new BigDecimal(catalogoService.getCatPropiedadByTipoAndNombre(
							Constants.TIPO_CONFIGURACIONES, Constants.TASA_INTERES_RETENCION).getValor())
									.divide(new BigDecimal(100), 2, RoundingMode.FLOOR));

			BigDecimal interesDelPerido = saldoPrestamoInteres.get().subtract(interesRetencion);
			BigDecimal porcentajeInteresDelPeriodo;

			if (saldoAhorroTotal.get().signum() > 0) {
				porcentajeInteresDelPeriodo = (interesDelPerido.divide(saldoAhorroTotal.get(), 6, RoundingMode.FLOOR))
						.multiply(new BigDecimal(100));
			} else {
				porcentajeInteresDelPeriodo = BigDecimal.ZERO;
			}

			return new CalculoInteresDtoBuilder().setSaldoAhorroTotal(saldoAhorroTotal.get())
					.setSaldoPrestamoInteresTotal(saldoPrestamoInteres.get()).setInteresRetenido(interesRetencion)
					.setInteresDelPeriodo(interesDelPerido).setPorcentajeInteresDelPeriodo(porcentajeInteresDelPeriodo)
					.build();

		}
	}

	@Transactional(rollbackOn = { DataAccessException.class, SQLException.class, ResponseStatusException.class })
	public InteresGeneradoLogDto generacionRenglonIntereses(GeneracionRenglonDto generacionRenglonDto) {

		TipoUsuarioEnum tipoUsuarioValue;
		try {
			tipoUsuarioValue = TipoUsuarioEnum.valueOf(generacionRenglonDto.getTipoUsuario());
		} catch (IllegalArgumentException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "El tipo de usuario no es valido");
		}

		LocalDateTime fechaFinal = LocalDateTime.now();
		Optional<InteresGeneradoLog> ultimoInteresGenerado = interesGeneradoRepository
				.findFirstByTipoUsuarioOrderByFechaEjecucionDesc(tipoUsuarioValue.getTipo());

		LocalDateTime fechaInicial;
		if (ultimoInteresGenerado.isPresent()) {

			fechaInicial = Instant.ofEpochMilli(ultimoInteresGenerado.get().getFechaEjecucion().getTime())
					.atZone(ZoneId.systemDefault()).toLocalDateTime();
		} else {

			fechaInicial = cajaUtilityService.getInicioCajaActual().atStartOfDay();
		}

		CalculoInteresDto interesesDto = calculoInteres(tipoUsuarioValue.getTipo(), fechaInicial, fechaFinal);

		BigDecimal interesRepartido = BigDecimal.ZERO;

		List<SaldoAhorro> saldoAhorroCreados = new ArrayList<>();

		for (TipoUsuarioEnum tipoAhorrodor : TipoUsuarioEnum.values()) {
			List<Usuario> ahorradores = usuarioRepository.findByTipoUsuarioAndAhorrador(tipoAhorrodor.getTipo(),
					Boolean.TRUE);

			for (Usuario usuario : ahorradores) {
				Optional<BigDecimal> ahorro = saldoAhorroService.findSaldoAhorroSumByIdUsuario(usuario.getId());
				if (ahorro.isPresent()) {
					BigDecimal interesUsurio = ahorro.get().multiply(interesesDto.getPorcentajeInteresDelPeriodo()
							.divide(new BigDecimal(100), 6, RoundingMode.FLOOR));
					SaldoAhorro saldoAhorroInteresCreado = createSaldoAhorroInteres(usuario.getId(), interesUsurio);
					saldoAhorroCreados.add(saldoAhorroInteresCreado);
					interesRepartido = interesRepartido.add(saldoAhorroInteresCreado.getMonto());
				}
			}
		}

		if (interesRepartido.compareTo(interesesDto.getInteresDelPerido()) <= 0) {
			log.info("Interes repartido {}", interesRepartido);
			saldoAhorroCreados.add(createSaldoAhorroInteres(Constants.ID_USUARIO_CAJA,
					interesesDto.getSaldoPrestamoInteresTotal().subtract(interesRepartido)));
		} else {
			throw new ResponseStatusException(HttpStatus.CONFLICT, "Error en la generacion de intereses");
		}

		InteresGeneradoLog interesGeneradoLog = new InteresGeneradoLogBuilder()
				.setSaldoAhorro(interesesDto.getSaldoAhorroTotal())
				.setPorcentajeInteres(interesesDto.getPorcentajeInteresDelPeriodo())
				.setInteresGenerado(interesesDto.getSaldoPrestamoInteresTotal()).setInteresRepartido(interesRepartido)
				.setInteresCaja(interesesDto.getSaldoPrestamoInteresTotal().subtract(interesRepartido))
				.setTipoUsuario(tipoUsuarioValue.getTipo()).build();

		interesGeneradoLog = interesGeneradoRepository.save(interesGeneradoLog);
		return interesGeneradoLogMapper.getDtoFromEntity(interesGeneradoLog);

	}

	@Transactional(rollbackOn = { DataAccessException.class, SQLException.class, ResponseStatusException.class })
	public List<PrestamoDto> trasparPrestamosUsuario(Integer idUsuario) {
		usuarioRepository.findById(idUsuario).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
				String.format("No existe el usuario con id %d", idUsuario)));

		List<Prestamo> prestamosActivos = repository.findByIdDeudorActivoSuspendido(idUsuario);

		if (prestamosActivos.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND,
					String.format("El usuario con id %d no tiene prestamos activos", idUsuario));
		}

		List<PrestamoDto> prestamosCreados = new ArrayList<>();

		for (Prestamo prestamoActual : prestamosActivos) {
			prestamosCreados.addAll(traspasarPrestamo(prestamoActual.getId()));
		}

		return prestamosCreados;
	}

	private SaldoPrestamoDto createSaldoPrestamoPago(Prestamo prestamo, int noPago) {
		SaldoPrestamoDto saldoPrestamo = new SaldoPrestamoBuilder().setIdPrestamo(prestamo.getId()).setNoPago(noPago)
				.setIdUsuario(prestamo.getIdDeudor()).setMontoPrestamo(prestamo.getMonto())
				.setNoQuincenas(prestamo.getNoQuincenas()).setSaldoPendiente(prestamo.getSaldoPendiente())
				.setTipo(TipoSaldoPrestamoEnum.PAGO.name())
				.setMonto(prestamo.getMonto().divide(new BigDecimal(prestamo.getNoQuincenas()), 2, RoundingMode.FLOOR))
				.setValidado(SaldoPrestamoEstatus.EN_VALIDACION.name()).setOrigen(Constants.ORIGEN_SISTEMA).build();
		return saldosDao.insertSaldoPrestamo(saldoPrestamo);

	}

	private SaldoAhorro createSaldoAhorroInteres(Integer idUsuario, BigDecimal monto) {
		SaldoAhorro saldoAhorro = new SaldoAhorroBuilder().setIdUsuario(idUsuario)
				.setMonto(monto.setScale(2, RoundingMode.FLOOR)).setOrigen(Constants.ORIGEN_SISTEMA)
				.setTipo(TipoAhorroEnum.INTERES.getTipo()).setValidado(Boolean.TRUE).build();

		return saldoAhorroRepository.save(saldoAhorro);

	}

	private SaldoPrestamoDto createSaldoPrestamoInteres(Prestamo prestamo, int noPago) {
		SaldoPrestamoDto saldoPrestamo = new SaldoPrestamoBuilder().setIdPrestamo(prestamo.getId()).setNoPago(noPago)
				.setIdUsuario(prestamo.getIdDeudor()).setMontoPrestamo(prestamo.getMonto())
				.setNoQuincenas(prestamo.getNoQuincenas()).setSaldoPendiente(prestamo.getSaldoPendiente())
				.setTipo(TipoSaldoPrestamoEnum.INTERES.name())
				.setMonto(prestamo.getMonto()
						.multiply(prestamo.getTasaInteres().divide(new BigDecimal(100), 2, RoundingMode.FLOOR)))
				.setValidado(SaldoPrestamoEstatus.EN_VALIDACION.name()).setOrigen(Constants.ORIGEN_SISTEMA).build();
		return saldosDao.insertSaldoPrestamo(saldoPrestamo);
	}

	private BigDecimal montoEfectivamentePagado(Prestamo prestamo) {
		return prestamo.getSaldosPrestamo().stream()
				.filter(sp -> !sp.getTipo().equals(TipoSaldoPrestamoEnum.INTERES.name())).filter(sp -> SaldoPrestamoEstatus.VALIDO.equals(SaldoPrestamoEstatus.valueOf(sp.getValidado())) )
				.map(sp -> sp.getMonto()).reduce(BigDecimal.ZERO, (a, b) -> a.add(b));
	}

	private void validarFecha(LocalDateTime fechaInicial, LocalDateTime fechaFinal) {
		if (fechaInicial.isAfter(fechaFinal)) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					String.format("Fecha Incial %s es mayor a fecha final %s  ", fechaInicial, fechaFinal));
		}
	}

}
