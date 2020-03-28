const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navig');
    const navig = document.querySelectorAll('.navig li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


        navig.forEach((links, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navigFade 0.5 ease forwards ${index / 7 + 1.5}s'
            }
        });

        burger.classList.toggle('toggle');
    });


}


navSlide();