var introVideo = document.getElementById('introVideo');
var mainContent = document.getElementById('main');

introVideo.onended = function() {
    introVideo.classList.add('fade-out');
    setTimeout(function() {
        introVideo.style.display = 'none';
        mainContent.style.display = 'block';
    }, 1000); // Match this delay to the duration of the fade-out animation
};