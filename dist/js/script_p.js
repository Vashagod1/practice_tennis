document.querySelectorAll('.player').forEach(player => {
    player.addEventListener('click', function() {
        const playerId = this.getAttribute('data-id');
        
        // AJAX-запрос для получения информации об игроке
        fetch(player$, {playerId}.html)
            .then(response => response.text())
            .then(data => {
                document.getElementById('playerInfo').innerHTML = data;
            })
            .catch(error => console.error('Ошибка:', error));
    });
});