// default variables
var timer;
var counter = 20;
var path    = "http://coderill.com";

/**
 * start timer
 * decrease the counter variable
 * and redirect to another url
 *
 */
function startTimer() {
	timer = setInterval(function() {
		if(counter > 0) {
			var counterString = (counter > 9) ? counter : ("0" + counter);

			document.querySelector('#countdown').innerHTML = "00:" + counterString;
			counter--;
		} else {
			window.location.href = path;
		}

	}, 1000);
}

// start the timer
startTimer();

/**
 * visibilitychange event monitor the document visible or not
 * if not clear the timer interval (stop the timer)
 * else start the timer after 1 seconds
 *
 */
document.addEventListener("visibilitychange", function() {
	if(document.visibilityState == "hidden") {
		// stop interval
		clearInterval(timer);
	} else {
		// restart after 1 seconds
		setTimeout(startTimer, 1000);
	}
}, false);
