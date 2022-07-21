const Game = (function () {
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    // DOM caching
    const spots = document.querySelectorAll('.spot');
    const winner = document.querySelector('.winner');
    const restartBtn = document.querySelector('.restart');
    const winnerDisplay = document.querySelector('.win-restart');
    
    
    // Player Object
    function Player(name, marker) {

        return {
            name,
            marker
        }
    }
   
    const player1 = Player('PlayerX', 'X');
    const player2 = Player('PlayerO', 'O');

    render()

    function render() {
        let player2Turn = false;

        spots.forEach((spot, index) => {
            spot.addEventListener('click', (e) => {
                if (player2Turn === false && gameBoard[index] === '') {
                    gameBoard[index] = player1.marker
                    spot.textContent = gameBoard[index] 
                    player2Turn = true                                 
                } else if (player2Turn === true && gameBoard[index] === '') {
                    gameBoard[index] = player2.marker
                    spot.textContent = gameBoard[index]
                    player2Turn = false
                }
                anounceWinner()
            })
        })
    }     

    
    function anounceWinner() {
        if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
            winner.textContent = `${player1.name} won`;
            restartBtn.classList.toggle('active')
            setTimeout(() => winnerDisplay.classList.toggle('active'), 500)
        } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
            winner.textContent = `${player1.name} won`;
            restartBtn.classList.toggle('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
            winner.textContent = `${player1.name} won`;
            restartBtn.classList.toggle('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
            winner.textContent = `${player1.name} won`;
            restartBtn.classList.add('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
            winner.textContent = `${player1.name} won`;
            restartBtn.classList.add('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
            winner.textContent = `${player1.name} won`;
            restartBtn.classList.toggle('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
            winner.textContent = `${player1.name} won`;
            restartBtn.classList.add('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
            winner.textContent = `${player1.name} won`;
            restartBtn.classList.add('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
            winner.textContent = `${player2.name} won`;
            restartBtn.classList.add('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
            winner.textContent = `${player2.name} won`;
            restartBtn.classList.add('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
            winner.textContent = `${player2.name} won`;
            restartBtn.classList.add('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
            winner.textContent = `${player2.name} won`;
            restartBtn.classList.add('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
            winner.textContent = `${player2.name} won`;
            restartBtn.classList.add('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
            winner.textContent = `${player2.name} won`;
            restartBtn.classList.toggle('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
            winner.textContent = `${player2.name} won`;
            restartBtn.classList.add('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
            winner.textContent = `${player2.name} won`;
            restartBtn.classList.add('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        } else if (gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' && gameBoard[3] !== '' && gameBoard[4] !== '' && gameBoard[5] !== '' && gameBoard[6] !== '' && gameBoard[7] !== '' && gameBoard[8] !== '') {
            winner.textContent = `Tie!`;
            restartBtn.classList.add('active')
           setTimeout(() => winnerDisplay.classList.toggle('active'), 300)
        }

    }

    restartBtn.addEventListener('click', restartGame)

    function restartGame() {
        winnerDisplay.classList.remove('active');
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        player2Turn = false;
        spots.forEach(spot => {
            spot.textContent = '';
        })
    }

})()