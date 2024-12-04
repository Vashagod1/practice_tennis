// script_p.js

// Массив с данными игроков
const players = [
    { id: 1, name: "Ван Чуцин", country: "Китай", points: 8020 },
    { id: 2, name: "Фан Чжэндон", country: "Китай", points: 5788 },
    { id: 3, name: "Лян Цзинкунь", country: "Китай", points: 3955 }
];

// Получаем элемент для отображения информации о игроке
const playerInfoDiv = document.getElementById('playerInfo');

// Функция для отображения информации о выбранном игроке
function displayPlayerInfo(player) {
    playerInfoDiv.innerHTML = `
        <h2>${player.name}</h2>
        <p>Страна: ${player.country}</p>
        <p>Очки: ${player.points}</p>
    `;
}

// Добавляем обработчики событий для каждого игрока
document.querySelectorAll('.player').forEach(playerDiv => {
    playerDiv.addEventListener('click', () => {
        const playerId = playerDiv.getAttribute('data-id');
        const player = players.find(p => p.id == playerId);
        displayPlayerInfo(player);
    });
});