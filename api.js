// Using function expression
const fetchArtworks = async function () {
  const api_url = "https://api.artic.edu/api/v1/artworks?page=1&limit=10";
  const response = await fetch(api_url);
  const data = await response.json();
  return data.data;
};

// Using nested functions
const createAndAppendImage = function (artwork, container) {
  const img = document.createElement("img");
  img.src = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,1000/0/default.jpg`;
  // img.alt = artwork.title;
  img.style.height = "400px";
  container.append(img);
};

// Using IIFE and arrow syntax

window.onload = (async () => {
  const artworks = await fetchArtworks();
  const artworkContainer = document.querySelector("#artwork-container");

  let count = 0;
  for (const artwork of artworks) {
    if (artwork.image_id) {
      createAndAppendImage(artwork, artworkContainer);
      count++;
      if (count >= 10) {
        break;
      }
    } else {
      console.log(`Artwork with ID ${artwork.id} has no image.`);
    }
  }
})();
