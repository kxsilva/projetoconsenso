package com.projeto.consenso.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.consenso.model.Servico;
import com.projeto.consenso.service.ServicoService;

@RestController
public class ServicoController {
    
    @Autowired
    private ServicoService servicoService;

    @PostMapping("/servicos")
    public Servico criarNovoServico(@RequestBody Servico servico){
        return servicoService.save(servico);
    }

    @GetMapping("/servicos")
    public List<Servico> obterTodosServicos(){
        return servicoService.findAll();
    }

    @GetMapping("/servicos/{id}")
    public Servico obterServicoPeloId(@PathVariable("id") long idservico){
        return servicoService.findById(idservico).get();
    }

    @DeleteMapping("/servicos/{id}")
    public String deletarServico(@PathVariable("idservico") long idservico){
        servicoService.deleteById(idservico);
        return "Servico deletado com sucesso";
    }

    @PutMapping("/servicos")
    public Servico atualizarServico(@RequestBody Servico servico){
        Servico servicoBD = servicoService.findById(servico.getIdservico()).get();
        servicoBD.setNome(servico.getNome());
        servicoBD.setDescricao(servico.getDescricao());
        servicoBD = servicoService.save(servicoBD);

        return servicoBD;
    }
}
