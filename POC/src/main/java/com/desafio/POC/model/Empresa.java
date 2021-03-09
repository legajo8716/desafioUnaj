package com.desafio.POC.model;

import org.hibernate.annotations.ManyToAny;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="empresa")
public class Empresa {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private int id;
    private String nombre;
    private int cuit;
    private String provincia;
    private String localidad;
    private String dirección;
    private int teléfono;
    private String email;
    @OneToMany(targetEntity=OfertaLaboral.class, mappedBy="empresa",cascade= CascadeType.ALL, fetch = FetchType.LAZY)

    private List<OfertaLaboral> ofertas;






}
