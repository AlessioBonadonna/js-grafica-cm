// Prendo il bottone play
const playBUTTON = document.getElementById('play');

function play() {
    let cucu = document.getElementById('cucu');
    cucu.classList.remove('noncliccabile');
    document.getElementById('h2').style.display = 'none';
    const NUM_BOMB = 16;
    const bombsPosition = [];
    let numCell;
    const fieldGame = document.getElementById('field-game');
    fieldGame.innerHTML = '';
    const levelHTML = document.getElementById('livello');
    const level = levelHTML.value;
    switch (level) {
        case '1':
        default:
            numCell = 100;
            break;
        case '2':
            numCell = 81;
            break;
        case '3':
            numCell = 49;
            break;
    }


    // funzione che genera la cella
    function drawCell(num) {
        const cellPerSide = Math.sqrt(numCell);
        const cell = document.createElement('div');
        cell.className = 'square';
        cell.style.width = `calc(100% / ${cellPerSide})`;
        cell.style.height = `calc(100% / ${cellPerSide})`;
        cell.innerHTML = `
            <span></span>
            
        `;
        
            

        if (bombsPosition.includes(num)) {
            cell.classList.add('bomb');
            cell.addEventListener('click', function () {
                const arrBomb = document.querySelectorAll('.bomb');
                for (let i = 0; i < arrBomb.length; i++) {
                    arrBomb[i].classList.add('red');
                }
                cucu.classList.add('noncliccabile');
            
            

            

            } 
            
            
            );
        } else {
            cell.addEventListener('click', function () {
                this.classList.add('green');
            });
        }
        return cell;
    }



    while (bombsPosition.length < NUM_BOMB) {
        const bomb = randomNumber(1, numCell);
        if (!bombsPosition.includes(bomb)) {
            bombsPosition.push(bomb);
        }
    }
    console.log(bombsPosition);

    // funzione che genera il campo di gioco
    function drawGrid() {
        const grid = document.createElement('div');
        grid.className = 'grid';
        for (let i = 1; i <= numCell; i++) {
            const cell = drawCell(i);
            grid.appendChild(cell);
        }
        fieldGame.appendChild(grid);
    }
    // chiamo la funzione
    drawGrid();
}
// attacco event listener al bottono play
playBUTTON.addEventListener('click', play);
