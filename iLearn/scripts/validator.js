var validator = (function () {

    var validator = {};

    Object.defineProperties(validator, {
        'validateUserName': {
            value: function (input) {
                var pattern = /[^A-Za-z ]/g;
                if (pattern.test(input)) {
                    throw {
                        name: 'InputNameError',
                        message: 'Name must contain only Latin letters'
                    };
                }
            }
        },
        'validateUserNameLength': {
            value: function (input) {
                if (input.length < 3 || input.length > 20) {
                    throw {
                        name: 'InputNameLengthError',
                        message: 'Name must be between 3 and 20 characters'
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
