package com.desafio.POC.model.usuario;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Inheritance
public class Usuario implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreUsuario;
    private String contraseña;
    public Usuario(){

    }
    public Usuario(String nombreUsuario, String contraseña) {
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public String getContraseña() {
        return contraseña;
    }

    public int getId() {
        return id;
    }
}
