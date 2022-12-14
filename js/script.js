// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// Prendo il bottone play
const playBUTTON = document.getElementById('play');

//faccio partire la funzione play con tutto il codice dentro 
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
    
    //switch per la difficolta del gioco 
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
        cell.innerHTML = `<span></span>`;

        //ciclo if con addEvent click con la funzione che mi differenza il rosso e il blu    
        let counter =0
        if (bombsPosition.includes(num)) {
            cell.classList.add('bomb');
            cell.addEventListener('click', function () {
                
                const arrBomb = document.querySelectorAll('.bomb');
                for (let i = 0; i < arrBomb.length; i++) {
                    arrBomb[i].classList.add('red');
                    let endGame =document.getElementById('hola');
                    endGame.innerHTML="hai perso dopo x mosse"
                   
                }
                fieldGame .classList.add('noncliccabile');
            
                /*qua va inserito la frazione di codice per far spuntare il contatore di click !!!!

            
                */
            });
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
// attacco event listener al bottone play per far partire il gioco 
playBUTTON.addEventListener('click', play);
