package com.projeto.consenso.service;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projeto.consenso.model.Servico;

public interface ServicoService extends JpaRepository<Servico, Long>{
    //SELECT * FROM USUARIO INNER JOIN TIPO_USUARIO ON USUARIO.ID_TIPO_USUARIO = TIPO_USUARIO.ID_TIPO_USUARIO
   
}
