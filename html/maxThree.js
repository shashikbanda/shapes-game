function maxThree(input){
	var maxArr = [];
	for(var j=0; j <3; j++){
		var topThreeNums = returnMax(input)
		maxArr.push(topThreeNums);
		var indexOfMax = input.indexOf(topThreeNums);
		input.splice(indexOfMax,1)
	}
	console.log(maxArr)
}

function returnMax(input){
	var maxNum = input[0];
	for(var i = 1; i < input.length; i++){
		if (input[i] > maxNum){
			maxNum = input[i]
		}
	}
	return maxNum;
}

maxThree([1,2,3,4,5,6,7,8,9,-10, 50, 99, Number.POSITIVE_INFINITY])