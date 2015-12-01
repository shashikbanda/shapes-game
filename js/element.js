
function Element (row, col, dif){
	this.roundScore = 0;
	this.roundNumber = 1;

	$('.Right').append("<br>");
	$('.Right').append("<strong>Round 1<strong>");
	$('.Right').append("<br>");
	var index = this.startRound(row, col, dif);
	this.checkUserClicks(index, dif);
}
Element.prototype.resetDivs = function(){
	var $divs = $('.initial-state');

	for(var i = 0; i < $divs.length; i++){
		$divs.attr('data-index', 'false')
		$divs.removeAttr('data-order')
	}
}

Element.prototype.startRound = function(row,col,dif){
	var numElementsPerRound;
	var numElements = row*col;
	var indArr = [];
	if(dif === "all"){
		numElementsPerRound = 4;
	}
	else if(dif === "false"){
		numElementsPerRound = 5;
	}
	else if(dif === "true"){
		numElementsPerRound = 6;
	}
	for(var i=0;i<numElementsPerRound;i++){
		indArr.push(this.selectElement(numElements,i)) // returns random index from 0 - row*col + lights that index
	}
	console.log(indArr)
	return indArr;
}

Element.prototype.illuminate = function(index,roundIndex){
	var $illuminateElement = $('.initial-state')[index];

	setTimeout(function(){
		$($illuminateElement).attr("class", "selected-state")
		},(roundIndex*1000)) 

	setTimeout(function(){
		$($illuminateElement).attr("class", "initial-state")
	},(roundIndex*1000) + 1000) 

	$($illuminateElement).attr('data-index', 'true')
	$($illuminateElement).attr('data-order', roundIndex)
	return;
}

Element.prototype.selectElement = function(num,roundIndex){
	var selectIndex;
	selectIndex = this.getRandomIntBetween(0,num);

	if($('.initial-state')[selectIndex].getAttribute('data-index') === "false"){
		this.illuminate(selectIndex,roundIndex);

		return selectIndex;
	}
	else{
		while($('.initial-state')[selectIndex].getAttribute('data-index') !== "false"){
			selectIndex = this.getRandomIntBetween(0,num);
		}
		this.illuminate(selectIndex,roundIndex);

		return selectIndex;
	}
}

Element.prototype.checkUserClicks = function(indexArray,dif){
	// console.log("checkUsers being called")
	var numElementsPerRound;
	if(dif === "all"){
		numElementsPerRound = 4;
	}
	else if(dif === "false"){
		numElementsPerRound = 5;
	}
	else if(dif === "true"){
		numElementsPerRound = 6;
	}
	var currentIndex=0;
	
	var that = this;
	if(currentIndex < numElementsPerRound){
		that.printResults(that.roundScore) //APPENDS SCORE TO RIGHT BOARD
		$('#game-field').off('click');
		$('#game-field').click(function(evt){
			if(gameActive !== true){
				that.roundScore = 0;
				that.roundNumber = 0;
			}
			else if(gameActive === true){
				if($(evt.target).attr('data-index') === "true" && $(evt.target).attr('data-order') === currentIndex.toString()){
					that.roundScore +=1;
					
					setTimeout(function(){
						$($(evt.target)).attr("class", "selected-state")
						},(1)) 
					setTimeout(function(){
						$($(evt.target)).attr("class", "initial-state")
						},(500));
					currentIndex +=1;
					if($(evt.target).attr('data-order') === ((numElementsPerRound-1).toString())){
						console.log("numelementsperround = " + (numElementsPerRound-1))
						setTimeout(function(){
							$('#main-header-user').hide();
							$('#main-header-comp').show();
							that.roundNumber +=1;
							that.printRound(that.roundNumber)

							that.startNewRound();

							return;

						},(1000));
						
					}
					$('#main-header-user').show();
            		$('#main-header-comp').hide();
				}
				else if($(evt.target).attr('data-index') !== "true" && $(evt.target).attr('data-order') !== currentIndex.toString()){
					that.roundScore -=0.5;
					setTimeout(function(){
						$($(evt.target)).attr("class", "error-state")
						},(1)) 
					setTimeout(function(){
						$($(evt.target)).attr("class", "initial-state")
						},(500)); 
				}
				else{
					setTimeout(function(){
						$($(evt.target)).attr("class", "error-state")
						},(1)) 
					setTimeout(function(){
						$($(evt.target)).attr("class", "initial-state")
						},(500)); 
				}
			}		
		});
	}
}

Element.prototype.startNewRound = function(){

	this.resetDivs();
	index = this.startRound(GLOBALS['x-size'], GLOBALS['y-size'], GLOBALS['radios']);
	this.checkUserClicks(index, GLOBALS['radios']);
	return;
}

Element.prototype.printRound = function(roundNumber){
	$('.Right').append("<br>");
	$('.Right').append("<strong> Round " + roundNumber + "</strong>");
	$('.Right').append("<br>");
}

Element.prototype.printResults = function(roundScore){
	$('.Right').append("Score: " + roundScore);
	$('.Right').append("<br>");
}

Element.prototype.getRandomIntBetween = function(min,max){
	var randomIntNum = Math.floor(Math.random() * max) + min  
    return randomIntNum;
}