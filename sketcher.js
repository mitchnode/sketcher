let grid = 16;
let r = 200;
let g = 200;
let b = 200;


const page = document.querySelector('.page');
const container = document.querySelector('.container');


function randomColor(){
    
}

function createGrid(grid){
    let size = 1000/grid;
    for(let row = 0; row < grid; row++){
        for(let column = 0; column < grid; column++){
            const newSquare = document.createElement('div');
            newSquare.classList = 'square new';
            newSquare.setAttribute("style","width:" + size + "px; height: " + size + "px");
            newSquare.addEventListener('mouseover', function () {
                //newSquare.classList = 'square sketched';
                r = Math.random() * 255;
                g = Math.random() * 255;
                b = Math.random() * 255;
                newSquare.setAttribute("style","width:" + size + "px; height: " + size + "px; background-color: rgba(" + r + "," + g + "," + b + ",20)");
            });
            container.appendChild(newSquare);
        }
    }
}

const newButton = document.createElement('button');
newButton.textContent = "New";
container.before(newButton);
newButton.addEventListener('click',function (){
    grid = 0;
    while (grid > 100 || grid <= 0){
        grid = Number(prompt('Enter Grid Size (1-100):',16));
    }
    while( container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }  
    createGrid(grid);
})

createGrid(grid);
