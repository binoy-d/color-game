var targetColor = getRandomColor()
var won = false;
var wrong_messages = ["wrong","try again","not quite","close, but not close enough", "oof","bruh you shouldnt be able to take this many tries"]
var c = 0;


function setup(){
    won=false;
    c= 0;
    document.getElementById('guess').innerHTML="Guess the color!!!"
    targetColor = getRandomColor()
    var all_squares = document.getElementsByClassName('game-square');
    document.getElementById('target-color').innerHTML = targetColor;
    document.body.style.backgroundColor = "#11111";
    for(var i = 0;i<all_squares.length;i++){
        all_squares[i].style.backgroundColor = getRandomColor();
        all_squares[i].classList.remove("invisible");
        all_squares[i].classList.add("visible");
        all_squares[i].addEventListener('click',checkClick);
    }
    all_squares[Math.floor(Math.random()*all_squares.length)].style.backgroundColor = targetColor;
}

function checkClick(){
    if(this.style.backgroundColor == targetColor){
        won = true;
        document.body.style.backgroundColor = targetColor;
        document.getElementById('guess').innerHTML="Correct!"
        console.log("right!")
    }else{
        console.log("wrong!")
        document.getElementById('guess').innerHTML=wrong_messages[c];
        var amt = String(5-c);
        this.classList.add("invisible")
        c+=1;
    }
}
function getRandomColor(){
    return 'rgb('+String(Math.floor(Math.random()*255))+", "+String(Math.floor(Math.random()*255))+", "+String(Math.floor(Math.random()*255))+")";
}

function restart(){
    setup();
}