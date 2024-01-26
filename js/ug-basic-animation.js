var scrollLoad = function () {
    if ($('.ug-animated')[0]) {
        $('.ug-animated').each(function () {
            var wH = $(window).height();
            var sT = $(window).scrollTop();
            var oT = $(this).offset().top;
            var s = wH + sT - 10;
            var fadeInUpAnim = $(this).attr('data-animation') == 'fadeInUp';
            var fadeInDownAnim = $(this).attr('data-animation') == 'fadeInDown';
            var fadeInLeftAnim = $(this).attr('data-animation') == 'fadeInLeft';
            var fadeInRightAnim = $(this).attr('data-animation') == 'fadeInRight';
            if (s > oT && fadeInUpAnim) {
                $(this).addClass('fadeInUp');
            } else if (s > oT && fadeInDownAnim) {
                $(this).addClass('fadeInDown');
            } else if (s > oT && fadeInLeftAnim) {
                $(this).addClass('fadeInLeft');
            } else if (s > oT && fadeInRightAnim) {
                $(this).addClass('fadeInRight');
            } else {
            }
        });
    }
};
scrollLoad();
$(window).scroll(scrollLoad);