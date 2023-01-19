package com.projeto.consenso.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.consenso.model.Servico;

public interface ServicoService extends JpaRepository<Servico, Long>{
    
}
