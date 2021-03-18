package com.desafio.POC.controller;

import com.desafio.POC.model.formulario.Formulario;
import com.desafio.POC.model.formulario.FormularioAlumno;
import com.desafio.POC.model.formulario.FormularioEmpresa;
import com.desafio.POC.model.formulario.FormularioOferta;
import com.desafio.POC.service.impl.FormularioServiceimpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
        List<FormularioOferta>ofertas=formulario.getOfertas();

       for(int i=0;i<ofertas.size();i++){
           FormularioOferta oferta=ofertas.get(i);
           oferta.setTipo("oferta");
           ofertas.set(i,oferta);


        }
        System.out.println(ofertas.get(0).getTipo());

        formulario.setOfertas(ofertas);
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
    @CrossOrigin
    @RequestMapping(method = {RequestMethod.GET}, value = {"/formulariosOferta"})
    @ResponseBody
    public List<Formulario> getFormulariosOferta() {
        return formularioService.getFormularios("oferta");
    }


    @CrossOrigin
    @RequestMapping(method = {RequestMethod.POST}, value = {"/eliminarformulario"})
    @ResponseBody
    public Formulario eliminarFormulario( @RequestBody Formulario formulario) {
        formularioService.borrarFormulario(formulario);
        return formulario;
    }



}