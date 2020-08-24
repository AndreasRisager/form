const form = document.querySelector("form");
const statusMessage = document.querySelector("#status");

let status = true;

form.addEventListener("submit", function(e){
    e.preventDefault();
    statusMessage.innerText = ""
    if(form.firstname.value === ""){
        form.firstname.focus();
        statusMessage.innerText = "Udfyld Fornavn"
        status = false
        return
    }
    if(form.lastname.value === ""){
        form.lastname.focus();
        statusMessage.innerText = "Udfyld Efternavn"
        status = false
        return
    }

    if(form.username.value === ""){
        form.username.focus();
        statusMessage.innerText = "Udfyld Brugernavn"
        status = false
        return
    }
    if(form.email.value === ""){
        form.email.focus();
        statusMessage.innerText = "Udfyld Email Addresse"
        status = false
        return
    }

    if(form.password.value === ""){
        form.password.focus();
        statusMessage.innerText = "Udfyld Adgangskode"
        status = false
        return
    }
    if(form.password2.value === ""){
        form.password2.focus();
        statusMessage.innerText = "Gentag Adgangskode"
        status = false
        return
    }
    if(form.password2.value !== form.password.value){
        form.password2.focus();
        statusMessage.innerText = "Skriv Samme Adgangskode"
        status = false
        return
    }

    if(form.address.value === ""){
        form.address.focus();
        statusMessage.innerText = "Udfyld Addresse"
        status = false
        return
    }
    if(form.city.value === ""){
        form.city.focus();
        statusMessage.innerText = "Udfyld Land"
        status = false
        return
    }
    
    if(!status){
        return
    }
});