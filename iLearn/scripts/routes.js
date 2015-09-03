import {jquery} from 'jquery';

(function () {
	var sammyApp = Sammy('#content', function () {
		this.get('#/', function () {
			$('#content').html('');
		});
		this.get('#/edit-profile', function () {
			$('#content').load('./content/edit-profile.html');
			// var fileref = document.createElement('<script>');
			// fileref.setAttribute("id", "edit-profile-script");
			// fileref.setAttribute("type", "text/javascript");
			// fileref.setAttribute("src", 'scripts/edit-profile.js');
			// $('body').append(fileref);
		});
	});
	sammyApp.run('#/');
})();