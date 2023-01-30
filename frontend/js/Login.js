//referenciar os elementos html
document.addEventListener('DOMContentLoaded', () => {
    var users = {};
    const login = document.getElementById("login");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    login.addEventListener("submit", async(e) => {
        e.preventDefault();
        fetch("http://localhost:8080/users")
        .then((res) => {
            users = res.json();
            console.log(users)
            array.forEach(users => {
                if(users.email === email.value && users.senha === senha.value){
                    alert("Bem vindo" + users.nome)
                } else{
                    alert("Email ou senha Incorretos")
                }
            });
            //window.loScation.href("home.html")
        })
        .catch((erro) => { console.error(erro) })
        })
        
    })

   
    



