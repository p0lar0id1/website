<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Recent Works - Bella Antonova</title>
  <link rel="stylesheet" href="styles.css" />
  <style>
    .main-image-container {
      width: 100%;
      height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #mainImage {
      max-width: 100%;
      max-height: 70vh;
      object-fit: contain;
      display: block;
    }

    #caption {
      margin-top: 10px;
      font-size: 1.2rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <aside class="sidebar">
      <div>
        <h1 class="title">Bella Antonova</h1>
        <p class="subtitle">Artist</p>
        <ul class="nav-links">
          <li><a href="index.html" class="active">Recent Works</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="social-media">
        <a href="https://instagram.com/yourhandle" target="_blank" aria-label="Instagram">Instagram</a>
        <a href="https://facebook.com/yourhandle" target="_blank" aria-label="Facebook">Facebook</a>
      </div>
    </aside>

    <main class="content">
      <h2>Recent Works</h2>
      <div class="main-image-container" id="imageContainer">
        <img id="mainImage" src="images/artwork1.jpg" alt="Artwork 1" />
        <p id="caption">Artwork 1</p>
      </div>
    </main>
  </div>
  <script>
    const images = [
      { src: "images/artwork1.jpg", caption: "Artwork 1" },
      { src: "images/artwork2.jpg", caption: "Artwork 2" },
      { src: "images/artwork3.jpg", caption: "Artwork 3" },
      { src: "images/artwork4.jpg", caption: "Artwork 4" }
    ];

    let current = 0;
    const imgEl = document.getElementById("mainImage");
    const captionEl = document.getElementById("caption");
    const container = document.getElementById("imageContainer");

    container.addEventListener("click", () => {
      current = (current + 1) % images.length;
      imgEl.src = images[current].src;
      captionEl.textContent = images[current].caption;
    });
  </script>
</body>
</html>