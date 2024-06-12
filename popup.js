// popup.js
document.addEventListener("DOMContentLoaded", function() {
    // Initial code removed
});

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function redirectToRating() {
    closePopup(); // Fermer la pop-up
    window.location.href = 'rating.html'; // Rediriger vers la page de notation
}

function handleSpinButtonClick() {
    if (localStorage.getItem('rated') === 'true') {
        // Si l'utilisateur a déjà donné son avis, lancer la roue directement
        startSpin();
        localStorage.removeItem('rated'); // Réinitialiser le statut après le spin
    } else {
        // Sinon, montrer la popup
        showPopup();
    }
}
