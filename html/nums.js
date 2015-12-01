function Stream() {
	var sum = 0;
	this.sum = function() {
		return sum;
	}

	this.median = function() {

	}

	this.average = function() {
		var average = this.currentNum/sum;
	}

	this.streamPush = function(num) {
		sum+=num;
		var currentNum = num;
	}
}


// Test code, though it might be useful to you.
(function() {


	var streamer = new Stream();
	var arr = []
	for(var i = 0; i < 100; i++) {
		var current = Math.floor(Math.random() * 100);
		streamer.streamPush(current);
		arr.push(current);
	}

	// This is how we get those values for an array
	arr.sort(function(a, b) {
	  return a - b;
	});

	// get the sum
	var sum = 0;
	for(var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	// use the sum to get the average
	var avg = sum / arr.length;

	// get the median
	var median;
	if(arr.length % 2 === 0) {
		var itemOne = arr[(arr.length / 2)];
		var itemTwo = arr[(arr.length / 2) - 1];
		median = (itemOne + itemTwo) / 2;
	}
	else {
		median = arr[Math.floor(arr.length / 2)]
	}

	console.log("--sum--");
	console.log(sum);
	console.log(streamer.sum());

	console.log("\n--avg--");
	console.log(avg);
	console.log(streamer.average());

	console.log("\n--median--");
	console.log(median);
	console.log(streamer.median());
})();