document.getElementById("Acesso").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const cardNumber = parseInt(document.getElementById("numero-do-cartao").value);
    const resultElement = document.getElementById("resultado");
  
    if (cardNumber >= 1000 && cardNumber <= 1999) {
      resultElement.textContent = "Acesso total concedido.";
    } else if (cardNumber >= 2000 && cardNumber <= 2999) {
      resultElement.textContent = "Acesso limitado concedido.";
    } else if (cardNumber > 3000) {
      resultElement.textContent = "Acesso não permitido.";
    } else {
      resultElement.textContent = "Número de cartão inválido.";
    }
  });