let artworks = [
  {
    src: "assets/vik.png",
    title: "Lastest viking",
    date: new Date("2023-10-02"),
  },
  {
    src: "assets/eren.png",
    title: "Quick Eren sketch",
    date: new Date("2023-10-03"),
  },
  {
    src: "assets/zoee.png",
    title: "POV:you ruined, Zoe's bubble",
    date: new Date("2023-10-04"),
  },
];

window.onload = function () {
  let body = document.querySelector("body"); // Select the body element

  //loop over the images...
  artworks.forEach((artwork) => {
    // For each artwork in the artworks list
    // Create a new div element for the card
    let card = document.createElement("div");
    card.className = "card";
    // Create an img element for the artwork image
    let img = document.createElement("img");
    img.src = artwork.src;
    img.className = "artwork-image watermarked";
    img.alt = artwork.title;
    card.appendChild(img); // Add the img to the card

    // Create a div for the artwork info
    let info = document.createElement("div");
    info.className = "artwork-info";
    card.appendChild(info); // Add the info div to the card

    // Create an h2 element for the artwork title
    let title = document.createElement("h2");
    title.className = "artwork-title";
    title.textContent = artwork.title;
    info.appendChild(title); // Add the title to the info div

    // Create a p element for the artwork date
    let date = document.createElement("p");
    date.className = "artwork-date";
    date.textContent = artwork.date.toLocaleDateString(); // Format the date as a string
    info.appendChild(date); // Add the date to the info div

    body.appendChild(card); // Add the card to the body
  });

  // java script 02 -> exercise 2

  alert(
    "Press keys 0-3 to navigate through the pages:\n0: Arabic\n1: Samples\n2: Order\n3: About"
  );

  document.body.addEventListener("keydown", function (event) {
    // This line returns a list of links.
    const navLinks = document.querySelectorAll(".nav-items a");

    // Check if the key pressed is a number between '0' and '3'
    if (event.key >= "0" && event.key <= "3") {
      const linkIndex = parseInt(event.key);

      // Get the link at the given index. This is the link we want to navigate to.
      const link = navLinks[linkIndex];

      // Get the URL
      const url = link.href;

      // Navigate to the URL.
      window.location.href = url;
    }
  });
};
