package com.business.cybord.validations.suites;

import org.jeasy.rules.api.Rules;

import com.business.cybord.validations.rules.FechaInicioAhorroRule;
import com.business.cybord.validations.rules.MontoMinimoAhorroRule;

public class SolicitudAhorroSuite implements ISuite {

	private Rules rules = new Rules();

	public SolicitudAhorroSuite() {
		rules.register(new MontoMinimoAhorroRule());
		rules.register(new FechaInicioAhorroRule());
	}

	@Override
	public Rules getSuite() {
		return rules;
	}

}
