import {jquery} from 'jquery'
import {Parse} from 'parse'
import {parseInitialization} from 'scripts/engine.js'
import {bootflat} from 'bootflat'
import {getCookie} from 'cookie'
import {setCookie} from 'cookie'
 
function checkIfLogged() {
    parseInitialization();
    var currentCookie = getCookie('token');
    var userId = getCookie('userID');
 
    Parse.User._currentUser = new Parse.User();
    Parse.User._currentUser.if = userId; // prob not needed...
    Parse.User._currentUser._sessionToken = currentCookie;
 
    var query = new Parse.Query(Parse.User);
    query.get(userId)
        .then(
            function (user) {
                // document.localName.href = './profile.html';
            },
            function (err) {
                document.location.href = './login.html';
            });
}
 
export {
    checkIfLogged
}