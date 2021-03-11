package com.desafio.POC.controller;

import com.desafio.POC.model.Alumno;
import com.desafio.POC.model.OfertaLaboral;
import com.desafio.POC.service.OfertaService;
import com.desafio.POC.service.impl.AlumnoServiceImpl;
import com.desafio.POC.service.impl.OfertaServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@Controller

public class OfertaController {


    @Autowired
    private OfertaServiceImpl ofertaService;


    @CrossOrigin
    @RequestMapping(method = {RequestMethod.GET}, value = {"/ofertas"})
    @ResponseBody
    public List<OfertaLaboral> getFormulariosAlumnos() {
        return ofertaService.getOfertas();
    }


    @CrossOrigin
    @RequestMapping(method = {RequestMethod.POST}, value = {"/ingresoOferta"})
    @ResponseBody
    public OfertaLaboral ingresoAlumno( @RequestBody OfertaLaboral oferta) {
        ofertaService.ingresoOferta(oferta);
        return oferta;
    }



}