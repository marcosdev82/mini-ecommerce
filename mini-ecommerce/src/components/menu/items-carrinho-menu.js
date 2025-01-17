import React from "react";
import PropTypes from "prop-types";
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";

function ItensCarrinhoMenu(props) {

    function render() {

        if (!props.produtos && props.produtos.length === 0) {
            <NavDropdown.Item href="#" data-testid="items">
                <FontAwesomeIcon icon={faSadTear}>
                    &npsp;
                    Carrinho vazil...
                </FontAwesomeIcon>
            </NavDropdown.Item>
        }

        const items = props.produtos.map((produto) =>  
            <NavDropdown.Item href="#" key={produto.nome} data-testid={produto.nome}>
                {produto.nome} - {produto.quantidade} x {produto.preco}
            </NavDropdown.Item>
        );

        return items;
    }

    return render();

}

ItensCarrinhoMenu.prototypeS = {
    produtos: PropTypes.array.isRequired
}

export default ItensCarrinhoMenu;