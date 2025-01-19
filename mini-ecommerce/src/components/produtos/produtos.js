import React, { useState } from "react";
import ListarProdutos from "./listar-produtos";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

function Produtos(props) {
    const [exibirMsg, setExibirMsg] = useState(false);
    const [produto, setProduto] = useState('');

   

    function visivel() {
        return props.visivel ? null : 'hidden';
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
            <Alert 
                variant="success"
                style={{ margin: '10px' }}
                show={exibirMsg}
            >
                <b>{produto.nome}</b> adicionado com sucesso ao carrinho.
            </Alert>
            <div className="list-produtos">
                <ListarProdutos
                    exibirMensagem={exibirMensagem}
                    adicionarProduto={props.adicionarProduto} // Correção: usar a prop passada para o componente
                />
            </div>
        </div>
    );
}

Produtos.propTypes = { // Correção do nome para `propTypes`
    visivel: PropTypes.bool.isRequired,
    adicionarProduto: PropTypes.func.isRequired // Corrigido para coincidir com a prop usada no componente
};

export default Produtos;
