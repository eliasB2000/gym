function showAlert() {
    alert("Danke für dein Interesse! Melde dich jetzt an.");
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Danke für deine Nachricht! Wir melden uns bald.");
});
