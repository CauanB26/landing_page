// Cria um array de objetos, cada um contendo o ID da imagem e o ID do texto correspondente
const techPairs = [
    { imageId: 'imgPython', textId: 'py-txt' },  // Python
    { imageId: 'imgC',      textId: 'c-txt' },   // C
    { imageId: 'imgJS',     textId: 'js-txt' },  // JavaScript
    { imageId: 'imgHTML',   textId: 'html-txt' },// HTML
    { imageId: 'imgCSS',    textId: 'CSS-txt' }  // CSS
  ];
  
  // Função para esconder todos os textos
  function hideAllTexts() {
    // Percorre cada par de imagem/texto
    techPairs.forEach(pair => {
      // Localiza o elemento de texto pelo ID
      const textElement = document.getElementById(pair.textId);
      // Define display como 'none' para esconder o texto
      textElement.style.display = 'none';
    });
  }
  
  // Adiciona event listeners de clique para cada imagem
  techPairs.forEach(pair => {
    // Pega o elemento da imagem pelo ID
    const imgElement = document.getElementById(pair.imageId);
    // Pega o elemento de texto pelo ID
    const textElement = document.getElementById(pair.textId);
  
    // Adiciona um evento de clique na imagem
    imgElement.addEventListener('click', () => {
      // Verifica se o texto atualmente está escondido
      const isHidden = (textElement.style.display === 'none');
  
      // Primeiro, esconde todos os textos
      hideAllTexts();
  
      // Se o texto estava escondido, mostra ele
      if (isHidden) {
        textElement.style.display = 'block';
      }
      // Caso contrário, se já estava visível, não fazemos nada
      // (pois o hideAllTexts() já o escondeu)
    });
  });
  