var score =0;
var startsquare = document.getElementById("start");
var endsquare = document.getElementById("end");
var game = document.getElementById("game");
var boundary = document.getElementsByClassName("boundary");
var totalscore = document.getElementsByClassName("boundary example");
var reset =0;
var gamestart=0;
//alert("this works11");
totalscore[0].innerHTML="Score: "+score;


document.getElementById("start").addEventListener("click",Reset) ;
function Reset() {
    reset=0;
    gamestart=1;
   
   for (i = 0; i < boundary.length; i++) {
    boundary[i].style.backgroundColor ="#eeeeee";
      }
    score=0;
  totalscore[0].innerHTML="Score: "+score;
    document.getElementById("status").innerHTML="Start Game";

};


game.addEventListener("mouseleave",OutofGame);

function OutofGame(){
    if (gamestart==1){
        document.getElementById("status").innerHTML="Don't cheat!";
      gamestart=0;
      for (i = 0; i < boundary.length; i++) {
    boundary[i].style.backgroundColor ="red";
      }

    }

}

document.getElementById("start").addEventListener("mouseenter",StartGame) ;
function StartGame(){
    //alert("this works");
    gamestart=1;
    reset=0;
  for (i = 0; i < boundary.length; i++) {
    boundary[i].style.backgroundColor ="#eeeeee";
      }
  document.getElementById("status").innerHTML="Game Started!";
   for (i = 0; i < boundary.length; i++) {
    boundary[i].addEventListener("mouseenter", GameLost);
}

endsquare.addEventListener("mouseenter", GameWon);
    

}


    


function GameLost(){
    if (gamestart==1){
    gamestart=0;
      for (i = 0; i < boundary.length; i++) {
    boundary[i].style.backgroundColor ="red";
      }
    reset=1;
    document.getElementById("status").innerHTML="You Lose!";
    score=score-10;
    totalscore[0].innerHTML="Score: "+score;
    }
};

function GameWon(){
    if(reset==0 && gamestart==1){
        gamestart=0;
        score=score+5;
        totalscore[0].innerHTML="Score: "+score;
       
      for (i = 0; i < boundary.length; i++) {
    boundary[i].style.backgroundColor ="green";
      }
      
        document.getElementById("status").innerHTML="you Won!";
    }
}