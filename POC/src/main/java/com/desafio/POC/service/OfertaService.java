package com.desafio.POC.service;

import com.desafio.POC.model.Alumno;
import com.desafio.POC.model.OfertaLaboral;

import java.util.List;

public interface OfertaService {
    public List<OfertaLaboral> getOfertas();
    public void ingresoOferta(OfertaLaboral oferta);
}
