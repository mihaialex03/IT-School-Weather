const returnToTopButton = document.getElementById('return-to-top');

document.addEventListener('scroll', function() {
    if (window.scrollY > 200) { 
        returnToTopButton.classList.add('slide-in-bottom');
        returnToTopButton.classList.remove('slide-out-top');
        returnToTopButton.classList.add('visible');
    } else {
        returnToTopButton.classList.remove('slide-in-bottom');
        returnToTopButton.classList.add('slide-out-top');
        returnToTopButton.classList.remove('visible');
    }
});

returnToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
