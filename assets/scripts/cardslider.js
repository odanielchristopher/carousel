function updateSliderPosition(track, slideWidth, currentSlide) {
  track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

function slider() {
  const sliderTrack = document.querySelector('.slider-track');
  const cards = document.querySelectorAll('.slider-card');
  const prevBtn = document.querySelector('.slider-prevbtn');
  const nextBtn = document.querySelector('.slider-nextbtn');
  let currentSlide = 0;
  let numberCards = 0;
  let cardsLength = cards.length % 2 === 0 ? cards.length : cards.length + 1;
  
  if (window.innerWidth <= 750) {
    numberCards = 1;
    cardsLength = cards.length;
  } else if (window.innerWidth <= 1024) {
    numberCards = 2;
  } else {
    numberCards = 4;
  }

  const slideWidth = sliderTrack.clientWidth;

  function resetSlide() {
    updateSliderPosition(sliderTrack, slideWidth, currentSlide);
  }

  function showPrevSlide() {
    if (currentSlide == 0) {
      currentSlide = cardsLength / numberCards - 1;
    } else {
      currentSlide = Math.max(currentSlide - 1, 0);
    }
    updateSliderPosition(sliderTrack, slideWidth, currentSlide);
  }

  function showNextSlide() {
    if (currentSlide == cardsLength / numberCards - 1) {
      currentSlide = 0;
    } else {
      currentSlide = Math.min(currentSlide + 1, cardsLength / numberCards - 1);
    }
    updateSliderPosition(sliderTrack, slideWidth, currentSlide);
  }

  prevBtn.addEventListener('click', showPrevSlide);
  nextBtn.addEventListener('click', showNextSlide);

  resetSlide();
}

document.addEventListener('DOMContentLoaded', slider);
window.addEventListener('resize', slider);