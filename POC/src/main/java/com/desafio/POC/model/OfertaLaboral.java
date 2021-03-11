package com.desafio.POC.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;
@Entity
@Table(name="oferta_laboral")
public class OfertaLaboral {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String descripcion;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date fechaInicio;
    @JsonFormat(pattern="yyyy-MM-dd")
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

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public Date getFechaFinalizacion() {
        return fechaFinalizacion;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public int getId() {
        return id;
    }
}
