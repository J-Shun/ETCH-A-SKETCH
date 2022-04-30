const allColor = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f',];
let color = '#000';
let customizedSize = 0;

const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset');
const colorChoice = document.querySelector('.color');
const eraser = document.querySelector('.fa-eraser');
const random = document.querySelector('.fa-question');

setInitialCanvas();
const  divs = document.querySelectorAll('div > div');
normalColorMode();


// function for setting canvas

function setInitialCanvas() {
    for (let i = 0; i < 32*32; i++) {
        putDiv();
    }
    container.classList.add('gridBoard');
}

function putDiv() {
    const div = document.createElement('div');
    container.appendChild(div);
}

function setCustomizedCanvas() {
    for (let i = 0; i < (customizedSize * customizedSize); i++) {
        putDiv();
    }
    container.style.gridTemplateColumns = `repeat(${customizedSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${customizedSize}, 1fr)`;
}


// function for printing
function printNormalColor(e) {
    e.target.style.backgroundColor = color;
}

function normalColorMode() {
    container.addEventListener('mousedown', () => {
        divs.forEach(div => {
            div.addEventListener('mouseover', printNormalColor);
        })
    })
    
    container.addEventListener('mouseup', () => {
        divs.forEach(div => {
            div.removeEventListener('mouseover', printNormalColor);
        })
    })
}


// function for effect

function reset() {
    divs.forEach(div => {
        div.style.backgroundColor = '';
    })
}

function changeColor() {
    color = '#';
    for(let i = 0; i < 6; i++) {
        color += allColor[Math.floor((Math.random() * allColor.length))];
    }
}

// button manipulate

colorChoice.addEventListener('input', () => {
    color = colorChoice.value;
    normalColorMode();
})

colorChoice.addEventListener('click', () => {
    color = colorChoice.value;
    normalColorMode();
})

resetBtn.addEventListener('click', (e) => {
    reset();
})

eraser.addEventListener('click', () => {
    color = '#fff';
    normalColorMode();
})

random.addEventListener('click', () => {
    changeColor();
    normalColorMode();
})