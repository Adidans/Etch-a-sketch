const container = document.querySelector('#container');
const newGrid = document.querySelector('#new-grid');


function makeRows(rows) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-rows', rows);
    for (c = 0; c < (rows * rows); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };

    let cells = document.querySelectorAll('.grid-item');

    cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    })
    })
  };
  
makeRows(16)



function getRows() {
    let rows = prompt("Enter number of squares per side: ")
    if(rows > 100){
        rows = prompt("Enter a number lower than 100: ")
    }
    return rows
}

newGrid.addEventListener('click', function(){
    container.textContent = '';
    makeRows(getRows()) 
});
