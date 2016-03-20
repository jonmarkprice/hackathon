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
		sendAJAXRequest();
	} else {
		searchResult.style.display = 'none';
	}
}

function addResults() {
	var ul, obj, i;
	obj = JSON.parse(req.response);
	console.log("addResults");
	for (var i = 0; i < obj.length; i++) {
		createResult(obj[i]);
	}
}


// AJAX
var req;
function sendAJAXRequest() {
	req = new XMLHttpRequest();
	req.open('POST', 'http://150.243.196.199/~jon/hackathon/lib/template.json', true); // GET or POST?
	req.setRequestHeader("Content-Type", "application/json"); // mb.
	req.onload = addResults;
	console.log("sendAJAXRequest");
	req.send();
}


function createResult(obj) {
	var div = document.createElement('div');
	div.style.border = '2px solid #2B2B2B';
	div.style.width = '60%';
	div.style.margin = '0 auto';
	var ul = document.createElement('ul');
	ul.style.listStyleType = 'none';
	for (var i = 1; i < 7; i++) {
		var li = document.createElement('li');
		li.style.fontSize = 'medium';
		ul.appendChild(li);
		if(i == 1) {
			li.innerHTML = obj.course_dept;
		}
		if (i == 2) {
			li.innerHTML = obj.course_num;
		}
		if (i == 3) {
			var specialLi = document.createElement('li');
			specialLi.innerHTML = 'Seller info:';
			specialLi.style.fontWeight = 'bold';
			specialLi.style.margin = '0';
			ul.appendChild(specialLi);
			li.innerHTML = obj.title;
		}
		if (i == 4) {
			li.innerHTML = obj.seller_first_name;
		}
		if (i == 5) {
			li.innerHTML = obj.seller_last_name;
		}
		if (i == 6) {
			li.innerHTML = obj.seller_email;
		}
		if (i == 7) {
			li.innerHTML = obj.price;
		}
		if(i > 3 && i < 7) {
			li.style.textIndent = '20px';
		}
	}
	div.appendChild(ul);
	var picture = document.createElement('img');
	picture.style.float = 'right';
	picture.style.width = '100px';
	picture.style.height = '100px';
	picture.style.src = 'http://ecx.images-amazon.com/images/I/51lajKYYfoL._SX258_BO1,204,203,200_.jpg';
	div.appendChild(picture);
	var button = document.createElement('button');
	button.innerHTML = 'Buy!';
	button.style.margin = '0 0 1% 5%';
	button.className = 'btn btn-default';
	div.appendChild(button);

	var resultsSection = document.getElementById('search_results');
	resultsSection.appendChild(div);
}

function sellBookButtonFunction() {
	var verified = verifySubject('subject_input_sell', 'subject_sell_error') &&
		verifyCourseNum('course_num_input_sell', 'course_num_sell_error') &&
		verifyPrice('price_input', 'price_error');;

	if (verified) {
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

function verifyPrice(inputId, errorId) {
	var price = document.getElementById(inputId).value;
	var priceRegex = /^\d{1,4}(\.\d{1,2})?$/;
	if (!priceRegex.test(price)) {
		if (!document.getElementById(errorId).hasChildNodes()) {
			var errorMessage = document.createElement('p');
			errorMessage.innerHTML = "Invalid price";
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
