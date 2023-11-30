
const forecastSelector = document.getElementById('forecastSelector');

function updateForecasts() {
    const selectedForecast = forecastSelector.value;
    const allForecasts = document.querySelectorAll('.forecast');

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

forecastSelector.addEventListener('change', updateForecasts);

document.addEventListener('DOMContentLoaded', () => {
    var startX, endX;

    const allForecasts = document.querySelectorAll('.forecast');

    allForecasts.forEach(fc => {
        fc.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        });

        fc.addEventListener('touchend', function(e) {
            endX = e.changedTouches[0].screenX;

            if (startX > endX + 50) {       // Swipe left (next image)
                changeImage(1);
            }
            else if (startX < endX - 50) {  // Swipe right (previous image)
                changeImage(-1);
            }
        });
    });

    function changeImage(direction) {
        var currentSelectedDate = forecastSelector.value;
        var dates = Array.from(forecastSelector.options).map(option => option.value);
        var currentIndex = dates.indexOf(currentSelectedDate);
        var nextIndex;

        if (direction === 1) { // Swipe left (next image)
            nextIndex = currentIndex + 1 < dates.length ? currentIndex + 1 : 0;
        } else { // Swipe right (previous image)
            nextIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : dates.length - 1;
        }

        forecastSelector.value = dates[nextIndex];
        updateForecasts();
    }

    updateForecasts();
});
