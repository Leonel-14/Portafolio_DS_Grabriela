var slideIndices = [1, 1, 1]; // Índices para cada carrusel
var slideClasses = ["mySlides1", "mySlides2", "mySlides3"]; // Clases de imágenes

function plusDivs(n, slider) {
  showDivs(slideIndices[slider] += n, slider);
}

function showDivs(n, slider) {
  var i;
  var x = document.getElementsByClassName(slideClasses[slider]);
  if (n > x.length) { slideIndices[slider] = 1; }
  if (n < 1) { slideIndices[slider] = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndices[slider] - 1].style.display = "block";
}

// Inicialización
for (let i = 0; i < slideClasses.length; i++) {
  showDivs(1, i);
}