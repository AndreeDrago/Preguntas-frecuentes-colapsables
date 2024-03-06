let desplegables = document.querySelectorAll('.pregunta-desplegable');

desplegables.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('activo');
    })
})