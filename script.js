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
