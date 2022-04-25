const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset');
const colorChoice = document.querySelector('.color');
let color = '#000';
let customizedSize = 0;

setInitialCanvas();
const  divs = document.querySelectorAll('div > div');
printDot();
setResetBtn()

function setInitialCanvas() {
    for (let i = 0; i < 32*32; i++) {
        putDiv();
    }
    container.classList.add('gridBoard');
}

function setCustomizedSizeCanvas() {
    for (let i = 0; i < (customizedSize * customizedSize); i++) {
        putDiv();
    }
    container.style.gridTemplateColumns = `repeat(${customizedSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${customizedSize}, 1fr)`;
}

function printDot() {
    divs.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = color;
        })
    })
}

function putDiv() {
    const div = document.createElement('div');
    container.appendChild(div);
}

function setResetBtn() {
    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        divs.forEach(div => {
            div.style.backgroundColor = '';
        })
    })
}


colorChoice.addEventListener('input', () => {
    color = colorChoice.value;
})

