import {jquery} from 'jquery';
import {edit} from 'scripts/edit-profile.js'
import {createCourse} from 'scripts/createCourse.js'

(function () {
	var sammyApp = Sammy('#content', function () {
		this.get('#/', function () {
			$('#content').html('');
		});
		this.get('#/edit-profile', edit);
		this.get('#/create-course', createCourse);
	});
	sammyApp.run('#/');
})();