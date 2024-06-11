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
});
    