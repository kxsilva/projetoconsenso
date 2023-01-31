//referenciar os elementos html
var glob = [];
document.addEventListener('DOMContentLoaded', () => {
    const prfservico = document.getElementById("servico")
    const prfprestador = document.getElementById("prestador")
    window.addEventListener("load", async(e) => {
        e.preventDefault();
        await fetch("http://localhost:8080/agendamentos/" + localStorage.getItem("idUsuario"))
        .then(res => {
            return res.json();
        }).then(saida =>{
            
            console.log(saida.mensagem)
            let servico = saida.mensagem.map(res => {
                return res.servico
            })
            let usuario = saida.mensagem.map(res =>{
                return res.usuario
            })
            let nomeServico = servico.map(res =>{
                return res.nome
            })
            let nomeUsuario = usuario.map(res =>{
                return res.nome
            })
            prfservico.innerHTML = nomeServico[0]
            prfprestador.innerHTML = nomeUsuario[0]
            
        })
        .catch((erro) => { console.error(erro) })

        })

})
function apagar(){
    let apagarBotao = document.getElementById("exclui")
    apagarBotao.parentElement.parentElement.remove()

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
    


