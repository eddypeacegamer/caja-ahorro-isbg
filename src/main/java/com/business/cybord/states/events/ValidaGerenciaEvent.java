package com.business.cybord.states.events;

import org.jeasy.states.api.AbstractEvent;

import com.business.cybord.models.dtos.SolicitudDto;
import com.business.cybord.models.enums.EventFactoryTypeEnum;

public class ValidaGerenciaEvent extends AbstractEvent {
	private SolicitudDto solicitudDto;

	public ValidaGerenciaEvent(SolicitudDto solicitudDto) {
		super(EventFactoryTypeEnum.VALIDA_GERENCIA.getState());
		this.solicitudDto = solicitudDto;
	}

	public SolicitudDto getSolicitudDto() {
		return solicitudDto;
	}

	public void setSolicitudDto(SolicitudDto solicitudDto) {
		this.solicitudDto = solicitudDto;
	}

}
