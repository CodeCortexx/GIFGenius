// Beispiel-GIFs für das Grid
const gifs = [
    "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
    "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
    "https://media.giphy.com/media/xUPGcm7GvmQzVyHq9a/giphy.gif",
    "https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif"
];

// Lade die GIFs in das Grid
const gifGrid = document.getElementById("gifGrid");

function loadGifs() {
    gifs.forEach((gif) => {
        const gifItem = document.createElement("div");
        gifItem.classList.add("grid-item");
        gifItem.innerHTML = `<img src="${gif}" alt="GIF">`;
        gifGrid.appendChild(gifItem);
    });
}

// Füge GIFs bei Seitenaufruf hinzu
loadGifs();

// Suchfunktion für GIFs
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredGifs = gifs.filter((gif) => gif.includes(searchValue));
    gifGrid.innerHTML = "";
    filteredGifs.forEach((gif) => {
        const gifItem = document.createElement("div");
        gifItem.classList.add("grid-item");
        gifItem.innerHTML = `<img src="${gif}" alt="GIF">`;
        gifGrid.appendChild(gifItem);
    });
});

// Button zur GIF-Erstellung
document.getElementById("createGif").addEventListener("click", () => {
    alert("GIF-Erstellung ist noch nicht implementiert.");
});
