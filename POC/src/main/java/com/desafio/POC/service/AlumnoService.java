package com.desafio.POC.service;

import com.desafio.POC.model.Alumno;

import java.util.List;

public interface AlumnoService {
    public List<Alumno> getAlumnos();
    public void ingresoAlumno(Alumno alumno);
}
