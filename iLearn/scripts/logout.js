import {jquery} from 'jquery'
import {Parse} from 'parse'
import {parseInitialization} from 'scripts/engine.js'


var logout = new Promise(
	function (element){
		parseInitialization();

		$('#logout').on('click', function(){
			Parse.User.logOut();
		});
	})
	.then(function() {
		window.location.href = "index.html"
	});

export {
	logout
}