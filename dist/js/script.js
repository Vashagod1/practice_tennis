// script.js
document.getElementById('showImageBtn').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    
    // Убираем класс hidden
    imageContainer.classList.remove('hidden');

    // Ждем, пока контейнер станет видимым, затем запускаем анимацию
    setTimeout(() => {
        const image = document.getElementById('image');
        image.style.opacity = '1'; // Увеличиваем непрозрачность
        image.style.transform = 'translateY(0)'; // Перемещаем в исходное положение
    }, 10); // Небольшая задержка для активации анимации
});