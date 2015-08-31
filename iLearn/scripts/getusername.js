// use Parse Application ID Key to get info: /Parse/key/currentUser
import {jquery} from 'jquery'

(function(){
    var currentUser = JSON.parse(localStorage.getItem('Parse/OxNzrzXTEVzRxH9qHpel84j4dD8QJs4aFUbmrWYc/currentUser'));

    var name = currentUser.username;

    $('<h3 />').text('Hi, ' + name).prependTo('#main');
}());

