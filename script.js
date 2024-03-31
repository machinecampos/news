// Declare variables
/* let post = document.querySelector(".post");
let darkmode;

console.log("We're running!") */

// Variáveis para armazenar elementos HTML

/*
const container = document.querySelector('.container'); // Container principal das notícias
const newsBlockTemplate = document.querySelector('#news-block-template').content; // Template HTML para cada bloco de notícia

// Função para criar um novo bloco de notícia
function createNewBlock(newsData) {
  // Clonar o template HTML
  const newBlock = newsBlockTemplate.cloneNode(true);

  // Preencher o template com os dados da notícia
  newBlock.querySelector('.title').textContent = newsData.title;
  newBlock.querySelector('.image').src = newsData.image;
  newBlock.querySelector('.description').textContent = newsData.description;
  newBlock.querySelector('.author').textContent = newsData.author;
  newBlock.querySelector('.date').textContent = newsData.date;

  // Adicionar o novo bloco ao container
  container.prepend(newBlock);
}

// Função para carregar novas notícias
async function loadNews() {
  // Simular a busca por novas notícias (substitua por API real)
  const newsData = await fetch('https://newsapi.org/s/google-news-br-api').then(response => response.json());

  // Loop para criar e adicionar novos blocos de notícias
  for (const news of newsData) {
    createNewBlock(news);
  }
}

// Carregar as primeiras notícias
loadNews();

// Implementar scroll infinito (opcional)
window.addEventListener('scroll', () => {
  // Verificar se o usuário chegou ao final da página
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Carregar mais notícias
    loadNews();
  }
});
*/

