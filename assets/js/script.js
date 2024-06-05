// Initial Data

let currentColor = 'black';

let screen = document.querySelector


// Events
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click', colorClickEvent);
});


// Functios

       // Detectar em qual cor foi clicada
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;
            // remover a classe do document
    document.querySelector('.color.active').classList.remove('active');
            // Agora adiciona a classe em outro
    e.target.classList.add('active');
};