window.onload = function() {
	var signUpButton = document.getElementById('signup_button');
	signUpButton.onclick = signUp;
};

function signUp() {
	var email = document.getElementById('email_input');
	var emailValue = email.value;
	var emailRegex = /^[a-z]{3,4}\d{4}@truman.edu$/;

	if(!emailRegex.test(emailValue)) {
		if(!document.getElementById('email_error').hasChildNodes()) {
			var emailError = document.createElement('p');
			emailError.innerHTML = "Error in the email.";
			emailError.id = "email_error_message";
			emailError.style.textAlign = 'left';
			emailError.style.marginLeft = '18%';
			emailError.style.color = 'red';
			var emailErrorDiv = document.getElementById('email_error');
			emailErrorDiv.appendChild(emailError);
		}
	}
	else if(document.getElementById('email_error').hasChildNodes()) {
		var emailError = document.getElementById('email_error_message');
		emailError.parentNode.removeChild(emailError);
	}
}