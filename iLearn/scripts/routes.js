import {jquery} from 'jquery';
import {edit} from 'scripts/edit-profile.js';
import {createCourse} from 'scripts/createCourse.js';
import {courseTable} from 'scripts/courseGrid.js';
import  {addTable} from 'scripts/gridTable.js';
import {login} from 'scripts/login.js'
import {registration} from 'scripts/registration.js';


(function () {
	var sammyApp = Sammy('#content', function () {
		this.get('#/', function () {
			$('#content').html('');
		});
		this.get('#/edit-profile', edit);
		this.get('#/create-course', createCourse);
		this.get('#/course-grid', courseTable);
		this.get('#/all-students', addTable);
		this.get('#/home', function () {
			$('.active').removeClass('active');
    		$('.home-nav-menu').addClass('active');
			$('#content').load('./content/home.html');
		});
		this.get('#/login', login);
		this.get('#/register', registration);
	});
	sammyApp.run('#/');
})();