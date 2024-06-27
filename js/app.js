let txtTotal = document.getElementById("n-total");
let txtAgrupados = document.getElementById("n-agrupados");
let btnCalcula = document.getElementById("btn-calcula");
let resultado = document.getElementById("resultado");
let escolha = document.getElementById("escolha");
let parte2 = document.getElementById("parte2");

function fatorial(x) {
  let prod = 1;
  for (let i = 1; i <= x; i++) {
    prod *= i;
  }
  return prod;
}

function arranjo(n, p) {
  // console.log("Executando arranjo");
  const valor = fatorial(n) / fatorial(n - p);
  return valor;
}

function combinacao(n, p) {
  const valor = fatorial(n) / (fatorial(n - p) * fatorial(p));
  return valor;
}

function mudarOpcao() {
  console.log("Mudando a escolha");
  console.log(`Opção = ${escolha.value}`);
  if (Number(escolha.value) == 3) {
    parte2.style.display = "none";
  } else {
    parte2.style.display = "block";
  }
}

escolha.addEventListener("change", mudarOpcao, false);

function calcula() {
  const total = Number(txtTotal.value);
  const agrupados = Number(txtAgrupados.value);

  if (total >= agrupados) {
    switch (Number(escolha.value)) {
      case 1:
        resultado.innerHTML = `<h3>Arranjo simples</h3>`;
        resultado.innerHTML += `<h4>n = ${total}  p = ${agrupados}</h4>`;
        const v1 = arranjo(total, agrupados);
        resultado.innerHTML += `<h4>A_${total},${agrupados} = ${v1}</h4>`;
        break;
      case 2:
        resultado.innerHTML = `<h3>Combinação simples</h3>`;
        resultado.innerHTML += `<h4>n = ${total}  p = ${agrupados}</h4>`;
        const v2 = combinacao(total, agrupados);
        resultado.innerHTML += `<h4>C_${total},${agrupados} = ${v2}</h4>`;
        break;
      case 3:
        resultado.innerHTML = `<h3>Permutação</h3>`;
        resultado.innerHTML += `<h4>n = ${total}</h4>`;
        const v3 = fatorial(total);
        resultado.innerHTML += `<h4>${total}! = ${v3}</h4>`;
        break;
      default:
        resultado.innerHTML = `<p>Opção inválida</p>`;
    }
  } else {
    resultado.innerHTML = `<p>Erro o valor quantidade de elementos deve ser maior ou igual ao número de agrupados<p>`;
  }
}

btnCalcula.addEventListener("click", calcula, false);
