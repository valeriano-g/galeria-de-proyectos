// Este evento se dispara cuando el contenido de la página se ha cargado completamente.
window.addEventListener('load', function() {
    // Ocultar el loader
    var loader = document.getElementById('loader-wrapper');
    loader.style.display = 'none';
});

// Función para mostrar u ocultar el botón cuando se desliza hacia abajo
window.onscroll = function() {
    var button = document.getElementById('scrollToTopButton');
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};

// Función para hacer scroll al inicio cuando se hace clic en el botón
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
