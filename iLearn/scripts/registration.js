import {jquery} from 'jquery'
import {Parse} from 'parse'
import {parseInitialization} from 'scripts/engine.js'
import {bootflat} from 'bootflat'
import {validator} from 'scripts/validator.js'

function registration() {
    parseInitialization();
    const TIMEOUT_CHANGING_PAGE = 1500;
    $('[data-toggle="tooltip"]').tooltip({ 'placement': 'top' });

    // TODO Make Valdiation with message in div

    $('#sign-up-button').on('click', function () {
        let $usernameValue = $('#username-register-value').val();
        let $emailValue = $('#email-register-value').val();
        let $userAge = ($('#age-register-value').val()) | 0;
        let $passwordValue = $('#password-register-value').val();
        let $isATeacher = $('#flat-radio-1').is(':checked');

        // Created only for demo purpose
        // Use more extensively only if necessary
        try {
            validator.validateUserName($usernameValue);
            validator.validateUserNameLength($usernameValue);
        } catch (err) {
            if (err.name === 'InputNameError') {
                console.log(err.message);
            }
            if (err.name === 'InputNameLengthError') {
                console.log(err.message);
            }
        }

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
                            $('#result').html($element);
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