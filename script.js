var targetColor = getRandomColor()
var won = false;

function setup(){
    won=false;
    targetColor = getRandomColor()
    var all_squares = document.getElementsByClassName('game-square');
    document.getElementById('target-color').innerHTML = targetColor;
    
    for(var i = 0;i<all_squares.length;i++){
        all_squares[i].style.backgroundColor = getRandomColor();
        
        all_squares[i].addEventListener('click',function(){
            if(this.style.backgroundColor == targetColor){
                won = true;
                console.log("right!")
            }else{
                console.log("wrong!")
            }
        });
    }
    all_squares[Math.floor(Math.random()*all_squares.length)].style.backgroundColor = targetColor;
}

function getRandomColor(){
    return 'rgb('+String(Math.floor(Math.random()*255))+", "+String(Math.floor(Math.random()*255))+", "+String(Math.floor(Math.random()*255))+")";
}

function restart(){
    setup();
}