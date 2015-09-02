function handleError(element, message, param) {

    let errorBlockId = (element.substr(1) + '-alert');
    if ($('#'+errorBlockId).length == 0) {
        var wrapper = $('<div/>').addClass('form-group has-error has-feedback');
        $(element).wrap(wrapper);
        $('<div />').attr('id', errorBlockId).addClass('alert alert-danger').html(message).insertAfter($(element));
        $('<span />').addClass('glyphicon glyphicon-warning-sign form-control-feedback').insertBefore($('#'+errorBlockId));
        param = null;
        $(element).val(null);
    } else {
        param = null;
        $(element).val(null);
        $('#'+errorBlockId).html(message)
    }
}

export {
    handleError
}