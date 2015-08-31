import {jquery} from 'jquery'
import {Parse} from 'parse'
import {parseInitialization} from 'scripts/engine.js'
import {bootflat} from 'bootflat'
import {getCookie} from 'cookie'
import {setCookie} from 'cookie'

function profile() {
    parseInitialization();
    var currentCookie = getCookie('token');
    var signInWithToken = function (userId, parseToken) {
        Parse.User.logOut();
            
        // bootstrap Parse into believing there is a current user so that it will pick up the session Token
        Parse.User._currentUser = new Parse.User();
        Parse.User._currentUser.if = userId; // prob not needed...
        Parse.User._currentUser._sessionToken = parseToken;
            
        // now get the actual user so we have easy access to that user's properties
        var query = new Parse.Query(Parse.User);
        return query.get(userId)
            .then(function (user) {
                // save this as the current user so future calls to Parse.User.current() will work properly.
                Parse.User._saveCurrentUser(user);
                console.log("Session Login Successful for " + user.id);
                return Parse.Promise.as(user);
            },
                function (err) {
                    console.error("Session Login Failure: " + JSON.stringify(err));
                    return Parse.Promise.error(err);
                });
    };
    // if (getCookie('token').length === 27) {
    //     document.location.href = 'profile.html';
    // }

}

export {
    profile
}
