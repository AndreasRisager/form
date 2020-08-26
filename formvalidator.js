// const form = document.querySelector("form");
// const statusMessage = document.querySelector("#status");
// const submitButton = document.querySelector("form button")

// let status = true;

// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     statusMessage.innerText = "";
//     submitButton.innerText = "SEND";

//     if (form.firstname.value === "") {
//         form.firstname.focus();
//         statusMessage.innerText = "Udfyld Fornavn";
//         status = false;
//         return
//     }
//     if (form.lastname.value === "") {
//         form.lastname.focus();
//         statusMessage.innerText = "Udfyld Efternavn";
//         status = false;
//         return
//     }
//     if (form.username.value === "") {
//         form.username.focus();
//         statusMessage.innerText = "Udfyld Brugernavn";
//         status = false;
//         return
//     }
//     if (form.email.value === "") {
//         form.email.focus();
//         statusMessage.innerText = "Udfyld Email Addresse";
//         status = false;
//         return
//     }
//     var at = form.email.value.indexOf("@");
//     var dot = form.email.value.lastIndexOf(".");
//     if (at <= 0) {
//         form.email.focus();
//         statusMessage.innerText = "Skriv gyldig email";
//         return;
//     }
//     if (dot < at + 2) {
//         form.email.focus();
//         statusMessage.innerText = "Skriv gyldig email";
//         return;
//     }
//     if (form.email.value.length <= dot + 2) {
//         form.email.focus();
//         statusMessage.innerText = "Skriv gyldig email";
//         return;
//     }

//     if (form.password.value === "") {
//         form.password.focus();
//         statusMessage.innerText = "Udfyld Adgangskode";
//         status = false;
//         return
//     }
//     if (form.password2.value === "") {
//         form.password2.focus();
//         statusMessage.innerText = "Gentag Adgangskode";
//         status = false;
//         return
//     }
//     if (form.password2.value !== form.password.value) {
//         form.password2.focus();
//         statusMessage.innerText = "Skriv Samme Adgangskode";
//         status = false;
//         return
//     }

//     if (form.address.value === "") {
//         form.address.focus();
//         statusMessage.innerText = "Udfyld Addresse";
//         status = false;
//         return
//     }
//     if (form.city.value === "") {
//         form.city.focus();
//         statusMessage.innerText = "Udfyld By";
//         status = false;
//         return
//     }
//     if (status = true) {
//         submitButton.innerText = "SENDT!";
//     }
// });

function formValidator(form) {
    let inputFields = document.querySelectorAll("input");
    let success = true;
    
    form.addEventListener("submit", function(event){
        event.preventDefault();
        inputFields.forEach(function(input){
            input.style.borderBottom = "";
            form.querySelector(".statusMessage." + input.name).innerText = "";
        });
    
        inputFields.forEach(function(input){
            if (input.type == "number" && !/^[0-9]+$/.test(input.value) && input.value != "") {
                input.style.borderBottom = "solid 2px red";
                form.querySelector(".statusMessage." + input.name).innerText = "der må kun være tal.";
                success = false;
            }

            if(input.hasAttribute("required") && input.value == ""){
                input.style.borderBottom = "solid 2px red";
                input.focus();
                form.querySelector(".statusMessage." + input.name).innerText = "Udfyld dette felt.";
                success = false;
            }
        });
        if(!success) return
    });
}
export default formValidator;