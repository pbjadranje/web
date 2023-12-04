
var startX, endX;
const forecastSelector = document.getElementById('forecastSelector');
const allForecasts = document.querySelectorAll('.forecast');

function updateForecasts() {
    const selectedForecast = forecastSelector.value;

    allForecasts.forEach(fc => {
        const images = fc.querySelectorAll('img');

        images.forEach(img => {
            if (img.alt === selectedForecast) {
                img.parentElement.removeAttribute('hidden');
            } else {
                img.parentElement.setAttribute('hidden', 'true');
            }
        });
    });
}

function changeImage(direction) {
    var currentSelectedDate = forecastSelector.value;
    var dates = Array.from(forecastSelector.options).map(option => option.value);
    var currentIndex = dates.indexOf(currentSelectedDate);
    var nextIndex;

    if (direction === 1) {
        nextIndex = currentIndex + 1 < dates.length ? currentIndex + 1 : 0;
    } else {
        nextIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : dates.length - 1;
    }

    forecastSelector.value = dates[nextIndex];
    updateForecasts();
}

function prevImage() {
    changeImage (-1);
}

function nextImage() {
    changeImage (1);
}

forecastSelector.addEventListener('change', updateForecasts);

const prevButtons = document.querySelectorAll('.forecast-prev');
prevButtons.forEach(btn => btn.addEventListener('click', prevImage));

const nextButtons = document.querySelectorAll('.forecast-next');
nextButtons.forEach(btn => btn.addEventListener('click', nextImage));

allForecasts.forEach(fc => {
    fc.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    fc.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].screenX;
        if (startX > endX + 50) nextImage()
        else if (startX < endX - 50) prevImage();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    updateForecasts();
});
