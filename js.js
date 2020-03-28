const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    });

    navLinks.forEach((links, index) => {
        links.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s';

    });

}

navSlide();



/*const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');


        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'nav-linksfade 0.5s ease forwards ${index / 7 + 0}'
            }
        });

        burger.classList.toggle('toggle');
    });


}


navSlide();*/