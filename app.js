const container = document.querySelector('.container');

let customizedSize = prompt('Please enter the size of number');

setInitialCanvas();
setCustomizedCanvas();
const  divs = document.querySelectorAll('div > div');
printDot();
setResetBtn()







function setInitialCanvas() {
    for (let i = 0; i < 16*16; i++) {
        putDiv();
    }
    container.classList.add('gridBoard');
}

function setCustomizedCanvas() {
    for (let i = 0; i < (customizedSize*customizedSize); i++) {
        putDiv();
    }
    container.style.gridTemplateColumns = `repeat(${customizedSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${customizedSize}, 1fr)`;
}

function printDot() {
    divs.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = '#fa0';
        })
    })
}

function putDiv() {
    const div = document.createElement('div');
    container.appendChild(div);
}

function setResetBtn() {
    const resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        divs.forEach(div => {
            div.style.backgroundColor = '';
        })
    })
}