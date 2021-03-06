package com.business.cybord;

import org.jeasy.rules.api.RulesEngine;
import org.jeasy.rules.core.DefaultRulesEngine;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.business.cybord.rules.suites.CancelacionAhorroSuite;
import com.business.cybord.rules.suites.ModificacionAhorroSuite;
import com.business.cybord.rules.suites.RetiroParcialAhorroSuite;
import com.business.cybord.rules.suites.SolicitudAhorroSuite;
import com.business.cybord.rules.suites.SolicitudPrestamoSuite;
import com.business.cybord.utils.helper.FileHelper;
import com.business.cybord.utils.helper.MailHelper;
import com.business.cybord.utils.helper.NumberTranslatorHelper;

@SpringBootApplication
public class ServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServicesApplication.class, args);
	}
	
	@Bean
	@Qualifier("SolicitudAhorro")
	public SolicitudAhorroSuite getSolicitudAhorroSuite() {
		return new SolicitudAhorroSuite();
	}
	
	@Bean
	@Qualifier("CancelacionAhorro")
	public CancelacionAhorroSuite getCancelacionAhorroSuite() {
		return new CancelacionAhorroSuite();
	}
	
	@Bean
	@Qualifier("ModificacionAhorro")
	public ModificacionAhorroSuite getModificacionAhorroSuite() {
		return new ModificacionAhorroSuite();
	}
	
	@Bean
	@Qualifier("RetiroParcialAhorro")
	public RetiroParcialAhorroSuite getRetiroParcialAhorroSuite() {
		return new RetiroParcialAhorroSuite();
	}
	
	@Bean
	@Qualifier("SolicitudPrestamo")
	public SolicitudPrestamoSuite getSolicitudPrestamoSuite() {
		return new SolicitudPrestamoSuite();
	}
	
	@Bean
	public MailHelper getMailHelper() {
		return new MailHelper();
	}
	
	@Bean
	public RulesEngine getRulesEngine() {
		return new DefaultRulesEngine();
	}
	
	@Bean
	public FileHelper getFileHelper() {
		return new FileHelper();
	}
	
	@Bean
	public NumberTranslatorHelper getNumberTranslatorHelper() {
		return new NumberTranslatorHelper();
	}
	
	
	
	

}
