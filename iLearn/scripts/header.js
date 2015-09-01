import {jquery} from 'jquery'

(function () {
    $('head').append('<link rel="stylesheet" href="css/header.css"/>');

    var $wrapper = $("#wrapper");
    if ($wrapper.length === 0) {
        $wrapper = $('<div/>').attr('id', 'wrapper');
        $('body').prepend($wrapper);
    }

    $.ajax("content/header.html", {
        type: 'GET',
        contentType: 'text/html',
        success: function (data) {
            $wrapper.prepend(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
} ());


