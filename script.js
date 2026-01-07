// Массив с URL фоновых изображений
const slides = [
    "https://static.tildacdn.pro/tild6365-3130-4137-a366-386537313731/image.jpg",
    "https://kromvel.kz/assets/images/krom/furniture/sborka-mebeli-3-min.jpg",
    "https://frankfurt.apollo.olxcdn.com/v1/files/tck9ckxs4wgq2-KZ/image%3Bs%3D1920x1280",
    "https://expertremonta.kz/img/blog/ozfAVcU5_90vQodL8SSjrTcgx5LxXCbzaUjRaaOXvDJ9bKaeD.png",
    "https://kromvel.kz/assets/cache_image/krom/furniture/sborka-mebeli-3-min_500x333_913.jpg",
    "https://kromvel.kz/assets/images/krom/furniture/sborka-mebeli-1-min.jpg"
];

// Инициализация переменных
let currentSlide = 0;
const hero = document.querySelector('.hero');

// Функция для анимации при прокрутке
function initScrollAnimation() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('section, .service-card, footer').forEach(el => {
        observer.observe(el);
    });
}

// Функция для слайдшоу в геро-блоке
function initSlideshow() {
    // Устанавливаем первое изображение
    if (hero) {
        hero.style.backgroundImage = `url(${slides[0]})`;
        
        // Меняем изображение каждые 5 секунд
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            hero.style.backgroundImage = `url(${slides[currentSlide]})`;
        }, 5000);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimation();
    initSlideshow();
});