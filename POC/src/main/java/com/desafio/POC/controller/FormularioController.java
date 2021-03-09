package com.desafio.POC.controller;

import com.desafio.POC.model.formulario.Formulario;
import com.desafio.POC.model.formulario.FormularioAlumno;
import com.desafio.POC.model.formulario.FormularioEmpresa;
import com.desafio.POC.repository.FormularioRepository;
import com.desafio.POC.service.FormularioService;
import com.desafio.POC.service.impl.FormularioServiceimpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@Controller
public class FormularioController {
    @Autowired
    private FormularioServiceimpl formularioService;
    @CrossOrigin
    @RequestMapping(method = {RequestMethod.POST}, value = {"/formulario"})
    @ResponseBody
    public Formulario ingresoAlumno( @RequestBody FormularioAlumno formulario) {
        formularioService.ingresoDeFormularioAlumo(formulario);
        return formulario;
    }

    @CrossOrigin
    @RequestMapping(method = {RequestMethod.GET}, value = {"/formulariosAlumnos"})
    @ResponseBody
    public ArrayList<Formulario> getFormulariosAlumnos(@RequestBody String tipo) {
        return formularioService.getFormularios(tipo);
    }




}