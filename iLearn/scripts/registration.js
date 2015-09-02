import {jquery} from 'jquery'
import {Parse} from 'parse'
import {parseInitialization} from 'scripts/engine.js'
import {bootflat} from 'bootflat'
import {validator} from 'scripts/validator.js'
import {handleError} from 'scripts/error-handler.js'

function clearNotNeededElements() {
    $("*[id*='alert']").each(function() {
        $(this).hide();
    });
}

function registration() {
    parseInitialization();
    const TIMEOUT_CHANGING_PAGE = 1600;
    $('[data-toggle="tooltip"]').tooltip({ 'placement': 'top' });

    $('#sign-up-button').on('click', function () {
        let $usernameValue = $('#username-register-value').val();
        let $emailValue = $('#email-register-value').val();
        let $userAge = ($('#age-register-value').val()) | 0;
        let $passwordValue = $('#password-register-value').val();
        let $isATeacher = $('#flat-radio-1').is(':checked');

        try {
            validator.validateUserName($usernameValue);
            validator.validateUserNameLength($usernameValue);
            validator.validateUserMail($emailValue);
            validator.validateUserAge($userAge);
            validator.validateUserPasswordLength($passwordValue);
        } catch (err) {
            if (err.name === 'InputNameError') {
                handleError('#username-register-value', err.message, $usernameValue);

            }
            if (err.name === 'InputNameLengthError') {
                handleError('#username-register-value', err.message, $usernameValue);

            }
            if (err.name === 'InputMailError') {
                handleError('#email-register-value', err.message, $emailValue);
            }
            if (err.name === 'InputAgeError') {
                handleError('#age-register-value', err.message, $userAge);
            }
            if (err.name === 'InputPasswordLengthError') {
                handleError('#password-register-value', err.message, $passwordValue);
            }
            return
        }

        clearNotNeededElements();

        let UserObject = Parse.Object.extend('User');
        let currentUser = new UserObject();

        currentUser.save({
            username: $usernameValue,
            email: $emailValue,
            password: $passwordValue,
            isTeacher: $isATeacher,
            age: $userAge
        }, {
                success: function (result) {
                    Parse.User.logIn($usernameValue, $passwordValue, {
                        success: function (user) {
                             let $element = $('<div/ >').text('Successful registration. Redirecting to your profile...').addClass('label label-success').show();
                            $('#result').html(element);
                            $('#username-register-value').remove();
                            $('#email-register-value').remove();
                            $('#age-register-value').remove();
                            $('#password-register-value').remove();
                            let $elementRegister = $('<div class="form-group has-success has-feedback"><input placeholder="Enter username" type="text" class="form-control" id="username-register-value"><span class="glyphicon glyphicon-ok form-control-feedback"></span></div>');
                            let $elementEmail = $('<div class="form-group has-success has-feedback"><input placeholder="Enter email address" type="text" class="form-control" id="email-register-value"><span class="glyphicon glyphicon-ok form-control-feedback"></span></div>');
                            let $elementAge = $('<div class="form-group has-success has-feedback"><input placeholder="Enter your age" type="text" class="form-control" id="age-register-value"><span class="glyphicon glyphicon-ok form-control-feedback"></span></div>');
                            let $elementPassword = $('<div class="form-group has-success has-feedback"><input placeholder="Enter password" type="password" class="form-control" id="password-register-value"><span class="glyphicon glyphicon-ok form-control-feedback"></span></div>');
                            $('.panel-body').prepend($elementRegister);
                            $($elementRegister).append($elementEmail);
                            $elementEmail.append($elementAge);
                            $elementAge.append($elementPassword);
                            $('#username-register-value').val($usernameValue);
                            $('#email-register-value').val($emailValue);
                            $('#age-register-value').val($userAge);
                            $('#password-register-value').val($passwordValue);
                            setTimeout(function () {
                                document.location.href = 'profile.html';
                            }, TIMEOUT_CHANGING_PAGE);
                        },
                        error: function (user, error) {
                            let $element = $('<div/ >').text('Something happened').addClass('label label-danger').show();
                            $('#result').html($element);
                        }
                    });
                },
                error: function (err) {
                    let $element = $('<div/ >').text('Invalid data').addClass('label label-danger').show();
                    $('#result').html($element);
                }
            })
    });
}

export {
    registration
}

/*
 function throwError() {
 $('#username-register-value').remove();
 $('#email-register-value').remove();
 $('#age-register-value').remove();
 $('#password-register-value').remove();
 let $elementRegister = $('<div class="form-group has-error has-feedback"><input placeholder="Enter username" type="text" class="form-control" id="username-register-value"><span class="glyphicon glyphicon-ok form-control-feedback"></span></div>');
 let $elementEmail = $('<div class="form-group has-error has-feedback"><input placeholder="Enter email address" type="text" class="form-control" id="email-register-value"><span class="glyphicon glyphicon-ok form-control-feedback"></span></div>');
 let $elementAge = $('<div class="form-group has-error has-feedback"><input placeholder="Enter your age" type="text" class="form-control" id="age-register-value"><span class="glyphicon glyphicon-ok form-control-feedback"></span></div>');
 let $elementPassword = $('<div class="form-group has-error has-feedback"><input placeholder="Enter password" type="password" class="form-control" id="password-register-value"><span class="glyphicon glyphicon-ok form-control-feedback"></span></div>');
 $('.panel-body').prepend($elementRegister);
 $($elementRegister).append($elementEmail);
 $elementEmail.append($elementAge);
 $elementAge.append($elementPassword);
 $('#username-register-value').val($usernameValue);
 $('#email-register-value').val($emailValue);
 $('#age-register-value').val($userAge);
 $('#password-register-value').val($passwordValue);
 }
 */