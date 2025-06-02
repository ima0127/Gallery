    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    fetch("imagenes.json")
      .then(res => res.json())
      .then(data => {
        const imgData = data.find(img => img.id === id);
        if (imgData) {
          document.getElementById("imgSeleccionada").src = imgData.url;
          document.getElementById("botonDescargar").href = imgData.url;
        } else {
          document.body.innerHTML = "<p>Imagen no encontrada</p>";
        }
      });