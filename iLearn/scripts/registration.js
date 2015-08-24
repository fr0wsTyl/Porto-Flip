import {jquery} from 'jquery'
import {Parse} from 'parse'
import {parseInitialization} from 'scripts/engine.js'
import {bootflat} from 'bootflat'

function registration() {
    parseInitialization();
    const TIMEOUT_CHANGING_PAGE = 1500;
    $('[data-toggle="tooltip"]').tooltip({'placement': 'top'});
    $('#sign-up-button').on('click', function() {
        let $usernameValue = $('#username-register-value').val();
        let $emailValue = $('#email-register-value').val();
        let $passwordValue = $('#password-register-value').val();

        let UserObject = Parse.Object.extend('User');
        let currentUser = new UserObject();
        
        currentUser.save({
            username: $usernameValue,
            email: $emailValue,
            password: $passwordValue
        }, {
            success: function(result) {
               let $element = $('<div/ >').text('Successful registration. Redirecting to your profile...').addClass('label label-success').show();
                $('#sign-up-button').after($element);
                setTimeout(function() {
                    document.location.href = 'profile.html';
                }, TIMEOUT_CHANGING_PAGE);
            },
            error: function(err) {
                let $element = $('<div/ >').text('Invalid data').addClass('label label-danger').show();
                $('#sign-up-button').after($element);
            }
        })
    });
}

export {
    registration
}