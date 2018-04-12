

	function submitQuiz() {
		console.log('submitted');

	// get each answer score
		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// change NaNs to zero
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

	// calc score with answerScore function
		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7') + answerScore('q8') + answerScore('q9') + answerScore('q10') + answerScore('q11') + answerScore('q12') + answerScore('q13') + answerScore('q14') + answerScore('q15'));
		console.log("CalcScore: " + calcScore); // it works!

	// function to return correct answer string
	function correctAnswer (correctStringNo, qNumber) {
		console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
		return ("Question " + qNumber + " was wrong. Right answer -- <strong> " +
			(document.getElementById(correctStringNo).innerHTML) + " </strong>");
		}

	// print correct answers only if wrong (calls correctAnswer function)
		if (answerScore('q1') === 0) {
			document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
		}
		if (answerScore('q2') === 0) {
			document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
		}
		if (answerScore('q3') === 0) {
			document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
		}
		if (answerScore('q4') === 0) {
			document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
		}
		if (answerScore('q5') === 0) {
			document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
		}
		if (answerScore('q6') === 0) {
			document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
		}
		if (answerScore('q7') === 0) {
			document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctString7', 7);
		}
		if (answerScore('q8') === 0) {
			document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctString8', 8);
		}
		if (answerScore('q9') === 0) {
			document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctString9', 9);
		}
		if (answerScore('q10') === 0) {
			document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctString10', 10);
		}
		if (answerScore('q11') === 0) {
			document.getElementById('correctAnswer11').innerHTML = correctAnswer('correctString11', 11);
		}
		if (answerScore('q12') === 0) {
			document.getElementById('correctAnswer12').innerHTML = correctAnswer('correctString12', 12);
		}
		if (answerScore('q13') === 0) {
			document.getElementById('correctAnswer13').innerHTML = correctAnswer('correctString13', 13);
		}
		if (answerScore('q14') === 0) {
			document.getElementById('correctAnswer14').innerHTML = correctAnswer('correctString14', 14);
		}
		if (answerScore('q15') === 0) {
			document.getElementById('correctAnswer15').innerHTML = correctAnswer('correctString15', 15);
		}
	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// show score as "score/possible score"
		var showScore = "Your Score: " + calcScore +"/" + questionCounter;
	// if 4/4, "perfect score!"
		if (calcScore > questionCounter -3) {
			showScore = showScore + " -- Awesome! I'm impressed! The government won't get away with <br> anything while you're watching!";
		} else if (calcScore > questionCounter -7){
			showScore = showScore + " -- That's pretty good! If the government tried anything <br> unconstitutional, you'd probably catch 70% of it!"
		} else if (calcScore > questionCounter -11){
		showScore = showScore + " -- Okay, that's still decent. Even a little bit of constitutional <br> knowledge will help defend you from the government!"
		} else if (calcScore > questionCounter){
		showScore = showScore + " -- Well, you know a little. The government would probably get away <br> with a lot with you, but not everything. Study up!"
		} else {
		showScore = showScore + " -- Wheesh! I'd read the Constitution VERY SOON if I were you. <br> Who knows what the government would get away with with you!"
		};

		document.getElementById('userScore').innerHTML = showScore;
	}

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});
