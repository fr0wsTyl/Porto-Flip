import {jquery} from 'jquery'
import {Parse} from 'parse'
import {parseInitialization} from 'scripts/engine.js'

function login() {
    parseInitialization();
    const TIMEOUT_CHANING_PAGE = 1200;
    $('#sign-in-button').on('click', function() {
        let $usernameValue = $('#username-login-value').val();
        let $passwordValue = $('#password-login-value').val();
        
        Parse.User.logIn($usernameValue, $passwordValue, {
            success: function(user) {
                let $element = $('<div/ >').text('Successful login').addClass('label label-success').show();
                $('#sign-in-button').after($element);
                setTimeout(function() {
                    document.location.href = 'profile.html';
                }, TIMEOUT_CHANING_PAGE);
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
