package com.business.cybord.models.dtos;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class ValidacionSolicitudDto implements Serializable {

	private static final long serialVersionUID = -6175800734286104073L;
	private int id;
	private int idSolicitud;
	private String email;
	private String area;
	private Integer numeroValidacion;
	private boolean status;
	private String statusDesc;
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private Date fechaCreacion;
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private Date fechaActualizacion;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Integer getNumeroValidacion() {
		return numeroValidacion;
	}

	public void setNumeroValidacion(Integer numeroValidacion) {
		this.numeroValidacion = numeroValidacion;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public int getIdSolicitud() {
		return idSolicitud;
	}

	public String getStatusDesc() {
		return statusDesc;
	}

	public void setStatusDesc(String statusDesc) {
		this.statusDesc = statusDesc;
	}

	public void setIdSolicitud(int idSolicitud) {
		this.idSolicitud = idSolicitud;
	}

	@Override
	public String toString() {
		return "ValidacionDto [id=" + id + ", idSolicitud=" + idSolicitud + ", email=" + email + ", area=" + area
				+ ", numeroValidacion=" + numeroValidacion + ", status=" + status + ", statusDesc=" + statusDesc
				+ ", fechaCreacion=" + fechaCreacion + ", fechaActualizacion=" + fechaActualizacion + "]";
	}

}
