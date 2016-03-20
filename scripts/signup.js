window.onload = function() {
	var signUpButton = document.getElementById('signup_button');
	signUpButton.onclick = signUp;
};

function signUp() {
	var verified = verifyFirstName()
					&& verifyLastName()
					&& verifyUsername()
					&& verifyPasswordLength()
					&& verifyPasswordMatch()
					&& verifyEmail();
	if (verified) {
		window.location.href = 'signup_confirm.html';
	}
}

function verifyFirstName() {
	var firstNameValue = document.getElementById('first_name_input').value;
	var firstNameRegex = /^[A-Z]{1}[a-z]{1,20}$/;

	if(!firstNameRegex.test(firstNameValue)) {
		if(!document.getElementById('first_name_error').hasChildNodes()) {
			var firstNameError = document.createElement('p');
			firstNameError.innerHTML = "Name requires 1 uppercase letter and 1 lowercase letter.";
			firstNameError.id = 'first_name_error_message';
			firstNameError.className = 'error_message';
			var firstNameErrorDiv = document.getElementById('first_name_error');
			firstNameErrorDiv.appendChild(firstNameError);
		}
		return false;
	}
	else if(document.getElementById('first_name_error').hasChildNodes()) {
		var firstNameError = document.getElementById('first_name_error_message');
		firstNameError.parentNode.removeChild(firstNameError);
	}
	return true;
}

function verifyLastName() {
	var lastNameValue = document.getElementById('last_name_input').value;
	var lastNameRegex = /^[A-Z]{1}[a-z]{1,20}$/;

	if(!lastNameRegex.test(lastNameValue)) {
		if(!document.getElementById('last_name_error').hasChildNodes()) {
			var lastNameError = document.createElement('p');
			lastNameError.innerHTML = "Last name requires 1 uppercase letter and 1 lowercase letter.";
			lastNameError.id = 'last_name_error_message';
			lastNameError.className = 'error_message';
			var lastNameErrorDiv = document.getElementById('last_name_error');
			lastNameErrorDiv.appendChild(lastNameError);
		}
		return false;
	}
	else if(document.getElementById('last_name_error').hasChildNodes()) {
		var lastNameError = document.getElementById('last_name_error_message');
		lastNameError.parentNode.removeChild(lastNameError);
	}
	return true;
}

function verifyUsername() {
	var usernameValue = document.getElementById('username_input').value;
	var usernameRegex = /^\w{3,25}\S$/;

	if(!usernameRegex.test(usernameValue)) {
		if(!document.getElementById('username_error').hasChildNodes()) {
			var usernameError = document.createElement('p');
			usernameError.innerHTML = "Error in the username.";
			usernameError.id = 'username_error_message';
			usernameError.className = 'error_message';
			var usernameErrorDiv = document.getElementById('username_error');
			usernameErrorDiv.appendChild(usernameError);
		}
		return false;
	}
	else if(document.getElementById('username_error').hasChildNodes()) {
		var usernameError = document.getElementById('username_error_message');
		usernameError.parentNode.removeChild(usernameError);
	}
	return true;
}

function verifyPasswordLength() {
	var passwordValue = document.getElementById('password_input').value;
	var passwordRegex = /^\w{8,25}$/;

	if(!passwordRegex.test(passwordValue)) {
		if(!document.getElementById('password_length_error').hasChildNodes()) {
			var passwordLengthError = document.createElement('p');
			passwordLengthError.innerHTML = "Error in the password.";
			passwordLengthError.id = 'password_error_message';
			passwordLengthError.className = 'error_message';
			var passwordLengthErrorDiv = document.getElementById('password_length_error');
			passwordLengthErrorDiv.appendChild(passwordLengthError);
		}
		return false;
	}
	else if(document.getElementById('password_length_error').hasChildNodes()) {
		var passwordLengthError = document.getElementById('password_error_message');
		passwordLengthError.parentNode.removeChild(passwordLengthError);
	}
	return true;
}

function verifyPasswordMatch() {
	var passwordValue = document.getElementById('password_input').value;
	var confirmPasswordValue = document.getElementById('confirm_password_input').value;

	if(!(passwordValue == confirmPasswordValue)) {
		if(!document.getElementById('password_mismatch_error').hasChildNodes()) {
			var passwordMismatchError = document.createElement('p');
			passwordMismatchError.innerHTML = "This password does not match.";
			passwordMismatchError.id = 'password_mismatch_error_message';
			passwordMismatchError.className = 'error_message';
			var passwordMismatchErrorDiv = document.getElementById('password_mismatch_error');
			passwordMismatchErrorDiv.appendChild(passwordMismatchError);
		}
		return false;
	}
	else if(document.getElementById('password_mismatch_error').hasChildNodes()) {
		var passwordMismatchError = document.getElementById('password_mismatch_error_message');
		passwordMismatchError.parentNode.removeChild(passwordMismatchError);
	}
	return true;
}

function verifyEmail() {
	var email = document.getElementById('email_input');
	var emailValue = email.value;
	var emailRegex = /^[a-z]{1,4}\d{4}@truman.edu$/;

	if(!emailRegex.test(emailValue)) {
		if(!document.getElementById('email_error').hasChildNodes()) {
			var emailError = document.createElement('p');
			emailError.innerHTML = "Error in the email.";
			emailError.id = 'email_error_message';
			emailError.className = 'error_message';
			var emailErrorDiv = document.getElementById('email_error');
			emailErrorDiv.appendChild(emailError);
		}
		return false;
	}
	else if(document.getElementById('email_error').hasChildNodes()) {
		var emailError = document.getElementById('email_error_message');
		emailError.parentNode.removeChild(emailError);
	}
	return true;
}