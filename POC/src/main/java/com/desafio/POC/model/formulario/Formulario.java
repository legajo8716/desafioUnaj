package com.desafio.POC.model.formulario;

import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Inheritance
public  class Formulario implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    private String email;
    private String tipo;
    public Formulario() {
    }

    public Formulario(String nombre, String email) {
        this.nombre=nombre;
        this.email=email;
    }

    public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public String getEmail() {
        return email;
    }
    public String getTipo() {
        return email;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
