const board = document.querySelector('#board');
const SWQARES_NUMDER = 500;
// const colors = ['red', 'blue', 'green', 'grey', 'pink','white', 'yellow']

for (let i = 0; i < SWQARES_NUMDER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

    board.append(square);
}

function setColor(element) {
    const color = getColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

// function getColor() {
//     const idx = Math.floor(Math.random() * colors.length)
//     return colors[idx];
// }
function getColor()
{  
  const num = Math.floor(Math.random() * 10000000);
  const string =  num.toString(16).toUpperCase();
  return "#"+ string;
}