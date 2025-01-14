const API_KEY = 'CS1vvM7s0q1jXLvxUKXN0lFA7aoLQU38';
const gifContainer = document.getElementById('gifContainer');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.categories button');

// Funktion: GIFs laden
async function fetchGIFs(category = 'trending', query = '') {
    gifContainer.innerHTML = '<p style="color:white;">Loading...</p>';
    let url = '';

    if (query) {
        url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=20`;
    } else {
        url = `https://api.giphy.com/v1/gifs/${category}?api_key=${API_KEY}&limit=20`;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const { data } = await response.json();

        if (data.length === 0) {
            gifContainer.innerHTML = '<p style="color:white;">No GIFs found.</p>';
            return;
        }

        gifContainer.innerHTML = data
            .map(gif => `<img src="${gif.images.fixed_height.url}" alt="${gif.title}">`)
            .join('');
    } catch (error) {
        gifContainer.innerHTML = `<p style="color:white;">Failed to load GIFs: ${error.message}</p>`;
        console.error(error);
    }
}

// Event Listener: Suche
searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchGIFs('search', query);
    } else {
        fetchGIFs(); // Wenn das Suchfeld leer ist, lade Trending GIFs
    }
});

// Event Listener: Kategorien
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Kategorie auswählen
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        fetchGIFs(category);
    });
});

// Initial: Trending GIFs laden
fetchGIFs();
