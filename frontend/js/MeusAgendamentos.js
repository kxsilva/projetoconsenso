// //referenciar os elementos html
if(!localStorage.getItem("idUsuario")){
     window.location.replace("Login.html")
}
document.addEventListener('DOMContentLoaded', () => {
    const divContainer = document.getElementById("container")
    window.addEventListener("load", async (e) => {
        e.preventDefault();
        await fetch("http://localhost:8080/agendamentos/" + localStorage.getItem("idUsuario"))
            .then(res => {
                return res.json();
            }).then(saida => {

                Object.keys(saida).forEach(element => {
                    if (saida[element] == 0) {
                        return divContainer.innerHTML = `<div class="alert alert-danger" role="alert" style = "text-align: center">
                                                     Sem agendamentos
                                                    </div>`

                    }
                    saida[element].forEach(res => {
                        let div = document.createElement("div")

                        const nome = res.servico.nome
                        const nomePrestador = res.servico.usuario.nome
                        const data = res.data
                        const hora = res.hora
                        const idAgendamento = res.idAgendamento 
                        div.innerHTML = `
                        <center>
                        <div class=" bordaa1" id="deletar" style="border: 2px solid black;">
                            <label class=""><strong>${nome.toLowerCase()}</strong> </label> 
                            <div class="div-imagem" id="th">
                            <button ><a href="EditarAgendamentos.html"><img src="img/edit.png" alt="" width="15px" height="15px"></a></button> 
                            <button onclick="apagar(${idAgendamento})" id="exclui"><img src="img/delete.png" alt=""></button></div>
                            <p><strong>Prestador: ${nomePrestador}</strong> </p>
                            <p><strong>Data:${data} </strong> </p>
                            <p><strong>Horário: ${hora}</strong> </p>  
                        </div>
                        </center>`


                        divContainer.appendChild(div)
                    })



                })

            })
            .catch((erro) => { console.error(erro) })

    })

})





function apagar(id) {
    let apagarBotao = document.getElementById("exclui")
    apagarBotao.parentElement.parentElement.remove()
    fetch("http://localhost:8080/agendamentos/" + id,{
        method:'DELETE',
        

    })
    .catch((erro) => { console.error(erro)})
}

function atualizar(){

    

}






// const fetch = () => {
//     const url = `http://localhost:8080/agendamentos`
//     fetch(url)
//     .then (res => {
//         console.log(res)
//         return res.json();
//     })
// }
// fetch()
