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
