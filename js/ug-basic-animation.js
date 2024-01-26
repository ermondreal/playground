var scrollLoad = function () {
    var animateElements = document.querySelectorAll('.ug-animate');

    if (animateElements.length > 0) {
        animateElements.forEach(function (element) {
            var wH = window.innerHeight;
            var sT = window.scrollY;
            var oT = element.offsetTop;
            var tH = element.clientHeight;
            var animationType = element.getAttribute('data-animation');
            // Adjust condition to check if at least half of the element is visible in the window
            if (sT + wH > oT + tH * 0.5) {
                switch (animationType) {
                    case 'fadeInUp':
                        element.classList.add('fadeInUp');
                        break;
                    case 'fadeInDown':
                        element.classList.add('fadeInDown');
                        break;
                    case 'fadeInLeft':
                        element.classList.add('fadeInLeft');
                        break;
                    case 'fadeInRight':
                        element.classList.add('fadeInRight');
                        break;
                }
            }

            console.log(`height: ${wH}\nscroll: ${sT}\nscroll: ${oT}`);
        });
    }
};
scrollLoad();
window.addEventListener('scroll', scrollLoad);