package com.desafio.POC.repository;

import com.desafio.POC.model.Alumno;
import com.desafio.POC.model.Empresa;
import com.desafio.POC.model.formulario.Formulario;
import com.desafio.POC.model.formulario.FormularioAlumno;
import com.desafio.POC.model.formulario.FormularioEmpresa;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Repository
public interface FormularioRepository<T extends Formulario> extends CrudRepository<T, Long> {
    ArrayList<Formulario>findAllByTipo(String tipo);
    void save(FormularioEmpresa formularioEmpresa);
    void save(FormularioAlumno formularioEmpresa);


}