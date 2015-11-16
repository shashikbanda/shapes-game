var GLOBALS = {};

window.onload = function(){
	readQuery();
	console.log(createGrid(GLOBALS['x-size'], GLOBALS['y-size']));
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

function createGrid(x,y){
	console.log(x);
	console.log(y);
	console.log("entered create grid funtions")
	var gameField = $('#game-field');

	for(var row = 0; row < x; row++){
		createSingleElement().append('gameField');
	}

	return;
}

function createSingleElement(){
	var defaultElement = $( "<div id='def-element'> Hello </div>" );
	return defaultElement;
}

//create login html / css
//create gameboard html / css

//add clickable objects to gameboard / js
//add dynamic scoreboard 



