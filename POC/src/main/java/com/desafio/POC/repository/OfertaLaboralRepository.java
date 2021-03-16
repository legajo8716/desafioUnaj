package com.desafio.POC.repository;

import com.desafio.POC.model.OfertaLaboral;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
    public interface OfertaLaboralRepository extends CrudRepository<OfertaLaboral, Long> {
        OfertaLaboral save(OfertaLaboral oferta);
        List<OfertaLaboral> findAll();

}

