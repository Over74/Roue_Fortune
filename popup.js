document.addEventListener("DOMContentLoaded", function() {
    setTimeout(showPopup, 1000); // Afficher la pop-up après 1 seconde
});

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function redirectToWheel() {
    closePopup(); // Fermer la pop-up
    document.getElementById('spinButton').scrollIntoView({ behavior: 'smooth' }); // Défilement vers la roue
}
