//referenciar os elementos html
const form = document.getElementById("form-signin");
const nome = document.getElementById("inputNome");
const sobrenome = document.getElementById("inputSobrenome");
const email = document.getElementById("inputEmail");
const senha = document.getElementById("inputSenha");
const confirmarSenha = document.getElementById("inputConfirmarSenha");
const tipoUsuario = document.getElementById("tipoUsuario");
var nUsuario = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validarEntradas(nome, sobrenome, email, senha, confirmarSenha, tipoUsuario);
});

if(tipoUsuario.value == "Cliente"){
  nUsuario = 1;
}else if(tipoUsuario.value == "Prestador"){
  nUsuario = 2;
}
else{
  console.log("Usuario sem tipo")
}
console.log(nUsuario)

function validarEntradas(n, sn, e, s, cs) {
  const nomeValue = String(n.value);
  const sobrenomeValue = String(sn.value);
  const emailValue = String(e.value);
  const senhaValue = String(s.value);
  const confirmarSenhaValue = String(cs.value)
  

  if (validarNome(nomeValue) === true) {
    const p = document.getElementById("nome-invalido");
    inputNome.className = "form-control is-valid";
    p.style.display = "none";
  }

  if (nomeValue === "" || nomeValue == null) {
    const p = document.getElementById("nome-invalido");
    inputNome.className = "form-control is-invalid";
    p.style.display = "block";
    console.log("Nome é um campo obrigatório.");
    nome.className = "form-control is-invalid";
  }
  if (validarNome(sobrenomeValue) === true) {
    const p = document.getElementById("sobrenome-invalido");
    inputSobrenome.className = "form-control is-valid";
    p.style.display = "none";
  }

  if (sobrenomeValue === "" || sobrenomeValue == null) {
    const p = document.getElementById("sobrenome-invalido");
    inputSobrenome.className = "form-control is-invalid";
    p.style.display = "block";
    console.log("Nome é um campo obrigatório.");
    sobrenome.className = "form-control is-invalid";
  }

  if (validarEmail(emailValue) === true) {
    const p = document.getElementById("email-invalido");
    inputEmail.className = "form-control is-valid";
    p.style.display = "none";
  }

  if (emailValue === "" || emailValue == null) {
    const p = document.getElementById("email-invalido");
    console.log("E-mail é um campo obrigatório");
    inputEmail.className = "form-control is-invalid";
    p.style.display = "block";

  } else if (validarEmail(emailValue) === false) {
    const p = document.getElementById("email-invalido");
    console.log("Formato de email inválido");
    inputEmail.className = "form-control is-invalid";
    p.style.display = "block";
  }

  if (senhaValue != "" && senhaValue != null && senhaValue.length >= 8) {
    const p = document.getElementById("senha-invalido");
    inputSenha.className = "form-control is-valid";
    p.style.display = "none";
    
  }

  if (senhaValue === "" || senhaValue == null) {
    const p = document.getElementById("senha-invalido");
    console.log("Senha é um campo obrigatório");
    inputSenha.className = "form-control is-invalid";
    p.style.display = "block";
  } else if (senhaValue.length < 8) {
    const p = document.getElementById("senha-invalido");
    console.log("A senha deve ter no mínimo 6 caracteres.");
    inputSenha.className = "form-control is-invalid";
    p.style.display = "block";
  } else {
    console.log("Cadastro realizado com sucesso");
  }

  if (confirmarSenhaValue.length >= 8 && confirmarSenhaValue===senhaValue) {
    const p = document.getElementById("confirmarsenha-invalido");  
    inputConfirmarSenha.className = "form-control is-valid";
    p.style.display = "none";
  }

 
   else if (confirmarSenhaValue.length < 8) {
    const p = document.getElementById("confirmarsenha-invalido");
    console.log("A senha deve ter no mínimo 6 caracteres.");
    inputConfirmarSenha.className = "form-control is-invalid";
    p.style.display = "block";
  } else {
    console.log("Cadastro realizado com sucesso");
  }






}





function validarEmail(ev) {
  let re = /\S+@\S+\.\S+/;
  return re.test(ev);
}
function validarNome(nv) {
  let rn = /[A-Z][a-z].*/;
  return rn.test(nv);
}
