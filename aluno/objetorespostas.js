
// Respostas

// 1. Produto mais caro
const produto1 = {
  nome: "Leite",
  preco: 5.49,
  categoria: "Laticínios"
};

const produto2 = {
  nome: "Banana",
  preco: 7.89,
  categoria: "Hortifruti"
};

function exibirProdutoMaisCaro(produtoA, produtoB) {
  if (produtoA.preco > produtoB.preco) {
    console.log(`O produto mais caro é ${produtoA.nome} (${produtoA.categoria}).`);
    return produtoA;
  }

  if (produtoB.preco > produtoA.preco) {
    console.log(`O produto mais caro é ${produtoB.nome} (${produtoB.categoria}).`);
    return produtoB;
  }

  console.log("Os dois produtos têm o mesmo preço.");
  return null;
}

exibirProdutoMaisCaro(produto1, produto2);

// 2. Média do aluno
const aluno = {
  nome: "Maria",
  idade: 17,
  curso: "Programação Front-End",
  notas: [8, 7, 9, 10]
};

function calcularMediaAluno(aluno) {
  const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
  aluno.media = aluno.notas.length > 0 ? soma / aluno.notas.length : 0;
  console.log(`A média de ${aluno.nome} é ${aluno.media.toFixed(1)}.`);
  return aluno;
}

calcularMediaAluno(aluno);

// 3. Detalhes do carro e atualização de opcionais
const carro = {
  nome: "Onix",
  cor: "Prata",
  modelo: "2024",
  opcionais: {
    "ar condicionado": true,
    "direção helétrica": false,
    multimídia: true
  }
};

function exibirDetalhesCarro(carro) {
  console.log(`Nome: ${carro.nome}`);
  console.log(`Cor: ${carro.cor}`);
  console.log(`Modelo: ${carro.modelo}`);
  console.log("Opcionais:", carro.opcionais);
}

function alterarOpcional(carro, nomeOpcional, valor) {
  if (Object.prototype.hasOwnProperty.call(carro.opcionais, nomeOpcional)) {
    carro.opcionais[nomeOpcional] = valor;
    console.log(`Opcional "${nomeOpcional}" atualizado para ${valor}.`);
  } else {
    console.log(`Opcional "${nomeOpcional}" não encontrado.`);
  }
}

exibirDetalhesCarro(carro);
alterarOpcional(carro, "multimídia", false);

// 4. Consolidação de dados de vendas e estoque
const produtos_vendas = {
  cafes: [
    {
      sku: 7654,
      marca: "Povo Brasileiro",
      preco: 24.0,
      categoria: "Mercearia"
    },
    {
      sku: 8765,
      marca: "Soberano - Gourmet",
      preco: 29.0,
      categoria: "Mercearia"
    },
    {
      sku: 3467,
      marca: "Dose Certa",
      preco: 27.0,
      categoria: "Mercearia"
    }
  ]
};

const produtos_estoque = {
  cafes: [
    {
      sku: 3467,
      peso: 500.0,
      unidade: "mg",
      estoque: 101
    },
    {
      sku: 7654,
      peso: 250.0,
      unidade: "mg",
      estoque: 182
    },
    {
      sku: 8765,
      peso: 250.0,
      unidade: "mg",
      estoque: 46
    }
  ]
};

const produtosConsolidados = {};

for (const categoria in produtos_vendas) {
  produtosConsolidados[categoria] = produtos_vendas[categoria].map((produtoVenda) => {
    const estoque = produtos_estoque[categoria].find((item) => item.sku === produtoVenda.sku);
    return { ...produtoVenda, ...(estoque || {}) };
  });
}

console.log(produtosConsolidados);

// 5. Carrinho com métodos
const carrinho = {
  cliente: "Alice",
  itens: [
    { nome: "Smartphone", preco: 2200, quantidade: 1 }
  ],
  cupons: ["MENOS10", "PROMO10", "10PORCENTO"],

  adicionarProduto(nome, preco, quantidade) {
    const produtoExistente = this.itens.find((item) => item.nome === nome);

    if (produtoExistente) {
      produtoExistente.quantidade += quantidade;
    } else {
      this.itens.push({ nome, preco, quantidade });
    }

    this.calcularTotal();
  },

  calcularTotal() {
    this.total = this.itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
    return this.total;
  },

  aplicarDesconto(cupom) {
    if (this.cupons.includes(cupom)) {
      this.cupomAplicado = cupom;
      this.total = this.calcularTotal() * 0.9;
    } else {
      this.cupomAplicado = null;
      this.total = this.calcularTotal();
    }

    return this.total;
  },

  exibirCupom() {
    console.log(`Cliente: ${this.cliente}`);
    console.log("Produtos:", this.itens);
    console.log(`Total: R$ ${this.total.toFixed(2)}`);
    console.log(`Cupom aplicado: ${this.cupomAplicado || "Nenhum"}`);
  }
};

carrinho.adicionarProduto("Notebook", 4500, 1);
carrinho.aplicarDesconto("PROMO10");
carrinho.exibirCupom();
```