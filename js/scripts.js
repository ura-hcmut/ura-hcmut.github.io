/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        // Xóa class 'scrolled' nếu ở đầu trang
        navbar.classList.remove('scrolled');
    }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };
    
    document.querySelectorAll('.speaker-toggle').forEach(el => {
        el.addEventListener('click', () => {
            const target = document.querySelector(el.dataset.target);
            if (target.style.display === 'block') {
                target.style.display = 'none';
            } else {
                // Hide all others
                document.querySelectorAll('.speaker-details').forEach(d => d.style.display = 'none');
                target.style.display = 'block';
            }
        });
        
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (
        window.getComputedStyle(navbarToggler).display !== 'none' &&
        !item.classList.contains('dropdown-toggle') // prevent dropdown toggle from closing menu
        ) {
        navbarToggler.click();
        }
            });
        });

    });


});
