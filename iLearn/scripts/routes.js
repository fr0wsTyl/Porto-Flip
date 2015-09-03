import {jquery} from 'jquery';
import {edit} from 'scripts/edit-profile.js'

(function () {
	var sammyApp = Sammy('#content', function () {
		this.get('#/', function () {
			$('#content').html('');
		});
		this.get('#/edit-profile', edit);
	});
	sammyApp.run('#/');
})();