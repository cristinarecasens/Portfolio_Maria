// Bloquear click dret
document.addEventListener('contextmenu', event => event.preventDefault());

// Bloquear Ctrl+C
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'c') {
    event.preventDefault();
  }
});

// SECCIÓ INICI
const images = [
  'images/fotografo-paisajes.jpg',
  'images/riu.jpg',
  'images/canoa.jpg'
];

let current = 0;
const inici = document.querySelector('.inici');

setInterval(() => {
  current = (current + 1) % images.length;
  inici.style.backgroundImage = `url(${images[current]})`;
}, 3000);

// SECCIÓ FOTOS
const fotos = document.querySelectorAll('.fotos-multi .foto, .fotos-multi .foto_v');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

function showImage(index) {
  if (index < 0) index = fotos.length - 1;       // Si es menor que 0, va al final
  if (index >= fotos.length) index = 0;          // Si es mayor que último, vuelve al principio
  currentIndex = index;
  lightboxImg.src = fotos[currentIndex].src;
}

fotos.forEach((foto, i) => {
  foto.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    showImage(i);
  });
});

// Cerrar al clicar fuera de la imagen
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Cerrar con la cruz
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Botones siguiente y anterior
nextBtn.addEventListener('click', () => {
  showImage(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
  showImage(currentIndex - 1);
});


