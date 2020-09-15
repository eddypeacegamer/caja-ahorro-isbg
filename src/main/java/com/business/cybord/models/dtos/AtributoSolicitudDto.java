package com.business.cybord.models.dtos;

import java.util.Date;

import com.business.cybord.entities.Solicitud;

public class AtributoSolicitudDto {
	
	private int id;
	private boolean tipoAtributo;
	private String nombre;
	private String valor;
	private Date fechaCreacion;
	private Date fechaActualizacion;
	private Solicitud solicitud;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public boolean isTipoAtributo() {
		return tipoAtributo;
	}
	public void setTipoAtributo(boolean tipoAtributo) {
		this.tipoAtributo = tipoAtributo;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getValor() {
		return valor;
	}
	public void setValor(String valor) {
		this.valor = valor;
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
	public Solicitud getSolicitud() {
		return solicitud;
	}
	public void setSolicitud(Solicitud solicitud) {
		this.solicitud = solicitud;
	}
	@Override
	public String toString() {
		return "AtributoSolicitudDto [id=" + id + ", tipoAtributo=" + tipoAtributo + ", nombre=" + nombre + ", valor="
				+ valor + ", fechaCreacion=" + fechaCreacion + ", fechaActualizacion=" + fechaActualizacion
				+ ", solicitud=" + solicitud + "]";
	}
	
}
