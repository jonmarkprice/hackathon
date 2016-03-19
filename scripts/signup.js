window.onload = function() {
	var signUpButton = document.getElementById('signup_button');
	signUpButton.onclick = signUp;
};

var emailRegex = /^[a-z]{,4}\d{4}$/;

function signUp() {
	var email = document.getElementById('email_input');
	var emailValue = email.value;

	if(!emailRegex.test(emailValue)) {
		var emailError = document.createElement('p');
		emailError.innerHTML = "Error in the email";
		email.appendChild(emailError);
	}

}