//game constants
let direction = {x: 0 , y:0}
const foodSound = new Audio('music/food.mp3')
const gameoverSound = new Audio('music/gameover.mp3')
const moveSound = new Audio('music/move.mp3')
const gameMusic= new Audio('music/music.mp3')
 
let frameSpeed = 2
let lastRenderTime = 0
let snakeArr = [
    {x:13 , y:15}
]

//game functions
function fps(current_time){
    window.requestAnimationFrame(fps)
    if((current_time-lastRenderTime)/1000 < 1/frameSpeed){
        return
    }
    lastRenderTime = current_time
    gameEngine()
    
}
function gameEngine(){
    //update the snake and food positions

    //generate and display snake and apple
    Board.innerHTML = ""
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.y
        snakeElement.style.gridColumnStart = e.x
        snakeElement.classList.add('food')
        Board.appendChild(snakeElement)
    })
}
//main logic 
window.requestAnimationFrame(fps)