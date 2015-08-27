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

$.get("content/header.html", function(data) {

    var $wrapper = $("#wrapper");
    if ($wrapper.length === 0) {
        $wrapper = $('<div/>').attr('id', 'wrapper');
        $('body').prepend($wrapper);
    }
    $wrapper.prepend(data);
});
