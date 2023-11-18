
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loader").style.display = "flex";
  document.getElementById("content").style.display = "none"; // Ocultar contenido mientras se carga
});


window.addEventListener("load", function() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
});
