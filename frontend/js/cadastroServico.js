const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    cadastroServico();
})



function cadastroServico(){
    
    (async() => {
        var headers = new Headers()
        headers.append("Content-Type", "application/json")
        console.log(headers.get("Content-Type"))
       const rawResponse=  await fetch("http://localhost:8080/servicos",
        {
            mode: 'no-cors',
            headers: headers,
            method: 'POST',
            body:JSON.stringify({
                nome: "abora",
                descricao: "sexo"
            })
         }).then(function(res) {console.log(res)})
    })();
}
