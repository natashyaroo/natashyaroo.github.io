function toggleDarkMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('footer');

    body.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    

    const headings = document.querySelectorAll('h2, h3');
    headings.forEach((heading) => {
        heading.classList.toggle('dark-mode-text');
    });
}


function showAlert() {
    alert("This is a pop-up box!");
}

const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

const popupButton = document.getElementById('popupButton');
if (popupButton) {
    popupButton.addEventListener('click', showAlert);
}