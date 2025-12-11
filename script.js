const images = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const total = images.children.length;

function showImage(i) {
  images.style.transform = `translateX(${-800 * i}px)`;
}

prevBtn.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : total - 1;
  showImage(index);
});

nextBtn.addEventListener('click', () => {
  index = (index < total - 1) ? index + 1 : 0;
  showImage(index);
});

// Auto-play opcional
setInterval(() => {
  index = (index < total - 1) ? index + 1 : 0;
  showImage(index);
}, 3000);
