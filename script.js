function showSurprise() {
    var surprise = document.getElementById('surprise');
    surprise.classList.toggle('hidden');

    var audio = document.getElementById('bg-music');
    audio.play();

    if (!surprise.classList.contains('hidden')) {
        var images = surprise.querySelectorAll('img');
        images.forEach(function(img, index) {
            setTimeout(function() {
                img.classList.add('animated');
            }, index * 200); // Retrasa la animación de cada imagen
        });
    }
}

function showMessageModal(message) {
    document.getElementById('modalMessage').innerText = message;
    $('#messageModal').modal('show');
}
