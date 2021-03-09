package com.desafio.POC.model.formulario;

import javax.persistence.Entity;
import java.io.Serializable;

@Entity
public class FormularioEmpresa extends Formulario implements Serializable {
    int cuit;
    String provincia;
    String localidad;
    String dirección;
    int teléfono;

    public FormularioEmpresa() {
    }

    public FormularioEmpresa(String nombre, String email) {
    super(nombre,email);
    }
}
