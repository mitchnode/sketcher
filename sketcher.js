let grid = 16;

const container = document.querySelector('.container');

function createGrid(grid){
    let size = 1000/grid;
    for(let row = 0; row < grid; row++){
        for(let column = 0; column < grid; column++){
            const newSquare = document.createElement('div');
            newSquare.classList = 'square new';
            newSquare.setAttribute("style","width:" + size + "px; height: " + size + "px");
            newSquare.addEventListener('click', function(square){square.classList = 'square sketched'});
            container.appendChild(newSquare);
        }
    }
}
createGrid(grid);
