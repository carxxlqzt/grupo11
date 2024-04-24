document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.carrusel-container');
    container.addEventListener('wheel', function (event) {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    });
  });