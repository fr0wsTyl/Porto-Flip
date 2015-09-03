import {jquery} from 'jquery';
// import {Sammy} from 'scripts/libs/sammy-latest.min.js';

(function () {
	console.log(sammy);
	var sammy = Sammy('#content', function () {
		
		this.get('#/', function () {
			console.log('here');
		});
	})
	
	sammy.run('#/');
	
})();