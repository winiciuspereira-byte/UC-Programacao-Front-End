# Exercícios

## Ternário

Faça os exercícios a seguir escrevendo código JavaScript a ser vinculado à sua página HTML com a tag `<script>`.

### Essenciais

1. Em uma loja virtual, pedidos com valor igual ou superior a R$ 150,00 têm frete grátis (0). Caso contrário, o frete custa R$ 20,00. Refatore o código abaixo para uma única linha, eliminando o bloco `if/else` e declarando a variável frete como `const`.

```js
let valorCompra = 180;
let frete;

if (valorCompra >= 150) {
  frete = 0;
} else {
  frete = 20;
}
```

2. Você precisa exibir mensagens de quantidade no carrinho de compras na interface, ajustando automaticamente entre singular e plural ("1 item" ou "3 itens"). Ao invés de criar uma variável intermediária para armazenar a palavra, insira o operador ternário diretamente dentro da template string (`${...}`). Refatore o código:

```js
const quantidade = 1;
let palavra;

if (quantidade === 1) {
  palavra = "item";
} else {
  palavra = "itens";
}

const mensagem = `Você tem ${quantidade} ${palavra} no carrinho.`;
```

---

- Utilize a função `prompt()` para capturar dados do usuário
- Utilize as funções `prompt()` ou `confirm()` para capturar entradas do usuário
- Utilize as funções `alert()` ou `console.log()` para exibir saídas ao usuário
- Faça a verificação se o tipo de dado adequado foi inserido
- Utilize a conversão de tipos, implícita ou explícita, conforme necessidade, em cada exercício