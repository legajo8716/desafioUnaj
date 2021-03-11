package com.desafio.POC.repository;

import com.desafio.POC.model.Alumno;
import com.desafio.POC.model.OfertaLaboral;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AlumnoRepository extends CrudRepository<Alumno, Long> {
    Alumno save(OfertaLaboral oferta);
    List<Alumno> findAll();
}
