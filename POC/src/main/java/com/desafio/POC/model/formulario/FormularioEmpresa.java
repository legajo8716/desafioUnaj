package com.desafio.POC.model.formulario;

import com.desafio.POC.model.OfertaLaboral;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class FormularioEmpresa extends Formulario {
    private int cuit;
    private String provincia;
    private String localidad;
    private String direccion;
    private int telefono;
    @OneToMany(targetEntity=FormularioOferta.class, mappedBy="formularioEmpresa",cascade= CascadeType.ALL,  fetch = FetchType.LAZY)

    private List<FormularioOferta> ofertas;
    public FormularioEmpresa() {
    }

    public FormularioEmpresa(String nombre, String email, int cuit, String provincia, String localidad, String direccion, int telefono, List<FormularioOferta> ofertas) {
        super(nombre, email);
        this.cuit = cuit;
        this.provincia = provincia;
        this.localidad = localidad;
        this.direccion = direccion;
        this.telefono = telefono;
        this.ofertas = ofertas;
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

    public String getDireccion() {
        return direccion;
    }

    public int getTelefono() {
        return telefono;
    }

    public List<FormularioOferta> getOfertas() {
        return ofertas;
    }
}
