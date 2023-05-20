//cronograma

function mostrarDia(dia) {
    // Oculta el día actualmente visible
    var diaActual = document.querySelector(
      '.cronograma-dia:not([style*="display: none"])'
    );
    if (diaActual) {
      diaActual.style.display = "none";
    }
    // Muestra el día correspondiente al botón presionado
    var diaMostrar = document.querySelector("." + dia);
    if (diaMostrar) {
      diaMostrar.style.display = "block";
    }
  }