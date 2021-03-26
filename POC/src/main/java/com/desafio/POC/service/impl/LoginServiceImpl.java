package com.desafio.POC.service.impl;

import com.desafio.POC.model.usuario.Usuario;
import com.desafio.POC.repository.LoginRepository;
import com.desafio.POC.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

   @Autowired
    LoginRepository loginRepository;
   public Usuario buscarPorNombre(String nombreDeUsuario ){
       return loginRepository.findAllByNombreUsuario(nombreDeUsuario);
   }
    public Boolean existeUsuario(String nombreDeUsuario){
      return loginRepository.existsByNombreUsuario(nombreDeUsuario);
    }
    public Boolean validarDatos(String userName, String pass){
       Usuario usuarioIngresante= this.buscarPorNombre(userName);

        return usuarioIngresante.esMiContraseña(pass);
    }

    public void save(Usuario usuario) {
       loginRepository.save(usuario);
    }

}
