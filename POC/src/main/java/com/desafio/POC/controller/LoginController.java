package com.desafio.POC.controller;

import com.desafio.POC.model.usuario.Usuario;
import com.desafio.POC.service.impl.LoginServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller

public class LoginController {

    @Autowired
    LoginServiceImpl loginService;

    @CrossOrigin
    @RequestMapping(method = {RequestMethod.POST}, value = {"/register"})
    @ResponseBody
    public String registrarNuevoUsuario(@RequestBody Usuario usuario) {
        loginService.registrar(usuario);
        return "registrado";
    }

    @CrossOrigin
    @RequestMapping(method = {RequestMethod.POST}, value = {"/login"})
    @ResponseBody
    public ResponseEntity loginUser(@RequestBody Usuario usuario) {
        Boolean valid = loginService.validarDatos(usuario.getNombreUsuario(), usuario.getContraseña());

        System.out.println(valid);
        if (valid ) {
            return ResponseEntity.ok(valid);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Error");
        }
    }
}