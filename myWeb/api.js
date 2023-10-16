// api.js
async function fetchArtworks() {
  const api_url = "https://api.artic.edu/api/v1/artworks?page=1&limit=10";
  const response = await fetch(api_url);
  const data = await response.json();
  return data.data;
}

window.onload = async function () {
  const artworks = await fetchArtworks();
  const artworkContainer = document.querySelector("#artwork-container");

  let count = 0;
  for (const artwork of artworks) {
    if (artwork.image_id) {
      const img = document.createElement("img");
      img.src = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,1000/0/default.jpg`;
      img.alt = artwork.title;
      img.style.height = "400px";
      artworkContainer.append(img);
      count++;
      if (count >= 3) {
        break;
      }
    } else {
      console.log(`Artwork with ID ${artwork.id} has no image.`);
    }
  }
};
