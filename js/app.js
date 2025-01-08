const apiKey = "CS1vvM7s0q1jXLvxUKXN0lFA7aoLQU38"; // Ersetze mit deinem Giphy API-Schlüssel
const gifGrid = document.getElementById("gifGrid");
const searchBar = document.getElementById("searchBar");

// Funktion: Trend-GIFs laden
async function fetchTrendingGIFs() {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayGIFs(data.data);
    } catch (error) {
        console.error("Fehler beim Abrufen von Trending-GIFs:", error);
    }
}

// Funktion: GIFs suchen
async function searchGIFs(query) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=20`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayGIFs(data.data);
    } catch (error) {
        console.error("Fehler beim Suchen von GIFs:", error);
    }
}

// Funktion: GIFs anzeigen
function displayGIFs(gifs) {
    gifGrid.innerHTML = ""; // Aktuelles Grid leeren
    gifs.forEach((gif) => {
        const gifItem = document.createElement("div");
        gifItem.classList.add("grid-item");
        gifItem.innerHTML = `<img src="${gif.images.fixed_height.url}" alt="GIF">`;
        gifGrid.appendChild(gifItem);
    });
}

// Event Listener für die Suchleiste
searchBar.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (query.length > 0) {
        searchGIFs(query);
    } else {
        fetchTrendingGIFs();
    }
});

// App starten
fetchTrendingGIFs();
