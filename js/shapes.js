var GLOBALS = {};
var gameStartButton;
var gameCurrentlyActive;
window.onload = function(){
	readQuery();
	var element = createSingleElement()
	createGrid(GLOBALS['x-size'], GLOBALS['y-size'], element);

	gameStartButton = document.getElementById('game-start');

	gameStartButton.addEventListener('click', function(){
        startGame();
    })
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
    elementtd.appendChild(elementdiv);
    return elementtd;
}

function startGame() {
    // Make sure a game isn't already in progress before starting a game
    // set the game to be in progress if its not.
    // if(gameCurrentlyActive){
    //     return;
    // }
    // else {
    //     gameCurrentlyActive = true;
    // }

    // Hide the 
    gameStartButton.style.visibility = "hidden";
    initiateRound(GLOBALS['x-size'], GLOBALS['y-size'],0);
}

function initiateRound(x,y,roundNumber) {

	var selectedHoles = document.getElementsByClassName('inital-state');
	console.log(selectedHoles.length)
	// for(var i = 0; i < selectedHoles.length;i++){
	// 	console.log(selectedHoles[i])
	// }
}
