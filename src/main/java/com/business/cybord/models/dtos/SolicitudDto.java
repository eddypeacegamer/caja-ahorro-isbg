package com.business.cybord.models.dtos;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.business.cybord.models.entities.AtributoSolicitud;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class SolicitudDto implements Serializable {

	private static final long serialVersionUID = 1437291290675415033L;
	private int id;
	private Integer idUsuario;
	private String tipo;
	private String status;
	private String statusDetalle;
	private Date fechaEjecucion;
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private Date fechaCreacion;
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private Date fechaActualizacion;
	private Map<String, String> atributos;
	private List<ValidacionSolicitudDto> validaciones;

	public List<AtributoSolicitud> getAttributesAsList() {
		return atributos.entrySet().stream().map(e -> new AtributoSolicitud(e.getKey(), e.getValue()))
				.collect(Collectors.toList());
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getStatusDetalle() {
		return statusDetalle;
	}

	public void setStatusDetalle(String statusDetalle) {
		this.statusDetalle = statusDetalle;
	}

	public Date getFechaEjecucion() {
		return fechaEjecucion;
	}

	public void setFechaEjecucion(Date fechaEjecucion) {
		this.fechaEjecucion = fechaEjecucion;
	}

	public Date getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(Date fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public Date getFechaActualizacion() {
		return fechaActualizacion;
	}

	public void setFechaActualizacion(Date fechaActualizacion) {
		this.fechaActualizacion = fechaActualizacion;
	}

	public Map<String, String> getAtributos() {
		return atributos;
	}

	public void setAtributos(Map<String, String> atributos) {
		this.atributos = atributos;
	}

	public List<ValidacionSolicitudDto> getValidaciones() {
		return validaciones;
	}

	public void setValidaciones(List<ValidacionSolicitudDto> validaciones) {
		this.validaciones = validaciones;
	}

	public Integer getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
	}

	@Override
	public String toString() {
		return "SolicitudDto [id=" + id + ", idUsuario=" + idUsuario + ", tipo=" + tipo + ", status=" + status
				+ ", statusDetalle=" + statusDetalle + ", fechaEjecucion=" + fechaEjecucion + ", fechaCreacion="
				+ fechaCreacion + ", fechaActualizacion=" + fechaActualizacion + ", atributos=" + atributos
				+ ", validaciones=" + validaciones + "]";
	}

}
