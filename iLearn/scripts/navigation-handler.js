(function () {
    var isLogged = (localStorage.getItem('Parse/OxNzrzXTEVzRxH9qHpel84j4dD8QJs4aFUbmrWYc/currentUser') !== null);

    if (isLogged) {
        var currentUser = JSON.parse(localStorage.getItem('Parse/OxNzrzXTEVzRxH9qHpel84j4dD8QJs4aFUbmrWYc/currentUser'));
        var isTeacher = currentUser.isTeacher;
    }

    if (!isLogged) {
        makeAjaxRequest("content/nav-home.html");
    } else if (isTeacher) {
        makeAjaxRequest("content/nav-teacher.html");
    } else {
        makeAjaxRequest("content/nav-student.html");
    }

    function makeAjaxRequest (url) {
        $.ajax(url, {
            type: 'GET',
            contentType: 'text/html',
            success: function (data) {
                $('#nav').html('').append(data)
            }});
    }
} ());


