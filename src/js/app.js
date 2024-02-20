
import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';


BaseHelpers.checkWebpSupport();
BaseHelpers.addLoadedClass();

new BurgerMenu().init();
import { toggleLinkMenuNoOpen } from './modules/index.js'
toggleLinkMenuNoOpen()

const reviews = document.querySelectorAll('.review');
  const paginationItems = document.querySelectorAll('.pagination__item');

  function updateReviews(targetIndex) {
    reviews.forEach((review, index) => {
      if (index === targetIndex) {
        review.style.display = 'flex'; 
      } else {
        review.style.display = 'none';
      }
    });

    paginationItems.forEach((item, index) => {
      if (index === targetIndex) {
        item.style.background = '#007AFF';
      } else {
        item.style.background = '#DDE0FF';
      }
    });
  }

  paginationItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      updateReviews(index);
    });
  });

  updateReviews(0);


  const slides = document.querySelectorAll('.sixth-section__row .slide');
  const prevButton = document.querySelector('.controls .prev');
  const nextButton = document.querySelector('.controls .next');
  let currentIndex = 0; 

  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.style.display = index === currentIndex ? 'block' : 'none';
    });

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
  }

  prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateSlides();
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentIndex < slides.length - 1) {
      currentIndex += 1;
      updateSlides();
    }
  });

  updateSlides();

  window.addEventListener('resize', function() {
    if (window.innerWidth < 1024) {
      updateSlides();
    } else {
      slides.forEach((slide) => {
        slide.style.display = 'block';
      });
      prevButton.disabled = false;
      nextButton.disabled = false;
    }
  });

  window.dispatchEvent(new Event('resize'));
