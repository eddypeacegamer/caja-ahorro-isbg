package com.business.cybord.models.dtos.pdf;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "SolicitudPdfModel")
@XmlAccessorType(XmlAccessType.NONE)
public class SolicitudPdfModelDto implements Serializable {

	private static final long serialVersionUID = 4998023315558177219L;
	@XmlElement(name = "Fecha")
	private String fecha;
	@XmlElement(name = "Titulo")
	private String titulo;
	@XmlElement(name = "Texto")
	private String texto;

	public SolicitudPdfModelDto() {
		super();
	}

	public SolicitudPdfModelDto(String fecha, String titulo, String texto) {
		super();
		this.fecha = fecha;
		this.titulo = titulo;
		this.texto = texto;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	@Override
	public String toString() {
		return "SolicitudPdfModelDto [fecha=" + fecha + ", titulo=" + titulo + ", texto=" + texto + "]";
	}

}
