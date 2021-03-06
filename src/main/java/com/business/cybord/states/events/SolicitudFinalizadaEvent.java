package com.business.cybord.states.events;

import org.jeasy.states.api.AbstractEvent;

import com.business.cybord.models.dtos.SolicitudDto;
import com.business.cybord.models.enums.EventFactoryTypeEnum;

public class SolicitudFinalizadaEvent extends AbstractEvent {
	
	private SolicitudDto solicitudDto;

    public SolicitudFinalizadaEvent(SolicitudDto dto ) {
        super(EventFactoryTypeEnum.SOLICITUD_TERMINADA.getState());
        this.solicitudDto=dto;
    }


	public SolicitudDto getSolicitudDto() {
		return solicitudDto;
	}

	public void setSolicitudDto(SolicitudDto solicitudDto) {
		this.solicitudDto = solicitudDto;
	}

}
