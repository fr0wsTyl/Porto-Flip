import {jquery} from 'jquery'
import {Parse} from 'parse'
import {parseInitialization} from 'scripts/engine.js'
import {bootflat} from 'bootflat'

function login(element) {
    parseInitialization();
    const TIMEOUT_CHANING_PAGE = 1600;
    //$('#login-panel').load('./content/login-content.html');
    $('[data-toggle="tooltip"]').tooltip({'placement': 'top'});
    $('#sign-in-button').on('click', function() {
        let $usernameValue = $('#username-login-value').val();
        let $passwordValue = $('#password-login-value').val();
        
        Parse.User.logIn($usernameValue, $passwordValue, {
            success: function(user) {
                let $element = $('<div/ >').text('Successful login. Redirecting to your profile...').addClass('label label-success').show();
                $('#sign-in-button').after($element);
                $('#username-login-value').remove();
                $('#password-login-value').remove();
                let $elementLogin = $('<div class="form-group has-success has-feedback"><input type="text" class="form-control" id="username-login-value"><span class="glyphicon glyphicon-ok form-control-feedback"></span></div>');
                let $elementPassword = $('<div class="form-group has-success has-feedback"><input type="password" class="form-control" id="password-login-value"><span class="glyphicon glyphicon-ok form-control-feedback"></span></div>');
                $('.panel-body').prepend($elementLogin);
                $($elementLogin).append($elementPassword);
                $('#username-login-value').val($usernameValue);
                $('#password-login-value').val($passwordValue);
                setTimeout(function() {
                    document.location.href = 'profile.html';
                }, TIMEOUT_CHANING_PAGE);
            },
            error: function(user, error) {
                let $element = $('<div/ >').text('Invalid username or password').addClass('label label-danger').show();
                $('#sign-in-button').after($element);
                $('#username-login-value').remove();
                $('#password-login-value').remove();
                let $elementLogin = $('<div class="form-group has-error has-feedback"><input type="text" class="form-control" id="username-login-value"><span class="glyphicon glyphicon-ok form-control-feedback"></span></div>');
                let $elementPassword = $('<div class="form-group has-error has-feedback"><input type="password" class="form-control" id="password-login-value"><span class="glyphicon glyphicon-ok form-control-feedback"></span></div>');
                $('.panel-body').prepend($elementLogin);
                $($elementLogin).append($elementPassword);
                $('#username-login-value').val($usernameValue);
                $('#password-login-value').val($passwordValue);
            }
        });
    });
}

export {
    login
}
