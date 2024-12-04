// script.js

// Получаем элементы модального окна
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Получаем все изображения галереи
const galleryImages = document.querySelectorAll(".gallery-image");

// Добавляем обработчик событий для каждого изображения
galleryImages.forEach(image => {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImage.src = this.src; // Устанавливаем источник изображения в модальном окне
        captionText.innerHTML = this.alt; // Устанавливаем подпись
    });
});

// Закрытие модального окна при нажатии на кнопку закрытия
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне изображения
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}