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

import com.projeto.consenso.model.Agendamento;
import com.projeto.consenso.service.AgendamentoService;

@RestController
public class AgendamentoController {
    @Autowired
    private AgendamentoService agendamentoService;

    @PostMapping("/agendamentos")
    public Agendamento criarNovoAgendamento(@RequestBody Agendamento agendamento){
        return agendamentoService.save(agendamento);
    }

    @GetMapping("/agendamentos")
    public List<Agendamento> obterTodosAgendamentos(){
        return agendamentoService.findAll();
    }

    @GetMapping("/agendamentos/{id}")
    public Agendamento obterAgendamentoPeloId(@PathVariable("id") long idagendamento){
        return agendamentoService.findById(idagendamento).get();
    }

    @DeleteMapping("/agendamentos/{id}")
    public String deletarAgendamento(@PathVariable("id") long idagendamento){
        agendamentoService.deleteById(idagendamento);
        return "Agendamento deletado com sucesso";
    }

    @PutMapping("/agendamentos")
    public Agendamento atualizarAgendamento(@RequestBody Agendamento agendamento){
        Agendamento agendamentoBD = agendamentoService.findById(agendamento.getIdAgendamento()).get();
        agendamentoBD.setData(agendamento.getData());
        agendamentoBD.setHora(agendamento.getHora());
        agendamentoBD = agendamentoService.save(agendamentoBD);

        return agendamentoBD;
    }
}
