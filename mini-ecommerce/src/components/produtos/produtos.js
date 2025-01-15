import React from "react";
import ListarProdutos from "./listar-produtos";
import PropTypes from "prop-types";

function Produtos() {

    return (
        <ListarProdutos />
    );

}

Produtos.prototype = {
    visivel: PropTypes.bool.isRequired,
    adicionarProdutos: PropTypes.func.isRequired
}

export default Produtos;