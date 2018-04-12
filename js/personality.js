

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

			return answerValue;
		}
	// calc score with answerScore function
		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7') + answerScore('q8') + answerScore('q9') + answerScore('q10') + answerScore('q11') + answerScore('q12') + answerScore('q13') + answerScore('q14') + answerScore('q15'));
		console.log("CalcScore: " + calcScore); // it works!

    var showScore = "Congratulations! Your personality is most like the ";

		if (calcScore > 34) {
		showScore = showScore + "Preamble -- You’re outgoing and start the conversation. You’re fun and memorable. <br> Because you never take sides, everyone likes you. You make it your goal to unify everyone, and you do a great job!";
  } else if (calcScore > 26){
		showScore = showScore + "Amendments -- Everyone likes you and you listen to everyone. <br> You have a caring heart and almost everybody knows you in some way or another. You’re flexible and unselfish."
  } else {
		showScore = showScore + "Articles -- You work behind the scenes and keep the world moving. <br> You have a plan for everything, and you’re very organized. <br> You might be shy, but every lucky friend who knows you well has found a treasure."
		};

		document.getElementById('userScore').innerHTML = showScore;
	}

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});
