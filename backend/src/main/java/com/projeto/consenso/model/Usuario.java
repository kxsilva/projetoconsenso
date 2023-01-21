package com.projeto.consenso.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsuario;
    private String nome;
    private String sobrenome;
    private String email;
    private String senha;

    @ManyToOne
    @JoinColumn(name = "id_TipoUsuario")
    private TipoUsuario tipoUsuario;

}
