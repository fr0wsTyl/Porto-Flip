(function () {

    var $wrapper = $("#wrapper");
    if ($wrapper.length === 0) {
        $wrapper = $('<div/>').attr('id', 'wrapper');
        $('body').prepend($wrapper);
    }

    $.ajax("content/footer.html", {
        type: 'GET',
        contentType: 'text/html',
        success: function (data) {
            $wrapper.append(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
} ());