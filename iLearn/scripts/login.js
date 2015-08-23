(function () {
        $('#sign-in-button').on('click', function () {
                var $usernameValue = $('#username-login-value').val();
                var $passwordValue = $('#password-login-value').val();

                Parse.User.logIn($usernameValue, $passwordValue, {
                        success: function (user) {
                                $('#main').html('');
                                $('#main').load('content/success-user-login-message.html');
                                setTimeout(function () {
                                        document.location.href = 'profile.html';
                                }, 1200);
                        },
                        error: function (user, error) {

                        }
                });
        });
})();