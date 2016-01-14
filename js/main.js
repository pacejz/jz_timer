var jz_timer = function() {

	// TIMESTAMP CE SERAIT QUAND MEME MIEUX
	
  	//Private attributes

  	var priv = {
		isRunning:  false,
		beginTime: null,
	  	timesRecorded:[],
    	interval:null
	};
	


	//Object to Return

	var pub = {
		start: startTimer,
		stop: stopTimer,
		reset: resetTimer,
		layout: layoutTimer,
		stopLayout: stopLayoutTimer,
		toString: timeToString
	};
	

	//Public methods

	function startTimer() {

		if(!priv.isRunning){
			priv.isRunning = true;
			priv.beginTime = Date.now();
			console.log("StartTimer");
		}
	}
	
	function stopTimer() {

		if(priv.isRunning){
      		priv.isRunning = false;
			console.log("StopTimer");			
		}
	}

	function resetTimer(){

		priv.beginTime = Date.now();
	}

	function layoutTimer(_step){

		var step = typeof _step == "number" ? _step : 1000;

		priv.interval = setInterval(function(){
			console.log(timeToString());
		},step);
		
	}

	function stopLayoutTimer(){

		clearInterval(priv.interval);

	}

	function timeToString(){

		var time = curTime();

		return time.hours + ":" + time.minutes + ":" + time.seconds + "." + time.milliSeconds;
	}


	// Private methods

	function curTime(unit) {

		var dur, 
			durToTime, 
			secLast, 
			minLast, 
			hourLast; 

		secLast = 1000; //1 sec = 1000 ms
		minLast = 60 * secLast;
		hourLast = 60 * minLast;

		if(priv.isRunning){
			dur = Date.now()-priv.beginTime;
		} else {
			dur = 0;
		}

		durToTime = {
			"milliSeconds": dur % 1000,
			"seconds": Math.floor(dur/secLast) % 60,
			"minutes": Math.floor(dur/minLast) % 60,
			"hours" : Math.floor(dur/hourLast) % 24
		};


		return (typeof durToTime[unit] === "number" ) ? durToTime[unit] : durToTime;
	}
	
	return pub;
};

var timer = jz_timer();




