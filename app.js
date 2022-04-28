const allColor = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f',];
let randomColor = [];


const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset');
const colorChoice = document.querySelector('.color');
const eraser = document.querySelector('.fa-eraser');
const random = document.querySelector('.fa-question');
let color = '#000';
let customizedSize = 0;

setInitialCanvas();
const  divs = document.querySelectorAll('div > div');
printNormalDot();

function setInitialCanvas() {
    for (let i = 0; i < 32*32; i++) {
        putDiv();
    }
    container.classList.add('gridBoard');
}

function setCustomizedCanvas() {
    for (let i = 0; i < (customizedSize * customizedSize); i++) {
        putDiv();
    }
    container.style.gridTemplateColumns = `repeat(${customizedSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${customizedSize}, 1fr)`;
}

function printNormalDot() {
    divs.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = color;
        })
    })
}

function printRandomDot() {
    divs.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            changeColor();
            e.target.style.backgroundColor = `#${randomColor.pop()}${randomColor.pop()}${randomColor.pop()}`;
        })
    })
}

function putDiv() {
    const div = document.createElement('div');
    container.appendChild(div);
}

function reset() {
    divs.forEach(div => {
        div.style.backgroundColor = '';
    })
}

function changeColor() {
    for(let i = 0; i < 3; i++) {
        randomColor.push(allColor[Math.floor((Math.random() * allColor.length))])
;    }
}

//  buttons

colorChoice.addEventListener('input', () => {
    color = colorChoice.value;
    printNormalDot();
})

colorChoice.addEventListener('click', () => {
    color = colorChoice.value;
    printNormalDot();
})

eraser.addEventListener('click', () => {
    color = '#fff';
    printNormalDot();
})

random.addEventListener('click', () => {
    printRandomDot();
})

resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    reset();
})