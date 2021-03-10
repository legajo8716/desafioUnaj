package com.desafio.POC.repository;

import com.desafio.POC.model.OfertaLaboral;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


    @Repository
    public interface OfertaLaboralRepository extends CrudRepository<OfertaLaboral, Long> {
        @Override
        <S extends OfertaLaboral> Iterable<S> saveAll(Iterable<S> iterable);
    }
