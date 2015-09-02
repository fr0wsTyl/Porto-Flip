import {jquery} from 'jquery';
import {Parse} from 'parse';
import {bootflat} from 'bootflat';
import {parseInitialization} from 'scripts/engine.js';

(function () {
	parseInitialization();
	$('[data-toggle="tooltip"]').tooltip({ 'placement': 'top' });

	let $emailInput = $('#email-edit-value');
	let $ageInput = $('#age-edit-value');
	let $passwordInput = $('#password-edit-value');
	let $saveChanges = $('#save-changes-button');
	
	let currentUser = localStorage.getItem('Parse/OxNzrzXTEVzRxH9qHpel84j4dD8QJs4aFUbmrWYc/currentUser');
	let username = JSON.parse(currentUser).username;
	console.log(username);
	let User = Parse.Object.extend("User");
	let query = new Parse.Query(User);
	query.equalTo("username", username);
	query.find({
		success: function (results) {
			$emailInput.val(results[0].attributes.email);
			$ageInput.val(results[0].attributes.age);
		}
	});
	
	$saveChanges.on('click', function () {
		let $emailInputValue = $('#email-edit-value').val();
		let $ageInputValue = $('#age-edit-value').val();
		let $passwordInputValue = $('#password-edit-value').val();

		var currentUser = Parse.User.current();
		if (currentUser) {
			currentUser.attributes.email = $emailInputValue;
			currentUser.attributes.age = $ageInputValue;
		}
	});
})();