import React, { useState } from 'react';
import './mini-ecommerce.css';

import Menu from './components/menu/menu';
import Produtos from './components/produtos/produtos';
import Checkout from './components/checkout/checkout';

function MiniEcommerce() {

  const [carrinho, setCarrinho] = useState({ produtos: []});
  const [exibirProduto, setExibirProduto] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(true);
  const [total, setTotal] = useState('0,00');

  return (
    <div>
      <Menu />
      <Produtos />
      <Checkout />
    </div>
  );
}

export default MiniEcommerce;
