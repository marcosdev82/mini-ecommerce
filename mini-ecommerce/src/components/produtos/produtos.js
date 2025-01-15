import React, { useState } from "react";
import ListarProdutos from "./listar-produtos";
import PropTypes from "prop-types";

function Produtos(props) {

    const [exibirMsg, setExibirMsg] = useState(false);
    const [produto, setProduto] = useState('');

    function visivel() {
        return props.visivel  ? null : 'hidden'
    }

    function exibirMensagem(produto) {
        setExibirMsg(true);
        setProduto(produto);
        setTimeout(() => {
            setExibirMsg(false);
        }, 3000);
    }

    return (
        <div className={visivel()}>
            <ListarProdutos />
        </div>
    );

}

Produtos.prototype = {
    visivel: PropTypes.bool.isRequired,
    adicionarProdutos: PropTypes.func.isRequired
}

export default Produtos;