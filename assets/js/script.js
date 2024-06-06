// Initial Data

let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');


// Events
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click', colorClickEvent);
});
  // Criando os evento de concatenar mouse com as funções
screen.addEventListener('mousedown', mouseDownEvent); // desce
screen.addEventListener('mousemove', mouseMoveEvent);  // movimenta
screen.addEventListener('mouseup', mouseUpEvent);  // sobe
document.querySelector('.clear').addEventListener('click', clearScreen)// Limpar


// Functions

       // Detectar em qual cor foi clicada
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;
            // remover a classe do document
    document.querySelector('.color.active').classList.remove('active');
            // Agora adiciona a classe em outro
    e.target.classList.add('active');
};

    // Modo Desenho
function mouseDownEvent (e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;   // Pegando a posição do mouse
    mouseY = e.pageY - screen.offsetTop;
};
     // Desenha caso a função acima esteja ativa
function mouseMoveEvent (e) {
    if (canDraw) {
        draw(e.pageX, e.pageY);
    }
};
        // soltar = desativar modo desenho 
function mouseUpEvent () {
    canDraw = false;
};

   // Function  de pintura
function draw (x,y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;   // tamanho da linha
    ctx.lineJoin = "round";  // formato da linha
    ctx.moveTo(mouseX, mouseY); // Mover
    ctx.lineTo(pointX, pointY); // continuar a linha
    ctx.closePath(); // Fechar o processo do desenho
    ctx.strokeStyle = currentColor //cor da linha
    ctx.stroke(); // Finaliza


    mouseX = pointX;
    mouseY = pointY;

};
            // Limpar Canvas
function clearScreen () {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
