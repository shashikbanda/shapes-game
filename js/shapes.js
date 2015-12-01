var GLOBALS = {};
var gameStartButton;
var gameActive = false;
window.onload = function(){
    animateText();
	readQuery();
	var element = createSingleElement()
	createGrid(GLOBALS['x-size'], GLOBALS['y-size'], element);

	gameStartButton = document.getElementById('game-start');
    gameEndButton = document.getElementById('game-end');
    scoreHistory = document.getElementById('score-history');
    buttonArea = document.getElementById('left-container');


    buttonArea.appendChild(gameStartButton)
    buttonArea.appendChild(gameEndButton)
    buttonArea.appendChild(scoreHistory)
    gameEndButton.style.visibility = "hidden"
	gameStartButton.addEventListener('click', function(){
        if(gameActive === false){
            $('#main-header-user').hide();
            $('#main-header-comp').show();
            gameActive = true;
            startGame();
        }
        
    });
    gameEndButton.addEventListener('click', function(){
        if(gameActive === true){
            //$('.Left').append('<br></br>')
            $('#main-header-user').hide();
            $('#main-header-comp').hide();
            $('.Left').append("Score: " + GLOBAL_GAME.roundScore);
            $('.Left').append('<br></br>')

            gameActive=false;

            console.log(GLOBAL_GAME.roundScore)
            gameStartButton.style.visibility = "visible";
            gameEndButton.style.visibility = "hidden";
        }
        
    })
}
// function goToFinalPage(finalScore){
   
//     window.location.href = "../html/endgame.html";
//      $('#main-header-end').append(finalScore);
// }

function animateText(){
        $(document).ready(function(){
       "use strict";    
        $("nav").hide().slideDown({ queue: false, duration: 2000 });
        $("nav").hide().fadeIn({duration:2000, queue:false});
    });
}

function readQuery(){
	var queryString = document.location.search.replace('?','');
	var userInput = queryString.split('&').map(function (userInput){
    	return userInput.split('=');
	});
	console.log(userInput)

    for(var i = 0; i < userInput.length; i++){
        GLOBALS[userInput[i][0]] = userInput[i][1];
    }
    return GLOBALS;
}

function createGrid(x,y,element){
	    var maintable = document.getElementById('game-field');
    var newrow = document.createElement('tr');
    for(var row = 0; row < x; row++){
        var newerrow = maintable.insertRow(row);
        for(var col = 0; col < y; col++){
            var newcol = newerrow.insertCell(col);
            newcol.innerHTML = element.innerHTML;
        }
    }
}

function createSingleElement(){
    var elementtd = document.createElement('td');
    var elementdiv = document.createElement('div');
    var elem = document.createElement("img");

    elementdiv.setAttribute('class','initial-state');
    elementdiv.setAttribute('data-index','false');
    elementtd.appendChild(elementdiv);
    return elementtd;
}

function startGame() {
    gameStartButton.style.visibility = "hidden";
    gameEndButton.style.visibility = "visible"
    initiateRound(0);
}
var GLOBAL_GAME;
function initiateRound(roundNumber) {

    GLOBAL_GAME = new Element(GLOBALS['x-size'], GLOBALS['y-size'], GLOBALS['radios']) 
}
