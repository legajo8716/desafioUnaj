package com.desafio.POC.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Alumno{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    private String email;

        private String apellido;
        private String tipoDni;
        private int dni;
        private String carrera;
        private int año;
        private String experiencia;


        public String getApellido() {
            return apellido;
        }

        public String getTipoDni() {
            return tipoDni;
        }


        public int getDni() {
            return dni;
        }

        public String getCarrera() {
            return carrera;
        }

        public int getAño() {
            return año;
        }

        public Alumno(String nombre, String apellido, String tipoDni, int dni, String email, String carrera, int año) {
            this.apellido = apellido;
            this.tipoDni = tipoDni;
            this.dni = dni;
            this.carrera = carrera;
            this.año = año;
        }
        public Alumno(){
            super();

        }

        public String getExperiencia() {
            return experiencia;
        }
}

