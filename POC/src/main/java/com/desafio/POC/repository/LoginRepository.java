package com.desafio.POC.repository;

import com.desafio.POC.model.OfertaLaboral;
import com.desafio.POC.model.usuario.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface LoginRepository extends CrudRepository<Usuario, Long> {


    Usuario findAllByNombreUsuario(String nombreDeUsuario);

    boolean existsByNombreUsuario(String nombreDeUsuario);
}
