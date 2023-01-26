package com.projeto.consenso.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projeto.consenso.model.Usuario;

@Repository
public interface UsuarioService extends JpaRepository<Usuario, Long>{

}
