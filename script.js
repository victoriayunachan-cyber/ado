const imagens = {
  usseewa: ["img/usseewa_1.jpg", "img/usseewa_2.jpg", "img/usseewa_3.jpg", "img/usseewa_4.jpg"],
  show: ["img/show_1.jpg", "img/show_2.jpg"],
  tot: ["img/tot_musica_1.jpg", "img/tot_musica_2.jpg"],
  rule: ["img/rule_1.jpg", "img/rule_2.jpg"],
  god: ["img/god_ish_1.jpg"]
};

function mostrarImagens(musica) {
  const galeria = document.getElementById("galeria");
  galeria.innerHTML = ""; // Limpa galeria atual
  imagens[musica].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    galeria.appendChild(img);
  });
}
