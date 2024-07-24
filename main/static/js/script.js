document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Initialize Masonry
    const elem = document.querySelector('.gallery-container');
    const msnry = new Masonry(elem, {
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-item',
        percentPosition: true,
        gutter: 20 // Ensure there is a consistent gap between items
    });

    // Images loaded event to re-layout Masonry
    imagesLoaded(elem, function() {
        msnry.layout();
    });
});