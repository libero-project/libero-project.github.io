var introVideo = document.getElementById('introVideo');
var mainContent = document.getElementById('main');

if (introVideo) {
    introVideo.onended = function() {
        introVideo.classList.add('fade-out');
        setTimeout(function() {
            introVideo.style.display = 'none';
            mainContent.style.display = 'block';
        }, 1000); // Match this delay to the duration of the fade-out animation
    };
}

document.addEventListener("DOMContentLoaded", function() {
    const svgContainers = document.querySelectorAll('.svg-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.5 // This means the SVG will fade in when 50% of it is visible
    });

    svgContainers.forEach(svg => {
        observer.observe(svg);
    });

    const sections = document.querySelectorAll('.main-page-section');

    const checkScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            if (sectionTop <= window.innerHeight * 0.5 && sectionTop + sectionHeight >= window.innerHeight * 0.5) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});
