var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble(){

    var clutter = "";
    for(var a = 0 ; a < 96 ; a++){
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){

   var timeID = setInterval(function (){
        if(timer > 0 ){
            timer--;
            document.querySelector("#runtime").textContent = timer;
        }else{
            clearInterval(timeID);
            document.querySelector("#pbtm").innerHTML =  `<div><h1> Game Over !!</h1> </br> <h1> Your Score: ${score}</h1></div>`;

        }
    }, 1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    var hit = Number(details.target.textContent);
    if(hit === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }

})


makeBubble();
runTimer();
getNewHit();
