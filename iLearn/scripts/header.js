/*
import {jquery} from 'jquery';

function addHeader (){
    $('head').append('<link rel="stylesheet" href="css/header.css"/>');

    $.get( "content/header.html", function(data) {
        $( "#wrapper" ).prepend(data);
    });
}

export {
    addHeader
}
*/

$('head').append('<link rel="stylesheet" href="css/header.css"/>');

$.get( "content/header.html", function(data) {
    $( "#wrapper" ).prepend(data);
});
