document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let reason = document.getElementById("reason").value;

    if (name && email && date && time && reason) {
        document.getElementById("confirmationMessage").innerText = 
            `Appointment booked for ${name} on ${date} at ${time}.`;
        this.reset();
    } else {
        document.getElementById("confirmationMessage").innerText = "Please fill out all fields.";
    }
});