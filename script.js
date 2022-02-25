//game constants
let inputDir = { x: 0, y: 0 }
const foodSound = new Audio('music/food.mp3')
const gameoverSound = new Audio('music/gameover.mp3')
const moveSound = new Audio('music/move.mp3')
const gameMusic = new Audio('music/music.mp3')
const board = document.getElementById('board')


let frameSpeed = 2
let lastRenderTime = 0
let snakeArr = [
    { x: 13, y: 15 }
]
let food = { x: 20, y: 4 }
let score = 0

//game functions
function fps(current_time) {
    window.requestAnimationFrame(fps)
    if ((current_time - lastRenderTime) / 1000 < 1 / frameSpeed) {
        return
    }
    lastRenderTime = current_time
    gameEngine()

}
function collided(snakeArr){
    return false
}
function gameEngine() {
    if(collided(snakeArr)){
        gameoverSound.play()
        musicSound.pause()
        inputDir = {x:0 , y: 0}
        alert("Game Over, press any key to restart!")
        let snakeArr = [{ x: 13, y: 15 }]
        musicSound.play()
        score = 0

    }
    board.innerHTML = ""
    snakeArr.forEach((e, index) => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.y
        snakeElement.style.gridColumnStart = e.x
        if (index === 0) {
            snakeElement.classList.add("head")
        }
        else {
            snakeElement.classList.add("snakeBody")
        }
        board.append(snakeElement)


    })
    foodElement = document.createElement("div")
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add("food")
    board.append(foodElement)

}

//main logic 
window.requestAnimationFrame(fps)
window.addEventListener("keydown", e => {
    inputDir = { x: 0, y: 1 }
    moveSound.play()
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x = 0
            inputDir.y = -1
            break;
        case "ArrowDown":
            console.log("ArrowDown")
            inputDir.x= 0
            inputDir.y= +1
            break
        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x= -1
            inputDir.y= 0
            break
        case "ArrowRight":
            console.log("ArrowRight")
            inputDir.x= +1
            inputDir.y= 0
            console.log(inputDir)
            break
        default:
            break;
    }
})