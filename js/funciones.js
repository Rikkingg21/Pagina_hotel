let currentService = 0;
const services = document.querySelectorAll('.servicio');

function showService(index) {
    services[currentService].classList.remove('active');
    services[currentService].classList.remove('hidenext');
    services[currentService].classList.remove('hideprev');

    currentService = (index + services.length) % services.length;

    services[currentService].classList.add('active');
    services[(currentService + 1) % services.length].classList.add('hidenext');
    services[(currentService - 1 + services.length) % services.length].classList.add('hideprev');
}

function changeService(direction) {
    showService(currentService + direction);
}

// Cambiar automáticamente cada 2 segundos
setInterval(() => {
    changeService(1);
}, 3000);