package com.desafio.POC.model.usuario;

public class Administrador extends  Usuario{
    private String nombre;
    private int cuit;
    private  String provincia;
    private String localidad;
    private String dirección;
    private int teléfono;
    private String email;

    public Administrador() {
    }

    public Administrador(String nombre, int cuit, String provincia, String localidad, String dirección, int teléfono, String email) {
        this.nombre = nombre;
        this.cuit = cuit;
        this.provincia = provincia;
        this.localidad = localidad;
        this.dirección = dirección;
        this.teléfono = teléfono;
        this.email = email;
    }

    public String getNombre() {
        return nombre;
    }

    public int getCuit() {
        return cuit;
    }

    public String getProvincia() {
        return provincia;
    }

    public String getLocalidad() {
        return localidad;
    }

    public String getDirección() {
        return dirección;
    }

    public int getTeléfono() {
        return teléfono;
    }

    public String getEmail() {
        return email;
    }



}
