(function (){
    $(document).ready(function(ev) {
        var toggle = $('#ss_toggle');
        var menu = $('#ss_menu');
        var rot;

        $('#ss_toggle').on('click', function(ev) {
            rot = parseInt($(this).data('rot')) - 180;
            menu.css('transform', 'rotate(' + rot + 'deg)');
            menu.css('webkitTransform', 'rotate(' + rot + 'deg)');
            if ((rot / 180) % 2 == 0) {
                //Moving in
                toggle.parent().addClass('ss_active');
                toggle.addClass('close');
            } else {
                //Moving Out
                toggle.parent().removeClass('ss_active');
                toggle.removeClass('close');
            }
            $(this).data('rot', rot);
        });

        menu.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
            if ((rot / 180) % 2 == 0) {
                $('#ss_menu div i').addClass('ss_animate');
            } else {
                $('#ss_menu div i').removeClass('ss_animate');
            }
        });

        $('#facebook').on('click', function() {
            window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com',
                'facebook-share-dialog',
                'width=626,height=436');
        });
        $('#twitter').on('click', function() {
            window.open('http://www.twitter.com/share?url=https%3A%2F%2Fparse.com',
                'twitter-share-dialog',
                'width=626,height=436'
            );
        });
        $('#linkedin').on('click', function() {
            window.open('https://www.linkedin.com/cws/share?url=https%3A%2F%2Fparse.com',
                'twitter-share-dialog',
                'width=626,height=436'
            );
        });
        $('#googleplus').on('click', function() {
            window.open('https://plus.google.com/share?url=https%3A%2F%2Fparse.com',
                'googleplus-share-dialog',
                'width=626,height=436'
            );
        });

    });
}());

