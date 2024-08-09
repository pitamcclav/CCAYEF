// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

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

});
    