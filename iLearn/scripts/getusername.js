// use Parse Application ID Key to get info: /Parse/key/currentUser
(function(){
    var currentUser = JSON.parse(localStorage.getItem('Parse/OxNzrzXTEVzRxH9qHpel84j4dD8QJs4aFUbmrWYc/currentUser'));

    var name = currentUser.username;
    var isTeacher = currentUser.isTeacher;

    if (isTeacher) {
        $('<h3 />').text('Dear, ' + name).prependTo('#main');
    } else {
        $('<h3 />').text('Hi, ' + name).prependTo('#main');
    }
}());


