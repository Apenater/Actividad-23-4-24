async function fetchDogImages() {
    try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=5');
        const data = await response.json();
        displayDogs(data);
    } catch (error) {
        console.error('Error fetching dog images:', error);
    }
}

function displayDogs(images) {
    const container = document.getElementById('dog-container');
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.classList.add('img-fluid', 'mb-3', 'rounded');
        container.appendChild(imgElement);
    });
}

window.onload = fetchDogImages;
