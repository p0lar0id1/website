document.addEventListener('DOMContentLoaded', () => {

  // --- Detect Page Type ---
  const isGallery = document.querySelector('.gallery') !== null;
  const isSlideshow = document.querySelector('.slideshow') !== null;

  // --- Common: Disable right-click and drag on all images ---
  document.addEventListener('contextmenu', e => {
    if (e.target.tagName === "IMG") e.preventDefault();
  });
  document.addEventListener('dragstart', e => {
    if (e.target.tagName === "IMG") e.preventDefault();
  });

  // --- GALLERY PAGE LOGIC ---
  if (isGallery) {
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const closeBtn = document.getElementById('closeBtn');

    document.querySelectorAll('.thumbnail').forEach(img => {
      img.addEventListener('click', () => {
        // Show overlay with full-size image
        overlayImage.src = img.dataset.full || img.src;
        overlayImage.alt = img.alt;
        overlay.style.display = 'flex';
        overlay.setAttribute('aria-hidden', 'false');
      });

      img.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          overlayImage.src = img.dataset.full || img.src;
          overlayImage.alt = img.alt;
          overlay.style.display = 'flex';
          overlay.setAttribute('aria-hidden', 'false');
        }
      });
    });

    // Close overlay
    const closeOverlay = () => {
      overlay.style.display = 'none';
      overlayImage.src = '';
      overlay.setAttribute('aria-hidden', 'true');
    };

    closeBtn.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeOverlay();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.style.display === 'flex') closeOverlay();
    });
  }

  // --- RECENT WORKS / INDEX SLIDESHOW LOGIC ---
  if (isSlideshow) {
    const slideshowImage = document.getElementById('slideshowImage');
    const caption = document.getElementById('caption');

    const artworks = [
      { src: 'images/artwork1.jpg', alt: 'Artwork 1' },
      { src: 'images/artwork2.jpg', alt: 'Artwork 2' },
      { src: 'images/artwork3.jpg', alt: 'Artwork 3' },
      { src: 'images/artwork4.jpg', alt: 'Artwork 4' },
    ];

    let currentIndex = 0;

    const showArtwork = index => {
      slideshowImage.style.opacity = 0;
      setTimeout(() => {
        slideshowImage.src = artworks[index].src;
        slideshowImage.alt = artworks[index].alt;
        caption.textContent = artworks[index].alt;
        slideshowImage.style.opacity = 1;
      }, 300);
    };

    slideshowImage.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % artworks.length;
      showArtwork(currentIndex);
    });

    slideshowImage.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % artworks.length;
        showArtwork(currentIndex);
      }
    });

    showArtwork(currentIndex);
  }

  // --- OPTIONAL: Update main image from thumbnails if exists ---
  const mainImage = document.getElementById('mainImage');
  const caption = document.getElementById('caption');
  if (mainImage && caption) {
    document.querySelectorAll('.thumbnail').forEach(thumb => {
      const updateMain = () => {
        mainImage.src = thumb.dataset.full || thumb.src;
        mainImage.alt = thumb.alt;
        caption.textContent = thumb.alt;
      };
      thumb.addEventListener('click', updateMain);
      thumb.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          updateMain();
        }
      });
    });
  }

});
