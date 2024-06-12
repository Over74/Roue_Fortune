document.addEventListener("DOMContentLoaded", function() {
});

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function redirectToRating() {
    closePopup();
    window.location.href = 'rating.html';
}

function handleSpinButtonClick() {
    if (localStorage.getItem('rated') === 'true') {
        startSpin();
        localStorage.removeItem('rated');
    } else {
        showPopup();
    }
}
