window.onload = function() {
	var login = document.getElementById('login_button');
	login.onclick = loginFunction;
};

function loginFunction() {
	var username = document.getElementById('username');
	var usernameValue = username.value;
	var password = document.getElementById('password');
	var passwordValue = password.value;

	var loginButton = document.getElementById('login_button');
	loginButton.onclick = function () {
		var request = new XMLHttpRequest();
		var credentials = {
			username: username,
			password: password
		};
		var data = JSON.stringify(credentials);
		request.open("POST", "../lib/verify_credential.php", true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(data);

		var response = JSON.parse(request.response);
		if (response === "successful") {
			window.location.href = 'main.html';
		}
	};
}
