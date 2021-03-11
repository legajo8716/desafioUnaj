package com.desafio.POC.service.impl;

import com.desafio.POC.model.Alumno;
import com.desafio.POC.model.OfertaLaboral;
import com.desafio.POC.repository.AlumnoRepository;
import com.desafio.POC.repository.OfertaLaboralRepository;
import com.desafio.POC.service.AlumnoService;
import com.desafio.POC.service.OfertaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class OfertaServiceImpl  implements OfertaService {
    @Autowired
    OfertaLaboralRepository ofertaLaboralRepository;
    public List<OfertaLaboral> getOfertas() {
        return  ofertaLaboralRepository.findAll();
    }
    @Override
    public void ingresoOferta(OfertaLaboral ofertaLaboral) {
        ofertaLaboralRepository.save(ofertaLaboral);

    }

}