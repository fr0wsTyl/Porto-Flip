import {jquery} from 'jquery'
import {Parse} from 'parse'
import {parseInitialization} from 'scripts/engine.js'

function logout(element){
parseInitialization();

$('#logout').on('click', function(){
	Parse.User.logOut();
});

export {
	logout
}