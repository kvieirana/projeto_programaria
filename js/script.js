
document.getElementById("btnenviar").addEventListener("click", validaFormulario)

function validaFormulario(){

    if(document.getElementById("nome").value != "" &&
       document.getElementById("email").value != "" &&
       document.getElementById("telefone").value != "" ){
  
      alert("Prontinho! Você receberá as nossas novidades por email.")
    }else{
      alert("Por favor, preencha os campos nome, email e telefone.")
    }
  }


