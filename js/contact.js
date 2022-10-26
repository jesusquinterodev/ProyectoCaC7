const nombre = document.getElementById("name")
const email = document.getElementById("email")
const form = document.getElementById("form")
const texto = document.getElementById("message")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <3){
        warnings += `El nombre no es valido! <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido! <br>`
        entrar = true
    }
    if(texto.value.length < 1){
        warnings += `Ingresar mensaje! <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado! :)"
    }
})