package com.desafio.POC.model.usuario;

import javax.persistence.Entity;

@Entity
public class Administrador extends  Usuario{
    private String nombreUsuario;
    private  String contraseña;



    public Administrador(){

    }
    public Administrador (String nombreUsuario, String contraseña){
        super( nombreUsuario,contraseña);
    }



}
