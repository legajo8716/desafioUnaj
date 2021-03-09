package com.desafio.POC.service.impl;

import com.desafio.POC.model.formulario.Formulario;
import com.desafio.POC.model.formulario.FormularioAlumno;
import com.desafio.POC.model.formulario.FormularioEmpresa;
import com.desafio.POC.repository.FormularioRepository;
import com.desafio.POC.service.FormularioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FormularioServiceimpl implements FormularioService {
    @Autowired
    FormularioRepository formularioRepository;
    @Override
    public void ingresoDeFormularioAlumo(FormularioAlumno formulario) {
        formularioRepository.save(formulario);

    }
    @Override
    public void ingresoDeFormularioEmpresa(FormularioEmpresa formulario) {
        formularioRepository.save(formulario);

    }

    public ArrayList<Formulario> getFormularios(String tipo) {
        return (ArrayList<Formulario>) formularioRepository.findAllByTipo(tipo);
    }
}
