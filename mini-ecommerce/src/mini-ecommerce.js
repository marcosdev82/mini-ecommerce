import React, { useState } from 'react';
import './mini-ecommerce.css';

import Menu from './components/menu/menu';
import Produtos from './components/produtos/produtos';
import Checkout from './components/checkout/checkout';

function MiniEcommerce() {

  const [carrinho, setCarrinho] = useState({ produtos: []});
  const [exibirProdutos, setExibirProdutos] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(false);
  const [total, setTotal] = useState('0,00');

  function adicionarProduto(produto) {
    console.log(produto)
    // const objCarrinho = Object.assign({}, carrinho);
    // atualizar quantidade

    // adicionar quantidade
  }

  return (
    <div>
      <Menu />
      <Produtos 
        visivel={exibirProdutos}
        adicionarProduto={adicionarProduto}
      />
      <Checkout />
    </div>
  );
}

export default MiniEcommerce;
