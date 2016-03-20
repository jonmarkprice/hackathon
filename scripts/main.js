window.onload = function() {
	var buyButton = document.getElementById('buy_button');
	buyButton.onclick = buyFunction;

	var sellButton = document.getElementById('sell_button');
	sellButton.onclick = sellFunction;

	var findBookButton = document.getElementById('find_book_button');
	findBookButton.onclick = findBookButtonFunction;

	var sellBookButton = document.getElementById('sell_book_button');
	sellBookButton.onclick = sellBookButtonFunction;
}

function buyFunction() {
	var buyInfo = document.getElementById('buy_info');	
	buyInfo.style.display = 'block';
	var sellInfo = document.getElementById('sell_info');
	sellInfo.style.display = 'none';
}

function sellFunction() {
	var buyInfo = document.getElementById('buy_info');	
	buyInfo.style.display = 'none';
	var sellInfo = document.getElementById('sell_info');
	sellInfo.style.display = 'block';
	var searchResult = document.getElementById('search_results');
	searchResult.style.display = 'none';
}

function findBookButtonFunction() {
	var verified = verifySubject('subject_input_buy', 'subject_buy_error') && 
		verifyCourseNum('course_num_input_buy', 'course_num_buy_error');

	var searchResult = document.getElementById('search_results');	
	if (verified) {
		searchResult.style.display = 'block';
	} else {
		searchResult.style.display = 'none';
	}
}

function sellBookButtonFunction() {
	var verified = verifySubject('subject_input_sell', 'subject_sell_error') &&
		verifyCourseNum('course_num_input_sell', 'course_num_sell_error');

	if (verified) {
		console.log("OK");
		window.location.href = 'sell_confirm.html';
	}
}

function verifySubject(inputId, errorId) {
	var subject = document.getElementById(inputId).value;
	var subjectRegex = /^[a-zA-Z]{2,5}$/
	if (!subjectRegex.test(subject)) {
		if (!document.getElementById(errorId).hasChildNodes()) {
			var errorMessage = document.createElement('p');
			errorMessage.innerHTML = "Invalid subject";
			errorMessage.id = errorId + "_message";
			errorMessage.style.textAlign = "left";
			errorMessage.style.marginLeft = '18%';
			errorMessage.style.color = 'red';
			document.getElementById(errorId).appendChild(errorMessage);
		}
		return false;
	} else if (document.getElementById(errorId).hasChildNodes()) {
		var errorMessage = document.getElementById(errorId + "_message");
		errorMessage.parentNode.removeChild(errorMessage);
	}
	return true;
}

function verifyCourseNum(inputId, errorId) {
	var courseNum = document.getElementById(inputId).value;
	var courseNumRegex = /^\d{3}$/;
	if (!courseNumRegex.test(courseNum)) {
		if (!document.getElementById(errorId).hasChildNodes()) {
			var errorMessage = document.createElement('p');
			errorMessage.innerHTML = "Course number must be 3 digits";
			errorMessage.id = errorId + "_message";
			errorMessage.style.textAlign = "left";
			errorMessage.style.marginLeft = '18%';
			errorMessage.style.color = 'red';
			document.getElementById(errorId).appendChild(errorMessage);
		}
		return false;
	} else if (document.getElementById(errorId).hasChildNodes()) {
		var errorMessage = document.getElementById(errorId + "_message");
		errorMessage.parentNode.removeChild(errorMessage);
	}
	return true;
}