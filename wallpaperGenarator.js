document.addEventListener('DOMContentLoaded', () => {
  fetch('imagenes.json')
    .then(res => res.json())
    .then(data => {
      const gallery = document.querySelector('.gallery');

      if (!gallery) {
        console.error("Elemento con clase '.gallery' no encontrado en el DOM.");
        return;
      }

      data.forEach(img => {
        const link = document.createElement('a');
        link.href = `descargar.html?id=${img.id}`;
        link.className = 'links';

        const image = document.createElement('img');
        image.src = img.url;
        image.className = 'color';

        link.appendChild(image);
        gallery.appendChild(link);
      });
    })
    .catch(error => console.error('Error cargando el JSON:', error));
});
