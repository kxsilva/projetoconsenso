package com.projeto.consenso.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.consenso.model.Agendamento;
import com.projeto.consenso.service.AgendamentoService;

@RestController
@RequestMapping(value = "/agendamentos")
public class AgendamentoController {
    @Autowired
    private AgendamentoService agendamentoService;

    @PostMapping
    public Agendamento NovoAgendamento(@RequestBody Agendamento agendamento){
        return agendamentoService.save(agendamento);
    }

    @GetMapping
    public List<Agendamento> obterTodosAgendamentos(){
        return agendamentoService.findAll();
    }

    @GetMapping("/{id}")
    public Agendamento obterAgendamentoPeloId(@PathVariable("id") long id){
        return agendamentoService.findById(id).get();
    }

    @DeleteMapping("/{id}")
    public String deletarAgendamento(@PathVariable("id") long id){
        agendamentoService.deleteById(id);
        return "Agendamento deletado com sucesso";
    }

    @PutMapping
    public Agendamento atualizarAgendamento(@RequestBody Agendamento agendamento){
        Agendamento agendamentoBD = agendamentoService.findById(agendamento.getIdAgendamento()).get();
        agendamentoBD.setData(agendamento.getData());
        agendamentoBD.setHora(agendamento.getHora());
        agendamentoBD = agendamentoService.save(agendamentoBD);

        return agendamentoBD;
    }
}
