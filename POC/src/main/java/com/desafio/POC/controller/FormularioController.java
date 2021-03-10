package com.desafio.POC.controller;

import com.desafio.POC.model.Alumno;
import com.desafio.POC.model.formulario.Formulario;
import com.desafio.POC.model.formulario.FormularioAlumno;
import com.desafio.POC.model.formulario.FormularioEmpresa;
import com.desafio.POC.repository.FormularioRepository;
import com.desafio.POC.service.FormularioService;
import com.desafio.POC.service.impl.FormularioServiceimpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class FormularioController {
    @Autowired
    private FormularioServiceimpl formularioService;
    @CrossOrigin
    @RequestMapping(method = {RequestMethod.POST}, value = {"/formularioAlumno"})
    @ResponseBody
    public Formulario ingresoAlumno( @RequestBody FormularioAlumno formulario) {
        formulario.setTipo("alumno");
        formularioService.ingresoDeFormularioAlumo(formulario);
        return formulario;
    }

    @CrossOrigin
    @RequestMapping(method = {RequestMethod.POST}, value = {"/formularioEmpresa"})
    @ResponseBody
    public Formulario ingresoEmpresa( @RequestBody FormularioEmpresa formulario) {
        formulario.setTipo("empresa");
        formularioService.ingresoDeFormularioEmpresa(formulario);

        return formulario;
    }

    @CrossOrigin
    @RequestMapping(method = {RequestMethod.GET}, value = {"/formulariosAlumnos"})
    @ResponseBody
    public List<Formulario> getFormulariosAlumnos() {
        return formularioService.getFormularios("alumno");
    }

    @CrossOrigin
    @RequestMapping(method = {RequestMethod.GET}, value = {"/formulariosEmpresa"})
    @ResponseBody
    public List<Formulario> getFormulariosEmpresa() {
        return formularioService.getFormularios("empresa");
    }




}