document.addEventListener('DOMContentLoaded', () => {
  // Detect which page we are on by checking body or something else
  const isIndex = document.querySelector('.gallery') !== null;
  const isRecentWorks = document.querySelector('.slideshow') !== null;

  if (isIndex) {
    // Gallery modal logic
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const modalClose = document.getElementById('modal-close');

    function openModal(img) {
      modalImg.src = img.dataset.full;
      modalImg.alt = img.alt;
      modalCaption.textContent = img.alt;
      modal.hidden = false;
      modalClose.focus();
    }

    function closeModal() {
      modal.hidden = true;
      modalImg.src = '';
      modalImg.alt = '';
    }

    galleryItems.forEach(item => {
      item.addEventListener('click', () => openModal(item));
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(item);
        }
      });
    });

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', e => {
      if (!modal.hidden && e.key === 'Escape') {
        closeModal();
      }
    });
  }

  if (isRecentWorks) {
    // Slideshow logic
    const slideshow = document.querySelector('.slideshow');
    const slideshowImage = document.getElementById('slideshowImage');
    const caption = document.getElementById('caption');

    const artworks = [
      { src: 'images/artwork1.jpg', alt: 'Artwork 1' },
      { src: 'images/artwork2.jpg', alt: 'Artwork 2' },
      { src: 'images/artwork3.jpg', alt: 'Artwork 3' },
      { src: 'images/artwork4.jpg', alt: 'Artwork 4' },
    ];

    let currentIndex = 0;

    function showArtwork(index) {
      slideshowImage.style.opacity = 0;
      setTimeout(() => {
        slideshowImage.src = artworks[index].src;
        slideshowImage.alt = artworks[index].alt;
        caption.textContent = artworks[index].alt;
        slideshowImage.style.opacity = 1;
      }, 300);
    }

    slideshow.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % artworks.length;
      showArtwork(currentIndex);
    });

    slideshow.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % artworks.length;
        showArtwork(currentIndex);
      }
    });

    showArtwork(currentIndex);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('mainImage');
  const caption = document.getElementById('caption');
  const thumbnails = document.querySelectorAll('.thumbnail');

  thumbnails.forEach(thumb => {
    function updateMainImage() {
      mainImage.src = thumb.dataset.full;
      mainImage.alt = thumb.alt;
      caption.textContent = thumb.alt;
    }

    thumb.addEventListener('click', updateMainImage);
    thumb.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        updateMainImage();
      }
    });
  });
});
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');
const closeBtn = document.getElementById('closeBtn');

// Assuming your thumbnails have class 'thumbnail'
document.querySelectorAll('.thumbnail').forEach(img => {
  img.addEventListener('click', () => {
    overlayImage.src = img.src.replace('_thumb', ''); // or full image path logic
    overlay.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlayImage.src = '';
});

