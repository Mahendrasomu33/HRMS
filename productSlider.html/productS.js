document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const indicators = document.getElementById('indicators');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function updateIndicators() {
        indicators.innerHTML = '';
        slides.forEach((_, index) => {
            const indicator = document.createElement('span');
            if (index === currentIndex) {
                indicator.classList.add('active');
            }
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateSliderPosition();
                updateIndicators();
            });
            indicators.appendChild(indicator);
        });
    }

    function updateSliderPosition() {
        slider.scrollLeft = slides[currentIndex].offsetLeft;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
            updateIndicators();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSliderPosition();
            updateIndicators();
        }
    });
    function updateProgress() {
    const progressWidth = ((currentIndex + 1) / slides.length) * 100;
    progress.style.width = `${progressWidth}%`;
}

    updateIndicators();
    updateSliderPosition();
});