package com.projeto.consenso.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.consenso.model.Agendamento;

public interface AgendamentoService extends JpaRepository<Agendamento, Long>{
    
}
