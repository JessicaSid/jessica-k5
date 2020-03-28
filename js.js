const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navig');
    const navLinks = document.querySelectorAll('.navig li');

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');


        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navigfade 0.5s ease forwards ${index / 7 + 0}'
            }
        });

        burger.classList.toggle('toggle');
    });


}


navSlide();