package com.desafio.POC.model;

import javax.persistence.*;
import java.util.Date;
@Entity
@Table(name="oferta_laboral")
public class OfertaLaboral {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String descripcion;
    private Date fechaInicio;
    private Date fechaFinalizacion;
    @ManyToOne()
    @JoinColumn(name="empresa", referencedColumnName = "id", insertable = false, updatable = false)
    private Empresa empresa;


    public OfertaLaboral(String descripcion, Date fechaInicio, Date fechaFinalizacion) {
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFinalizacion = fechaFinalizacion;
    }

    public OfertaLaboral() {
    }

    public String getDescripcion() {
        return descripcion;
    }
}
