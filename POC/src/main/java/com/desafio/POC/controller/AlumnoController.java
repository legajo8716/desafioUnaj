package com.desafio.POC.controller;

import com.desafio.POC.model.Alumno;
import com.desafio.POC.model.formulario.Formulario;
import com.desafio.POC.model.formulario.FormularioAlumno;
import com.desafio.POC.model.formulario.FormularioEmpresa;
import com.desafio.POC.service.impl.AlumnoServiceImpl;
import com.desafio.POC.service.impl.FormularioServiceimpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Controller

public class AlumnoController {


    @Autowired
    private AlumnoServiceImpl alumnoService;


    @CrossOrigin
    @RequestMapping(method = {RequestMethod.GET}, value = {"/alumnos"})
    @ResponseBody
    public List<Alumno> getFormulariosAlumnos() {
        return alumnoService.getAlumnos();
    }
    @CrossOrigin
    @RequestMapping(method = {RequestMethod.POST}, value = {"/agregaralumno"})
    @ResponseBody
    public Alumno ingresoAlumno( @RequestBody Alumno alumno) {
        alumnoService.ingresoAlumno(alumno);
        return alumno;
    }




}