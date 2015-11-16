var GLOBALS = {};

window.onload = function(){
	readQuery();
	var element = createSingleElement()
	console.log(createGrid(GLOBALS['x-size'], GLOBALS['y-size'], element));
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

    elementdiv.setAttribute('class','element-hole');
    elementdiv.appendChild(elem);
    elem.setAttribute("height", "50%");
	elem.setAttribute("width", "50%");
	elem.setAttribute("margin-left","auto");
	elem.setAttribute("margin-right","auto")
    elem.src="../element_img.png"

    elementtd.appendChild(elementdiv);
    return elementtd;
}
