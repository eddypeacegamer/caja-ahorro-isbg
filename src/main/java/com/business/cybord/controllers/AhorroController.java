package com.business.cybord.controllers;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.business.cybord.models.dtos.RecursoDto;
import com.business.cybord.models.dtos.SaldoAhorroDto;
import com.business.cybord.models.dtos.composed.ConciliaSaldoDto;
import com.business.cybord.models.dtos.composed.ConciliadorReportDto;
import com.business.cybord.models.dtos.composed.ReporteSaldosDto;
import com.business.cybord.models.dtos.composed.SaldoAhorroCajaDto;
import com.business.cybord.models.dtos.reports.ReporteAhorroDto;
import com.business.cybord.models.error.IsbgServiceException;
import com.business.cybord.services.SaldoAhorroService;

@RestController
@RequestMapping("/api/v1")
public class AhorroController {

	@Autowired
	private SaldoAhorroService service;
	
	@GetMapping("/ahorros")
	public ResponseEntity<Page<ReporteAhorroDto>> findAllAvalesByFiltros(@RequestParam Map<String, String> parameters) {
		return new ResponseEntity<>(service.getPagedReporteAhorroByFiltros(parameters), HttpStatus.OK);
	}
	
	@GetMapping("/ahorros/report")
	public ResponseEntity<RecursoDto> findAllAvalesByFiltrosReport(@RequestParam Map<String, String> parameters) throws IOException {
		return new ResponseEntity<>(service.getPagedReporteAhorroByFiltrosReport(parameters), HttpStatus.OK);
	}

	@GetMapping("/saldo-ahorros")
	public ResponseEntity<Page<ReporteSaldosDto>> getSaldosAhorrosCurrentCaja(
			@RequestParam Map<String, String> parameters) {
		return new ResponseEntity<>(service.getSaldosAhorros(parameters), HttpStatus.OK);
	}

	@GetMapping("/saldo-ahorros/report")
	public ResponseEntity<RecursoDto> getSaldosAhorrosReporte(@RequestParam Map<String, String> parameters)
			throws IOException {
		return new ResponseEntity<>(service.getSaldosAhorrosReport(parameters), HttpStatus.OK);
	}

	@GetMapping("/saldo-ahorros/anual")
	public ResponseEntity<Map<String, List<SaldoAhorroCajaDto>>> getSaldosAhorrosCurrentCajaAnual() {
		return new ResponseEntity<>(service.getSaldosAhorrosCurrentCajaAnual(), HttpStatus.OK);
	}

	@GetMapping("/saldo-ahorros/anual/agrupado")
	public ResponseEntity<List<SaldoAhorroCajaDto>> getSaldosAhorrosCurrentCajaAnualAgrupado() {
		return new ResponseEntity<>(service.getSaldosAhorrosCurrentCajaAnualAgrupado(), HttpStatus.OK);
	}

	@GetMapping("/usuarios/{idUsuario}/ahorros")
	public ResponseEntity<List<SaldoAhorroDto>> getSaldosAhorroDeUnUsuarioPorSuId(@PathVariable Integer idUsuario) {
		return new ResponseEntity<>(service.getSaldosAhorroByUsuario(idUsuario), HttpStatus.OK);
	}

	@PostMapping("/usuarios/{idUsuario}/ahorros")
	public ResponseEntity<SaldoAhorroDto> insertSadoAhorro(@PathVariable Integer idUsuario,
			@RequestBody @Valid SaldoAhorroDto dto, Authentication authentication) throws IsbgServiceException {
		return new ResponseEntity<>(service.insertSadoAhorro(idUsuario, dto, authentication), HttpStatus.CREATED);
	}

	@GetMapping("/usuarios/{idUsuario}/ahorros/{idAhorro}")
	public ResponseEntity<SaldoAhorroDto> getSaldoAhorroPorIdYIdusuario(@PathVariable Integer idUsuario,
			@PathVariable Integer idAhorro) {
		return new ResponseEntity<>(service.getSaldoAhorroByIdAndIdUsuario(idUsuario, idAhorro), HttpStatus.OK);
	}

	@PostMapping("/ahorros/conciliacion")
	public ResponseEntity<ConciliadorReportDto> conciliarAhorros(@RequestBody @Valid List<ConciliaSaldoDto> dtos,
			@RequestParam(name = "days", required = false) Optional<Integer> days) throws IsbgServiceException {
		return new ResponseEntity<>(service.conciliarAhorros(dtos, days), HttpStatus.CREATED);
	}

	@PostMapping("/ahorros/internos")
	public ResponseEntity<List<ConciliaSaldoDto>> ahorrosInternos(@RequestBody @Valid List<ConciliaSaldoDto> dtos,
			Authentication authentication){
		return new ResponseEntity<>(service.ahorrosInternos(dtos, authentication), HttpStatus.CREATED);
	}

	@PostMapping("/ahorros/externos")
	public ResponseEntity<ConciliadorReportDto> ahorrosExternos(@RequestBody @Valid List<SaldoAhorroDto> dtos,
			@RequestParam(name = "days", required = false) Optional<Integer> days, Authentication authentication) {
		return new ResponseEntity<>(service.ahorrosExternos(dtos, days, authentication), HttpStatus.CREATED);
	}

}
