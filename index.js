
let board;
let context;
let blocksize = 20;
let cols = 30;
let rows = 20;

let bite_food;
let game_over;

let snakeX = 0;
let snakeY = 0;
let tail = [];

let foodX = 0;
let foodY = 0;

let score = 0;

let velocityX = 1;
let velocityY = 0;

let game_over = false;

window.onload = () => {

    board = document.getElementById('board');
    context = board.getContext('2d');

    appleAudio = new Audio('apple_sound.mp3');
    gameOverAudio = new Audio('game_over.mp3');

    board.width = cols * blockSize;
    board.height = rows * blockSize;

    document.addEventListener('keyup', changeDirection)

    board.addEventListener('click', () = {
        gameOver = false;
        score = 0;
    })

    foodPlace();
    setInterval(update, 1000/10);
    
}

function update(){

    // Clear Screen
    createRect(0, 0, board.width, board.height);

    if(gameOver){

        // Game end screen
        createText('Game Over', board.width / 2, board.height / 2 - 25, 'center', 50);
        createText(`score: ${score}`, board.width / 2, board.height / 2 + 25, 'center');
        createText('Click to Start Again', (cols * blockSize) / 2, board.height - 50, 'center');
        return
    }

    //write score
    createText(`Score: ${score}`, 30, 40);
    //Craete first food
    createRect(foodX, foodY, blockSize, 'lime');
    //Dit it eat 
    if(snakeX == foodX && snakeY == foodY){
        tail.push([foodX, foodY]);

        score =+ 10:

        appleAudio.play();

        foodPlace()
    }

    //snake tail
    for(let i = tail.length; i > 0; i--){
        tail[i] = tail[i - 1];
    }

    if(tail.length){
        tail[0] = [snakeX, snakeY]
    }

    //snake position
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;

    createRect(snakeX, snakeY, blocksize, 'orange');

    for(let i = 0; i < tail.length; i++){
        createRect(tail[i][0], tail[i][1], blockSize, blockSize, '')
    }

}

function foodPlace(){}

function changeDirection(){}

function game_overEvent(){}

function createRect(){}

function createText(){}


