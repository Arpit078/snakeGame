//game constants
let direction = {x: 0 , y:0}
const foodSound = new Audio('music/food.mp3')
const gameoverSound = new Audio('music/gameover.mp3')
const moveSound = new Audio('music/move.mp3')
const gameMusic= new Audio('music/music.mp3')
 
let frameSpeed = 2
let lastRenderTime = 0

//game functions
function fps(current_time){
    window.requestAnimationFrame(fps)
    if((current_time-lastRenderTime)/1000 < 1/frameSpeed){
        return
    }
    lastRenderTime = current_time
    
    
}
//main logic 
window.requestAnimationFrame(fps)