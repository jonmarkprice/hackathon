window.onload = function() {
	var signUpButton = document.getElementById('signup_button');
	signUpButton.onclick = signUp;
};

function signUp() {
	var verified = verifyPasswordLength()
					&& verifyPasswordMatch()
					&& verifyEmail();
	if (verified) {
		window.location.href = 'signup_confirm.html';
	}
}

function verifyPasswordLength() {
	var password = document.getElementById('password_input');
	var passwordValue = password.value;
	var passwordRegex = /^\w{8,25}$/;
	var verified = true;

	if(!passwordRegex.test(passwordValue)) {
		if(!document.getElementById('password_length_error').hasChildNodes()) {
			var passwordLengthError = document.createElement('p');
			passwordLengthError.innerHTML = "Error in the password.";
			passwordLengthError.id = 'password_error_message';
			passwordLengthError.style.textAlign = 'left';
			passwordLengthError.style.marginLeft = '18%';
			passwordLengthError.style.color = 'red';
			passwordLengthError.style.fontWeight = 'bold';
			var passwordLengthErrorDiv = document.getElementById('password_length_error');
			passwordLengthErrorDiv.appendChild(passwordLengthError);
		}
		verified = false;
	}
	else if(document.getElementById('password_length_error').hasChildNodes()) {
		var passwordLengthError = document.getElementById('password_error_message');
		passwordLengthError.parentNode.removeChild(passwordLengthError);
		verified = true;
	}
	return verified;
}

function verifyPasswordMatch() {
	var password = document.getElementById('password_input');
	var passwordValue = password.value;
	var confirmPassword = document.getElementById('confirm_password_input');
	var confirmPasswordValue = confirmPassword.value;
	var verified = true;

	if(!(passwordValue == confirmPasswordValue)) {
		verified = false;
	}
	return verified;
}

function verifyEmail() {
	var email = document.getElementById('email_input');
	var emailValue = email.value;
	var emailRegex = /^[a-z]{3,4}\d{4}@truman.edu$/;
	var verified = true;

	if(!emailRegex.test(emailValue)) {
		if(!document.getElementById('email_error').hasChildNodes()) {
			var emailError = document.createElement('p');
			emailError.innerHTML = "Error in the email.";
			emailError.id = 'email_error_message';
			emailError.style.textAlign = 'left';
			emailError.style.marginLeft = '18%';
			emailError.style.color = 'red';
			emailError.style.fontWeight = 'bold';
			var emailErrorDiv = document.getElementById('email_error');
			emailErrorDiv.appendChild(emailError);
		}
		verified = false;
	}
	else if(document.getElementById('email_error').hasChildNodes()) {
		var emailError = document.getElementById('email_error_message');
		emailError.parentNode.removeChild(emailError);
		verified = true;
	}
	return verified;
}