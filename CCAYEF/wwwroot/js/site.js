// Write your JavaScript code.

document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    function updateNavLink() {
        var navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        }
        )
    }
    $('.carousel').carousel({
        pause: false
    });

    updateNavLink();
    function aos_init() {
        AOS.init({
            duration: 800,
            easing: 'slide',
            once: true,
            mirror: false
        });
    }
    window.addEventListener('load', () => {
        aos_init();
    });

    function swipper() {
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 3, // Number of images visible per view
            spaceBetween: 30, // Space between slides
           

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clicable: 'true',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false, // Autoplay continues after user interaction
            },

            breakpoints: {
                1024: { slidesPerView: 3 }, // For large devices
                768: { slidesPerView: 2 },  // For tablets
                576: { slidesPerView: 1 },  // For mobile phones
                344: { slidesPerView: 1 },
            },

            lazy: {
                loadOnTransitionStart: true,
                loadPrevNext: true,
            },


            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    }

    window.addEventListener('load', () => {
        swipper();
    });

    
   




});
    