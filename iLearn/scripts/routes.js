import {jquery} from 'jquery';
import {edit} from 'scripts/edit-profile.js';
import {createCourse} from 'scripts/createCourse.js';
import {courseTable} from 'scripts/courseGrid.js';
import  {addTable} from 'scripts/gridTable.js';


(function () {
	var sammyApp = Sammy('#content', function () {
		this.get('#/', function () {
			$('#content').html('');
		});
		this.get('#/edit-profile', edit);
		this.get('#/create-course', createCourse);
		this.get('#/course-grid', courseTable);
		this.get('#/all-students', addTable);
	});
	sammyApp.run('#/');
})();