// scripts.js

// Seleciona o modal e elementos internos
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var span = document.getElementsByClassName("close")[0];

// Adiciona evento de clique a cada imagem
document.querySelectorAll(".img-port").forEach((item) => {
  item.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.getAttribute("data-image");
  });
});

// Fecha o modal ao clicar no "x"
span.onclick = function () {
  modal.style.display = "none";
};

// Fecha o modal ao clicar fora da imagem
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
