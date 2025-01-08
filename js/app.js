// Funktionsweise des Image Uploads und der Canvas-Darstellung
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let uploadedImage = null;

// Bild laden und auf Canvas darstellen
function loadImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const img = new Image();
        img.onload = function() {
            uploadedImage = img;
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Leert die Canvas
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Zeichnet das Bild
        };
        img.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

// Text hinzufügen
function addText() {
    const text = prompt("Enter the text you want to add to the image:");

    if (text) {
        ctx.font = '40px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, canvas.width / 2, canvas.height - 50); // Text an der unteren Mitte platzieren
    }
}

// Meme/GIF herunterladen
function download() {
    const dataURL = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'meme_or_gif.png'; // Beispiel für ein Meme-Bild
    link.click();
}
