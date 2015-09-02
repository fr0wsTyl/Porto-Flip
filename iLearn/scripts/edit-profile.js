import {jquery} from 'jquery';
import {Parse} from 'parse';
import {bootflat} from 'bootflat';
import {parseInitialization} from 'scripts/engine.js';
import {validator} from 'scripts/validator.js'
import {handleError} from 'scripts/error-handler.js'

(function () {
	parseInitialization();
	$('[data-toggle="tooltip"]').tooltip({ 'placement': 'top' });

	let $emailInput = $('#email-edit-value');
	let $ageInput = $('#age-edit-value');
	let $passwordInput = $('#password-edit-value');
	let $saveChanges = $('#save-changes-button');

	let currentUser = localStorage.getItem('Parse/OxNzrzXTEVzRxH9qHpel84j4dD8QJs4aFUbmrWYc/currentUser');
	let username = JSON.parse(currentUser).username;
	let User = Parse.Object.extend("User");
	let query = new Parse.Query(User);
	query.equalTo("username", username);
	query.find({
		success: function (results) {
			$emailInput.val(results[0].attributes.email);
			$ageInput.val(results[0].attributes.age);
		},
		error: function (err) {
			console.log(err);
		}
	});

	$saveChanges.on('click', function () {
		function successChange(isPasswordChanged) {
			if (isPasswordChanged) {
				let $element = $('<div/ >').text('Changes were saved. You will need to sign in again...').addClass('label label-success').show();
				$('#result').html($element);
				setTimeout(function () {
					document.location.href = './login.html';
					Parse.User.logOut();
					localStorage.clear();
				}, 2500);
			}
			else {
				let $element = $('<div/ >').text('Changes were saved.').addClass('label label-success').show();
				$('#result').html($element);
			}
		}
		function changeFail(err) {
			let $element = $('<div/ >').text('Invalid data').addClass('label label-danger').show();
			$('#result').html($element);
			console.log(err);
		}
		let $emailInputValue = $('#email-edit-value').val();
		let $ageInputValue = $('#age-edit-value').val();
		let $passwordInputValue = $('#password-edit-value').val();

		try {
			validator.validateUserMail($emailInputValue);
			validator.validateUserAge($ageInputValue);
			validator.validateUserPasswordLength($passwordInputValue);
		} catch (err) {
			if (err.name === 'InputMailError') {
				handleError('#email-edit-value', err.message, $emailInputValue);
			}
			if (err.name === 'InputAgeError') {
				handleError('#age-edit-value', err.message, $ageInputValue);
			}
			if (err.name === 'InputPasswordLengthError') {
				handleError('#password-edit-value', err.message, $passwordInputValue);
			}
			return
		}

		var currentUser = Parse.User.current();
		if (currentUser) {
			if ($passwordInputValue.length > 0) {
				currentUser.save({
					email: $emailInputValue,
					password: $passwordInputValue,
					age: parseInt($ageInputValue)
				}, {
						success: successChange(true)
					});
			}
			else {
				currentUser.save({
					email: $emailInputValue,
					age: parseInt($ageInputValue)
				}, {
						success: successChange(false)
					});
			}

		}
	});

})();