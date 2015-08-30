// use Parse Application ID Key to get info: /Parse/key/currentUser
var currentUser = JSON.parse(localStorage.getItem('Parse/OxNzrzXTEVzRxH9qHpel84j4dD8QJs4aFUbmrWYc/currentUser'));

var name = currentUser.username;

$('<h3 />').text('Hi, ' + name).prependTo('#main');
