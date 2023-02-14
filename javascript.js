const form  = document.querySelector(".form");
const email = document.querySelector(".form-email");
const result = document.querySelector(".container-result");
const formIconError =document.querySelector(".form-icon-error");
form.addEventListener("submit", e => {
    console.log("email: " + email.value)
    e.preventDefault();
    if (email.value.length === 0) {
        formIconError.style.display = "block";
        result.style.display = "block";
        return;
    } else if (email.value.indexOf("@") === -1) {
        formIconError.style.display = "block";
        result.style.display = "block";
    } else {
        formIconError.style.display = "none";
        result.style.display = "none";
    }
    
})