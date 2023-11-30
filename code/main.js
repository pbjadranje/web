
const forecastSelector = document.getElementById('forecastSelector');

function updateForecasts() {
    const selectedForecast = forecastSelector.value;
    const allForecasts = document.querySelectorAll('.forecast');

    allForecasts.forEach(fc => {
        const images = fc.querySelectorAll('img');

        images.forEach(img => {
            if (img.alt === selectedForecast) {
                img.removeAttribute('hidden');
            } else {
                img.setAttribute('hidden', 'true');
            }
        });
    });
}

forecastSelector.addEventListener('change', updateForecasts);

document.addEventListener('DOMContentLoaded', () => {
    updateForecasts();
});
