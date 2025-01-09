const API_KEY = 'CS1vvM7s0q1jXLvxUKXN0lFA7aoLQU38';
const gifContainer = document.getElementById('gifContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const tabs = document.querySelectorAll('.tabs button');

// Funktion: GIFs laden
async function fetchGIFs(category = 'trending', query = '') {
    gifContainer.innerHTML = 'Loading...';
    const url = query
        ? `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=20`
        : `https://api.giphy.com/v1/gifs/${category}?api_key=${API_KEY}&limit=20`;

    try {
        const response = await fetch(url);
        const { data } = await response.json();
        gifContainer.innerHTML = data
            .map(gif => `<img src="${gif.images.fixed_height.url}" alt="${gif.title}">`)
            .join('');
    } catch (error) {
        gifContainer.innerHTML = 'Failed to load GIFs.';
        console.error(error);
    }
}

// Event Listener: Suche
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) fetchGIFs('search', query);
});

// Event Listener: Tabs
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-category');
        fetchGIFs(category);
    });
});

// Initial: Trending GIFs laden
fetchGIFs();
