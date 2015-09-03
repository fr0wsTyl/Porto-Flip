// use Parse Application ID Key to get info: /Parse/key/currentUser


function isTeacher() {
    var currentUser = JSON.parse(localStorage.getItem('Parse/OxNzrzXTEVzRxH9qHpel84j4dD8QJs4aFUbmrWYc/currentUser'));

    //var name = currentUser.username;
    var isTeacher = currentUser.isTeacher;
            
    return isTeacher;
}

// function sayHello() {
//     if (isTeacher()) {
//         $('<h3 />').text('Hello! -@YOU ARE A TEACHER').prependTo('#main');
//     } else {
//         $('<h3 />').text('Hello! -@YOU ARE A STUDENT').prependTo('#main');
//     }
// }

export {
    isTeacher,
    // sayHello
}

