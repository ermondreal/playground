var scrollLoad = function () {
    var animateElements = document.querySelectorAll('.ug-animate');
    if (animateElements.length > 0) {
        animateElements.forEach(function (element) {
            var wH = window.innerHeight;
            var sT = window.scrollY;
            var oT = element.offsetTop;
            var s = wH + sT - 10;
            var fadeInUpAnim = element.getAttribute('data-animation') === 'fadeInUp';
            var fadeInDownAnim = element.getAttribute('data-animation') === 'fadeInDown';
            var fadeInLeftAnim = element.getAttribute('data-animation') === 'fadeInLeft';
            var fadeInRightAnim = element.getAttribute('data-animation') === 'fadeInRight';

            if (s > oT && fadeInUpAnim) {
                element.classList.add('fadeInUp');
            } else if (s > oT && fadeInDownAnim) {
                element.classList.add('fadeInDown');
            } else if (s > oT && fadeInLeftAnim) {
                element.classList.add('fadeInLeft');
            } else if (s > oT && fadeInRightAnim) {
                element.classList.add('fadeInRight');
            }
        });
    }
};
scrollLoad();
window.addEventListener('scroll', scrollLoad);
