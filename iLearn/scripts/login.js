import {jquery} from 'jquery'
import {Parse} from 'parse'
import {parseInitialization} from 'scripts/engine.js'
import {bootflat} from 'bootflat'
import {getCookie} from 'cookie'
import {setCookie} from 'cookie'

function login(element) {
    parseInitialization();
    const TIMEOUT_CHANING_PAGE = 1200;
    //$('#login-panel').load('./content/login-content.html');
    $('[data-toggle="tooltip"]').tooltip({'placement': 'top'});
    $('#sign-in-button').on('click', function() {
        let $usernameValue = $('#username-login-value').val();
        let $passwordValue = $('#password-login-value').val();
        
        Parse.User.logIn($usernameValue, $passwordValue, {
            success: function(user) {
                let $element = $('<div/ >').text('Successful login. Redirecting to your profile...').addClass('label label-success').show();
                $('#sign-in-button').after($element);
                setTimeout(function() {
                    document.location.href = 'profile.html';
                }, TIMEOUT_CHANING_PAGE);
                setCookie('token', user._sessionToken, 1000000);
                setCookie('userID', user.id, 1000000);
            },
            error: function(user, error) {
                let $element = $('<div/ >').text('Invalid username or password').addClass('label label-danger').show();
                $('#sign-in-button').after($element);
            }
        });
    });
}

export {
    login
}
