package com.projeto.consenso.model;

import java.sql.Date;
import java.text.SimpleDateFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Agendamento {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAgendamento;
    private Date data;
    private Date hora;

    @OneToOne
    private Servico servico;

    @OneToOne
    private Usuario usuario;

    
}
