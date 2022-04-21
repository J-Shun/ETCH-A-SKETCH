const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    putDiv();
}

const  divs = document.querySelectorAll('div > div');
divs.forEach(div => {
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = '#fa0';
    })
})

function putDiv() {
    const div = document.createElement('div');
    container.appendChild(div);
}


// reset button
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    divs.forEach(div => {
        div.style.backgroundColor = '';
    })
})