// Mostrar el loader al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loader").style.display = "block";
    document.getElementById("content").style.display = "none"; // Ocultar contenido mientras se carga
  });
  
  // Ocultar el loader y mostrar el contenido cuando la página haya cargado completamente
  window.addEventListener("load", function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  });
  