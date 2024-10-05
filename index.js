document.addEventListener('DOMContentLoaded', (event) => {
    const headerTitle = document.querySelector('header h1');

    headerTitle.addEventListener('click', () => {
        headerTitle.style.animation = 'moveAndChangeColor 10s';
        
        headerTitle.addEventListener('animationend', () => {
            headerTitle.style.animation = '';
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Regisztráció sikeres!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Bejelentkezés sikeres!');
});
