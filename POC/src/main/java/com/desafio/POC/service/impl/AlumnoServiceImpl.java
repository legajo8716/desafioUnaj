package com.desafio.POC.service.impl;

import com.desafio.POC.model.Alumno;
import com.desafio.POC.model.formulario.Formulario;
import com.desafio.POC.model.formulario.FormularioAlumno;
import com.desafio.POC.repository.AlumnoRepository;
import com.desafio.POC.service.AlumnoService;
import com.desafio.POC.service.FormularioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


    @Service
    public class AlumnoServiceImpl implements AlumnoService {
        @Autowired
        AlumnoRepository alumnoRepository;
    public List<Alumno> getAlumnos() {
       return  alumnoRepository.findAll();
    }
        @Override
        public void ingresoAlumno(Alumno alumno) {
            alumnoRepository.save(alumno);

        }
}
