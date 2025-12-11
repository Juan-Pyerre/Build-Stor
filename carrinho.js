// Adicionar produto ao carrinho
function addCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  carrinho.push(produto); // aqui pode ter repetidos
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  mostrarCarrinho();
}

// Função para pegar imagem de cada produto
function getImagem(produto) {
  switch (produto) {
    case 'Makita':
      return 'imgs/makita.jpg';
    case 'Betoneira':
      return 'imgs/betoneira.png';
    case 'Chave de Fenda':
      return 'imgs/chaveFenda.png';
    case 'Lixadeira':
      return 'imgs/lixadeira.png';
    case 'Parafusadeira':
      return 'imgs/parafusadeira.png';
    default:
      return 'imgs/default.png'; // imagem padrão
  }
}

// Exibir carrinho
function mostrarCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let container = document.getElementById('carrinho');

  container.innerHTML = carrinho
    .map((item, index) => `
      <div class="item">
      <div class="imagem">
        <img src="${getImagem(item)}" alt="${item}" width="50">
      </div>
        <p>${item}</p>
        <button class="botao" onclick="removerCarrinho(${index})">
        <!-- X com traço (personalizável) -->
    <div class="x">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>
Remover
</button>
    </div>
      
    `)
    .join('');
}

// Remover item do carrinho
function removerCarrinho(index) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1); // remove pelo índice
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  mostrarCarrinho();
}

// Carregar carrinho ao abrir a página
document.addEventListener('DOMContentLoaded', mostrarCarrinho);


// Remover item do carrinho
function removerCarrinho(index) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1); // remove pelo índice
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  mostrarCarrinho();
}

// Carregar carrinho ao abrir a página
document.addEventListener('DOMContentLoaded', mostrarCarrinho);