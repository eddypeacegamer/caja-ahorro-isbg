package com.business.cybord.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.business.cybord.models.entities.Rol;



@Repository
public interface RolRepository extends JpaRepository<Rol, Integer> {
		
	@Query("select e from Rol e where e.rolname.id = :idRol and e.usuario.id = :idUsuario")
	public Optional<Rol> findByIdRolAndIdUsuario( @Param("idRol") Integer idRol, @Param("idUsuario") Integer idUsuario); 	
	
	@Query("select e from Rol e where e.usuario.id = :idUsuario")
	public List<Rol> findByUserId(@Param("idUsuario") Integer idUsuario);
	
	@Query("select e from Rol e where e.rolname.nombre = :name and e.usuario.id = :idUsuario")
	public Optional<Rol> findByIdRolNameAndIdUsuario( @Param("name") String name, @Param("idUsuario") Integer idUsuario); 
}
