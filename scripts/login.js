window.onload = function() {
	var login = document.getElementById('login_button');
	login.onclick = loginFunction;
};

function loginFunction() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	if (username == 'bulldog' && password == 'hackathon16') {
		window.location.href = 'main.html';
	} else if (!document.getElementById('login_failure').hasChildNodes()) {
		var message = document.createElement('p');
		message.innerHTML = "Wrong credentials";
		message.id = "login_failure_message";
		message.className = 'error_message';
		document.getElementById('login_failure').appendChild(message);
	}

	// var loginButton = document.getElementById('login_button');
	// loginButton.onclick = function () {
	// 	var request = new XMLHttpRequest();
	// 	var credentials = {
	// 		username: username,
	// 		password: password
	// 	};
	// 	var data = JSON.stringify(credentials);
	// 	request.open("POST", "../lib/verify_credential.php", true);
	// 	request.setRequestHeader('Content-Type', 'application/json');
	// 	request.send(data);

	// 	var response = JSON.parse(request.response);
	// 	if (response === "successful") {
	// 		window.location.href = 'main.html';
	// 	}
	// };
	//}
}
