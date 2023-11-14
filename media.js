const nome = document.querySelector("#nome");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const med = document.getElementById("me");
const r = document.getElementById("resp");
const botao = document.getElementById("b1");
const bot2 = document.getElementById("b2");

bot2.addEventListener('click', limpar);

function limpar() {
  nome.value = "";
  n1.value = "";
  n2.value = "";
  n3.value = "";
  med.value = "";
  r.innerHTML = (`Campos limpos com sucesso!`);
}

botao.addEventListener('click', () => {
  let n = nome.value;
  let num1 = Number(n1.value);
  let num2 = Number(n2.value);
  let num3 = Number(n3.value);
  let m = Number(med.value);

 
  fetch('/salvar-dados', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `nome=${n}&n1=${num1}&n2=${num2}&n3=${num3}&me=${m}`,
  })
  .then(response => response.text())
  .then(message => console.log(message))
  .catch(error => console.error(error));
});
