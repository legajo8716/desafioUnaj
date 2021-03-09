package com.desafio.POC.model.formulario;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import java.io.Serializable;

@Entity

public class FormularioAlumno extends Formulario implements Serializable {

    private String nombre;
    private String apellido;
    private String tipoDni;
    private int dni;
    private String carrera;
    private int año;


    public String getApellido() {
        return apellido;
    }

    public String getTipoDni() {
        return tipoDni;
    }


    public int getDni() {
        return dni;
    }

    public String getCarrera() {
        return carrera;
    }

    public int getAño() {
        return año;
    }

    public FormularioAlumno(String nombre, String apellido, String tipoDni, int dni, String email, String carrera, int año) {
        this.apellido = apellido;
        this.tipoDni = tipoDni;
        this.dni = dni;
        this.carrera = carrera;
        this.año = año;
    }
    public FormularioAlumno(){
        super();

    }
}
