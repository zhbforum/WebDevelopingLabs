let is24HourFormat = true;

function updateClock() 
{
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let period = "";
    if (!is24HourFormat) 
    {
        period = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12; 
    }

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}${period}`;
    document.getElementById("clock").textContent = formattedTime;
}

const toggleButton = document.getElementById("toggleFormat");
toggleButton.textContent = "Switch to 12h"; 

toggleButton.addEventListener("click", () => 
{
    is24HourFormat = !is24HourFormat;
    toggleButton.textContent = is24HourFormat ? "Switch to 12h" : "Switch to 24h";
    updateClock();
});

setInterval(updateClock, 1000);
updateClock();
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

