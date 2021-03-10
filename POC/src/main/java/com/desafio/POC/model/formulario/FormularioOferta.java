package com.desafio.POC.model.formulario;


import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name="formulario_oferta_laboral")
public class FormularioOferta {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String descripcion;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date fechaInicio;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date fechaFinalizacion;
    @ManyToOne()
    @JoinColumn(name="formulario_empresa", referencedColumnName = "id", insertable = false, updatable = false)
    private FormularioEmpresa formularioEmpresa;


    public FormularioOferta(String descripcion, Date fechaInicio, Date fechaFinalizacion) {
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFinalizacion = fechaFinalizacion;
    }

    public FormularioOferta() {
    }

    public String getDescripcion() {
        return descripcion;
    }

    public int getId() {
        return id;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public Date getFechaFinalizacion() {
        return fechaFinalizacion;
    }

    public FormularioEmpresa getFormularioEmpresa() {
        return formularioEmpresa;
    }
}
