<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ado - Cantora Japonesa</title>
<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet">
<style>
body { font-family: Arial, sans-serif; font-size: 1rem; line-height: 1.6; }
h1,h2 { color: #CB6D43; }
img { border: 2px solid #ddd; margin-bottom: 15px; cursor: pointer; width:150px; height:auto; }
.musica-card { background:#f8f8f8; padding:10px; border-radius:8px; margin-bottom:10px; cursor:pointer; }
.detalhes-musica { display:none; margin-top:5px; font-size:0.9rem; }
.mostrar { display:block; }
#modal-clipe { display:none; position:fixed; z-index:1000; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.6); }
.modal-conteudo { background:#fff; margin:10% auto; padding:20px; width:80%; max-width:500px; border-radius:8px; position:relative; text-align:center; }
#fechar-modal { position:absolute; top:10px; right:20px; font-size:1.5rem; cursor:pointer; }
.alto-contraste { background:#000; color:#fff; }
.alto-contraste a, .alto-contraste button { color:#ffd700; }
.menu-acessibilidade { position:fixed; top:1rem; right:1rem; z-index:1000; display:flex; flex-direction:column; gap:5px; }
</style>
</head>
<body>

<header class="p-3 bg-dark text-white text-center">
<h1>Ado - Cantora Japonesa</h1>
<nav>
<button id="botao-acessibilidade" class="btn btn-light">Acessibilidade</button>
<div id="opcoes-acessibilidade" class="menu-acessibilidade" style="display:none;">
<button id="aumentar-fonte" class="btn btn-light">A+</button>
<button id="diminuir-fonte" class="btn btn-light">A-</button>
<button id="alterna-contraste" class="btn btn-light">Contraste</button>
</div>
</nav>
</header>

<main class="container my-5">

<section id="musicas">
<h2>Músicas Populares</h2>

<div class="musica-card" tabindex="0">
  Usseewa
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAADf8/9HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQFEy8KRGv7+wAAAAlwSFlzAAAN1wAADdcBQiibeAAAAIdJREFUeNrtwTEBAAAAwiD7p7bHBwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8HkAgABw0I4pAAAAAElFTkSuQmCC" alt="Usseewa">
  <div class="detalhes-musica">Álbum: Ado, Lançamento: 2020</div>
</div>

<div class="musica-card" tabindex="0">
  Show
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAADf8/9HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQFEy8RZwhuJwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAIdJREFUeNrtwTEBAAAAwiD7p7bHBwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8HkAgABw0I4pAAAAAElFTkSuQmCC" alt="Show">
  <div class="detalhes-musica">Álbum: Ado, Lançamento: 2021</div>
</div>

<div class="musica-card" tabindex="0">
  God-ish
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAADf8/9HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQFEy4e0Ux2lAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAIdJREFUeNrtwTEBAAAAwiD7p7bHBwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8HkAgABw0I4pAAAAAElFTkSuQmCC" alt="God-ish">
  <div class="detalhes-musica">Álbum: Ado, Lançamento: 2021</div>
</div>

<div class="musica-card" tabindex="0">
  RuLe
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAADf8/9HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQFEy4d4vSCtQAAAAlwSFlzAAAN1wAADdcBQiibeAAAAIdJREFUeNrtwTEBAAAAwiD7p7bHBwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8HkAgABw0I4pAAAAAElFTkSuQmCC" alt="RuLe">
  <div class="detalhes-musica">Álbum: Ado, Lançamento: 2022</div>
</div>

<div class="musica-card" tabindex="0">
  Tot Musica
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAADf8/9HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQFEy4SxB+PDAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAIdJREFUeNrtwTEBAAAAwiD7p7bHBwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8HkAgABw0I4pAAAAAElFTkSuQmCC" alt="Tot Musica">
  <div class="detalhes-musica">Álbum: Ado, Lançamento: 2022</div>
</div>

</section>

<section id="galeria" class="mt-5">
<h2>Clipes</h2>

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAADf8/9HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQFEy0KedQPSwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAIdJREFUeNrtwTEBAAAAwiD7p7bHBwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8HkAgABw0I4pAAAAAElFTkSuQmCC" class="clipe-img" data-titulo="Usseewa" data-descricao="Clipe oficial da música Usseewa">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAADf8/9HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQFEy4N+DrQKwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAIdJREFUeNrtwTEBAAAAwiD7p7bHBwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8HkAgABw0I4pAAAAAElFTkSuQmCC" class="clipe-img" data-titulo="Show" data-descricao="Clipe oficial da música Show">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAADf8/9HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQFEy4ZsxFjNwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAIdJREFUeNrtwTEBAAAAwiD7p7bHBwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8HkAgABw0I4pAAAAAElFTkSuQmCC" class="clipe-img" data-titulo="God-ish" data-descricao="Clipe oficial da música God-ish">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAADf8/9HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQFEy4QjXJZJwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAIdJREFUeNrtwTEBAAAAwiD7p7bHBwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8HkAgABw0I4pAAAAAElFTkSuQmCC" class="clipe-img" data-titulo="RuLe" data-descricao="Clipe oficial da música RuLe">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAADf8/9HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQFEy4cYxqfTwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAIdJREFUeNrtwTEBAAAAwiD7p7bHBwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8HkAgABw0I4pAAAAAElFTkSuQmCC" class="clipe-img" data-titulo="Tot Musica" data-descricao="Clipe oficial da música Tot Musica">

</section>

</main>

<!-- Modal -->
<div id="modal-clipe">
  <div class="modal-conteudo" id="modal-conteudo"></div>
  <span id="fechar-modal">&times;</span>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Menu de acessibilidade
  const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoes = document.getElementById('opcoes-acessibilidade');
  botaoAcessibilidade.addEventListener('click', () => {
    opcoes.style.display = opcoes.style.display === 'flex' ? 'none' : 'flex';
  });
  let tamanhoFonte = 1;
  document.getElementById('aumentar-fonte').addEventListener('click', () => {
    tamanhoFonte += 0.1;
    document.body.style.fontSize = `${tamanhoFonte}rem`;
  });
  document.getElementById('diminuir-fonte').addEventListener('click', () => {
    tamanhoFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoFonte}rem`;
  });
  document.getElementById('alterna-contraste').addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });

  // Interatividade músicas
  const musicas = document.querySelectorAll('.musica-card');
  musicas.forEach(card => {
    card.addEventListener('click', () => {
      card.querySelector('.detalhes-musica').classList.toggle('mostrar');
    });
  });

  // Modal clipes
  const clipes = document.querySelectorAll('.clipe-img');
  const modal = document.getElementById('modal-clipe');
  const modalConteudo = document.getElementById('modal-conteudo');
  const fecharModal = document.getElementById('fechar-modal');
  clipes.forEach(img => {
    img.addEventListener('click', () => {
      const titulo = img.getAttribute('data-titulo');
      const descricao = img.getAttribute('data-descricao');
      modalConteudo.innerHTML = `<h3>${titulo}</h3><p>${descricao}</p><img src="${img.src}" style="width:100%;">`;
      modal.style.display = 'block';
    });
  });
  fecharModal.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => { if(e.target === modal) modal.style.display='none'; });
});
</script>

</body>
</html>
