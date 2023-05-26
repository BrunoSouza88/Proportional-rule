const atualizarResultado = () => {
  let valueInputA = document.getElementById('valorA').value;
  let valueInputB = document.getElementById('valorB').value;
  let valueInputC = document.getElementById('valorC').value;

  let valorA = parseFloat(valueInputA);
  let valorB = parseFloat(valueInputB);
  let valorC = parseFloat(valueInputC);

  let resultado = (valorC * valorB) / valorA;

  if (!isNaN(resultado)) {
    document.getElementById('resultado').innerHTML = resultado.toFixed(2);
  } else {
    document.getElementById('resultado').innerHTML = "";
  } 
};

const copiarResultado = () => {
  let resultado = document.getElementById('resultado').textContent;
  navigator.clipboard.writeText(resultado)
    .then(() => {
      let mensagem = document.createElement('div');
      mensagem.textContent = 'Resultado copiado!';
      mensagem.classList.add('mensagem');
      document.body.appendChild(mensagem);

      setTimeout(() => {
        mensagem.remove();
      }, 3000);
    })
    .catch((error) => {
      console.error('Erro ao copiar o resultado:', error);
    });
};

const limparDados = () => {
  document.getElementById('valorA').value = "";
  document.getElementById('valorB').value = "";
  document.getElementById('valorC').value = "";
  document.getElementById('resultado').innerHTML = "";
};

atualizarResultado();
