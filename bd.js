function next() {
    window.location.href = "pag2.html";
}



 function salvarnome(){
     var nome = document.querySelector("#nome").value
     if (nome) {
        localStorage.setItem("txtnome", nome);
    } else {
        console.error("Nenhum nome digitado!");
    }
 };

 function salvaremail(){
     var email=document.querySelector("#email").value
     if (email) {
        localStorage.setItem("txtemail", email);
    } else {
        console.error("Nenhum email digitado!");
    }
 };

 function salvartelefone(){
     var telefone=document.querySelector("#telefone").value
     if (telefone) {
        localStorage.setItem("txttelefone", telefone);
    } else {
        console.error("Nenhum telefone digitado!");
    }
 };
 function salvarcpf(){
    var cpf=document.querySelector("#cpf").value
    if (cpf) {
        localStorage.setItem("txtcpf", cpf);
    } else {
        console.error("Nenhum cpf digitado!");
    }
}
function salvarsenha() {
    var senha = document.querySelector("#senha").value;
    if (senha) {
        localStorage.setItem("txtsenha", senha);
    } else {
        console.error("Nenhuma senha digitada!");
    }
}


//recepcao de dados

function mostrardados() {
    document.addEventListener("DOMContentLoaded", function() {
      
    
      var nomerecebido = localStorage.getItem("nome");
      if (nomerecebido) {
        document.getElementById("username").value = nomerecebido;
      }
  
     
      var emailrecebido = localStorage.getItem("email");
      if (emailrecebido) {
        document.getElementById("useremail").value = emailrecebido;
      }
  
      
      var telrecebido = localStorage.getItem("telefone");
      if (telrecebido) {
        document.getElementById("usertelefone").value = telrecebido;
      }
  
     
      var cpfrecebido = localStorage.getItem("cpf");
      if (cpfrecebido) {
        document.getElementById("usercpf").value = cpfrecebido;
      }
  
      
      var senharecebido = localStorage.getItem("senha");
      if (senharecebido) {
        document.getElementById("userpasswd").value = senharecebido;
      }
    });
  }
  
  
