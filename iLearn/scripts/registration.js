(function () {
        $('#sign-up-button').on('click', function () {
                var $usernameValue = $('#username-register-value').val();
                var $emailValue = $('#email-register-value').val();
                var $passwordValue = $('#password-register-value').val();

                var UserObject = Parse.Object.extend('User');
                var currentUser = new UserObject();
                currentUser.save({
                        username: $usernameValue,
                        email: $emailValue,
                        password: $passwordValue
                }, {
                                success: function (result) {
                                        $('#main').html('');
                                        $('#main').load('content/success-user-register-message.html');
                                        setTimeout(function () {
                                                document.location.href = 'profile.html';
                                        }, 1200);
                                },
                                error: function (err) {

                                }
                        })
        });
})();