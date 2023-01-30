//referenciar os elementos html
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form-signin");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    
    const nome = document.getElementById("inputNome");
    const sobrenome = document.getElementById("inputSobrenome");
    const email = document.getElementById("inputEmail");
    const senha = document.getElementById("inputSenha");
    const confirmarSenha = document.getElementById("inputConfirmarSenha");
  
    validarEntradas(nome, sobrenome, email, senha, confirmarSenha)

    
  

})
  
})


function validarEntradas(n, sn, e, s, cs) {
  const nomeValue = String(n.value);
  const sobrenomeValue = String(sn.value);
  const emailValue = String(e.value);
  const senhaValue = String(s.value);
  const confirmarSenhaValue = String(cs.value)
  

  if (validarNome(nomeValue)) {
   inputNome.className = "form-control is-valid";
  }


  if (validarNome(sobrenomeValue)){
    inputSobrenome.className = "form-control is-valid";
  }

  if (validarEmail(emailValue)) {
    const p = document.getElementById("email-invalido");
    inputEmail.className = "form-control is-valid";
    p.style.display = "none";
  }
  else if (!validarEmail(emailValue)) {
    const p = document.getElementById("email-invalido");
    console.log("Formato de email inválido");
    inputEmail.className = "form-control is-invalid";
    p.style.display = "block";
  }
  if(validarSenhaUsuario(senhaValue)){
    const p1 = document.getElementById("senha-invalido");
    s.className = "form-control is-valid";
    p1.style.display = "none";
  }
  if(confirmarSenhaValue === senhaValue){
    const p2 = document.getElementById("confirmarsenha-invalido");  
    cs.className = "form-control is-valid";
    p2.style.display = "none";
    if(validarEmail(emailValue)){
    fetch("http://localhost:8080/users", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(
          { 
              nome: n.value,
              sobrenome: sn.value,
              email: e.value,
              senha: s.value,
              tipoUsuario: {
                idTipoUsuario: 1
              }
          }
    )
})
    .then((res) => {
        console.log(res)
        // localStorage.setItem("idUsuario", data.idUsuario);
        // const idUsuario = localStorage.getItem("idUsuario");
        // Redirecionar para uma página (ex. Home)
        // window.location.href("home.html")
    })
    .catch((erro) => { console.error(erro) })
    }
    }
      else{
        const p = document.getElementById("confirmarsenha-invalido");
        cs.className = "form-control is-invalid";
        p.style.display = "block";
      }

   if(!validarSenhaUsuario(senhaValue)){
    console.log(validarSenhaUsuario(senhaValue))
    const p = document.getElementById("senha-invalido");
    s.className = "form-control is-invalid";
     p.style.display = "block";
  }
}
function validarSenhaUsuario(senhaUsuario){
  let regexSenha =/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$/
  return regexSenha.test(senhaUsuario)
}

function validarEmail(ev) {
  let re = /\S+@\S+\.\S+/;
  return re.test(ev);
}
function validarNome(nv) {
  let rn = /[A-Z][a-z].*/;
  return rn.test(nv);
}



  // if (emailValue === "" || emailValue == null) {
  //   const p = document.getElementById("email-invalido");
  //   console.log("E-mail é um campo obrigatório");
  //   inputEmail.className = "form-control is-invalid";
  //   p.style.display = "block";

  // } 
 // if (sobrenomeValue === "" || sobrenomeValue == null) {
  //   const p = document.getElementById("sobrenome-invalido");
  //   inputSobrenome.className = "form-control is-invalid";
  //   p.style.display = "block";
  //   console.log("Nome é um campo obrigatório.");
  //   sobrenome.className = "form-control is-invalid";
  // }
  // if (nomeValue === "" || nomeValue == null) {
  //   const p = document.getElementById("nome-invalido");
  //   inputNome.className = "form-control is-invalid";
  //   p.style.display = "block";
  //   console.log("Nome é um campo obrigatório.");
  //   nome.className = "form-control is-invalid";
  // }
 // if (senhaValue != "" && senhaValue != null && senhaValue.length >= 8) {
  //   const p = document.getElementById("senha-invalido");
  //   inputSenha.className = "form-control is-valid";
  //   p.style.display = "none";
  // }

  // if (senhaValue === "" || senhaValue == null) {
  //   const p = document.getElementById("senha-invalido");
  //   console.log("Senha é um campo obrigatório");
  //   inputSenha.className = "form-control is-invalid";
  //   p.style.display = "block";
  // } 

  // else if (senhaValue.length < 8) {
  //   const p = document.getElementById("senha-invalido");
  //   console.log("A senha deve ter no mínimo 6 caracteres.");
  //   inputSenha.className = "form-control is-invalid";
  //   p.style.display = "block";
  // }
  // if (confirmarSenhaValue.length >= 8 && confirmarSenhaValue===senhaValue) {
  //   const p = document.getElementById("confirmarsenha-invalido");  
  //   inputConfirmarSenha.className = "form-control is-valid";
  //   p.style.display = "none";
  // }
  //  else if (confirmarSenhaValue.length < 8) {
  //   const p = document.getElementById("confirmarsenha-invalido");
  //   console.log("A senha deve ter no mínimo 6 caracteres.");
  //   inputConfirmarSenha.className = "form-control is-invalid";
  //   p.style.display = "block";
  // } 
  // else {
  //   console.log("Cadastro realizado com sucesso");
  // }