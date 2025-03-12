document.getElementById("contact-form").addEventListener("submit", function(event) 
{
    event.preventDefault();

    let valid = true;
    
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let messageError = document.getElementById("message-error");
    let successMessage = document.getElementById("success-message");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    if (name.value.trim() === "") 
    {
        nameError.textContent = "Name is required";
        name.classList.add("error-border");
        valid = false;
    }

    if (email.value.trim() === "") 
    {
        emailError.textContent = "Email is required";
        email.classList.add("error-border");
        valid = false;
    } 
    else if (!/\S+@\S+\.\S+/.test(email.value)) 
    {
        emailError.textContent = "Invalid email format";
        email.classList.add("error-border");
        valid = false;
    }

    if (message.value.trim() === "") 
    {
        messageError.textContent = "Message cannot be empty, write smth";
        message.classList.add("error-border");
        valid = false;
    }

    if (valid) 
    {
        successMessage.textContent = "Form submitted successfully!";
        name.value = "";
        email.value = "";
        message.value = "";
    }
});
