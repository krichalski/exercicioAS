document.addEventListener('DOMContentLoaded', () => {
    const listaDados = document.getElementById('lista-dados');
  
    const carregarDados = async () => {
      try {
        const resposta = await fetch('/dados.csv');
        const dadosCSV = await resposta.text();
        const linhas = dadosCSV.split('\n');
  
        let listaHTML = '<ul>';
  
        for (let i = 0; i < linhas.length; i++) {
          const colunas = linhas[i].split(',');
          if (colunas.length === 6) {
            let notasAnteriores = '';
  
            for (let j = 1; j <= 3; j++) {
              notasAnteriores += `Nota ${j}: ${colunas[j]} `;
            }
  
            listaHTML += `<li>Nome: ${colunas[0]} - ${notasAnteriores}- Média Final: ${colunas[5]}</li>`;
          }
        }
  
        listaHTML += '</ul>';
        listaDados.innerHTML = listaHTML;
      } catch (erro) {
        console.error('Erro ao carregar os dados do CSV:', erro);
      }
    };
  
    carregarDados();
  });
  function voltarParaCalculo() {
    window.location.href = '/media.html'; 
}
function voltarParaInicio() {
    window.location.href = '/index.html'; 
}