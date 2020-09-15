package com.business.cybord.services;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.business.cybord.entities.DatosUsuario;
import com.business.cybord.entities.Usuario;
import com.business.cybord.mappers.UsuariosMapper;
import com.business.cybord.models.dtos.DatosUsuarioDto;
import com.business.cybord.models.dtos.UsuariosDto;
import com.business.cybord.repositories.DatosUsuarioRepository;
import com.business.cybord.repositories.UsuariosRepository;

@Service
public class UsuariosService {

	@Autowired
	private UsuariosRepository repository;

	@Autowired
	private UsuariosMapper mapper;
	
	@Autowired
	private DatosUsuarioRepository datosUsuarioRepository;
	
	
	
	private static final Logger log = LoggerFactory.getLogger(UsuariosService.class);
	

	private Specification<Usuario> buildSearchFilters(Map<String, String> parameters){
		log.info("Finding facturas by {}", parameters);	
		return new Specification<Usuario>() {
			private static final long serialVersionUID = -7435096122716669730L;
			@Override
			public Predicate toPredicate(Root<Usuario> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
				 List<Predicate> predicates = new ArrayList<>();
				 List<String> filtros = Arrays.asList(new String[]{"nombre", "email","tipoUsuario"});
				for (String i : filtros) {
					 if(parameters.get(i)!=null) 
						 predicates.add(criteriaBuilder.and(criteriaBuilder.like(root.get(i),"%"+parameters.get(i)+"%")));
				}	  
				 return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
			}
		};
	}
	
	public Page<UsuariosDto> getUsuariosPorParametros(Map<String, String> parameters) {
		
		int page = (parameters.get("page")==null)?0:Integer.valueOf(parameters.get("page"));
		int size = (parameters.get("size")==null)?10:Integer.valueOf(parameters.get("size"));	
		Page<Usuario> result = repository.findAll(buildSearchFilters(parameters), PageRequest.of(page, size,Sort.by("fechaActualizacion").descending()));
		return new PageImpl<>(mapper.getUsuariosDtoFromEntities(result.getContent()), result.getPageable(),result.getTotalElements());
	}


	public UsuariosDto getUserById(Integer id) {
		log.info("Buscando usuario con id : {}", id);
		Usuario entity = repository.findById(id).orElseThrow(
				() -> new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("user no existe %d", id)));
		return mapper.getDtoFromUserEntity(entity);
	}
	
	public UsuariosDto insertarNuevoUsuario(UsuariosDto usuario) {
		Usuario entity = repository.findByEmail(usuario.getEmail()).orElseThrow(()->new ResponseStatusException(HttpStatus.BAD_REQUEST,
				String.format("El usuario %s no existe.", usuario.getEmail())));	
		repository.save(mapper.getEntityFromUserDto(usuario));
		
		return mapper.getDtoFromUserEntity(entity);		
	}
	
	
	public UsuariosDto actualizarUsuario(UsuariosDto usuario) {
		Usuario entity = repository.findByEmail(usuario.getEmail()).orElseThrow(()->new ResponseStatusException(HttpStatus.BAD_REQUEST,
				String.format("El usuario %s no existe.", usuario.getEmail())));
		entity.setActivo(usuario.getActivo());
		entity.setNombre(usuario.getNombre());
		entity.setTipoUsuario(usuario.getTipoUsuario());
		entity.setNombre(usuario.getNombre());
		
		return mapper.getDtoFromUserEntity(repository.save(entity));
	}
	
	public void borrarUsuario(Integer id) {
		Usuario entity = repository.findById(id).orElseThrow(
				() -> new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("El Usuario no existe %d", id)));
		
		datosUsuarioRepository.findByIdUsuario(id).stream().forEach(a->datosUsuarioRepository.delete(a));
		repository.delete(entity);
	}
	
	///

	public DatosUsuarioDto insertarNuevoDatoUsuario(DatosUsuarioDto datosUsuario) {
		
		Optional<DatosUsuario> datosusuarioEntity = datosUsuarioRepository.findByTipoDatoAndIdUsuario(datosUsuario.getTipoDato(),datosUsuario.getIdUsuario());
	
		if (datosusuarioEntity.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,String.format("El dato %s ya existe", datosUsuario.getTipoDato()));
			
		}
		else {
			
			DatosUsuario datos = datosUsuarioRepository.save(mapper.getDatosEntityFromDatosUsuarioDto(datosUsuario));	
			return mapper.getDtoFromDatosusuarioEntity(datos);		
		}
			
	}
	
	public DatosUsuarioDto actualizarDatoUsuario(DatosUsuarioDto datosUsuario) {
		Optional<DatosUsuario> datosusuarioEntity = datosUsuarioRepository.findByTipoDatoAndIdUsuario(datosUsuario.getTipoDato(),datosUsuario.getIdUsuario());
		if (datosusuarioEntity.isPresent()) {			
			datosusuarioEntity.get().setDato(datosUsuario.getDato());
			datosusuarioEntity.get().setRelevancia(datosUsuario.isRelevancia());			
			return mapper.getDtoFromDatosusuarioEntity(datosUsuarioRepository.save(datosusuarioEntity.get()));
		}
		else
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,String.format("El dato %s no existe", datosUsuario.getTipoDato()));	
	}
	
	public void borraDatoUsuario(Integer id) {
		DatosUsuario entity = datosUsuarioRepository.findById(id).orElseThrow(
				() -> new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("El Dato no existe %s", id)));
		datosUsuarioRepository.delete(entity);
	}
	
}