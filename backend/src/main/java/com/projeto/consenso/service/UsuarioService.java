package com.projeto.consenso.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.consenso.model.Usuario;

public interface UsuarioService extends JpaRepository<Usuario, Long>{
    
}
