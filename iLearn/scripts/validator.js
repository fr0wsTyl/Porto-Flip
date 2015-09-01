var validator = (function () {

    var validator = {};

    Object.defineProperties(validator, {
        'validateUserName': {
            value: function (input) {
                var pattern = /[^A-Za-z ]/g;
                if (pattern.test(input)) {
                    throw {
                        name: 'InputNameError',
                        message: 'Name must contain only Latin letters and space'
                    };
                }
            }
        },
        'validateUserNameLength': {
            value: function (input) {
                if (input.length < 5 || input.length > 20) {
                    throw {
                        name: 'InputNameLengthError',
                        message: 'Name must be between 5 and 20 characters'
                    };
                }
            }
        },
        'validateUserMail': {
            value: function (input) {
                var pattern = /[A-Za-z0-9_\-\+]+@[A-Za-z0-9\-]+\.([A-Za-z]{2,3})(?:\.[a-z]{2})?/;
                if (!pattern.test(input)) {
                    throw {
                        name: 'InputMailError',
                        message: 'Ypu must provide a valid e-mail adress'
                    };
                }
            }
        },
        'validateUserAge': {
            value: function (input) {
                if (input < 12 || input > 100) {
                    throw {
                        name: 'InputAgeError',
                        message: 'Age must be between 12 and 100 years'
                    };
                }
            }
        },
        'validateUserPasswordLength': {
            value: function (input) {
                if (input.length < 3 || input.length > 10) {
                    throw {
                        name: 'InputPasswordLengthError',
                        message: 'Password must be between 3 and 10 characters'
                    };
                }
            }
        }
    });

    return validator;
}());

export {
    validator
}
