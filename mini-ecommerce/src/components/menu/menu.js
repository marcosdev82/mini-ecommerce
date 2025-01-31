import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItensCarrinhoMenu from './items-carrinho-menu';
import {
    faShoppingBasket, faCashRegister, faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function Menu(props) {
 
    function calcularTotal() {
        if (props.produtos && props.produtos.length === 0 ) {
            return '0,00';
        }
    
        let total = 0;
        props.produtos.forEach(produto => {
            let preco = produto.preco.replace(',', '.').replace('R$ ', '');
            total += parseFloat(preco) * produto.quantidade;
        });
    
        return total.toFixed(2).toString().replace('.', ',');
    }

   
    return (
        <Navbar bg="dark" variant="dark" style={{ padding: '5px' }}>
            <Navbar.Brand href="#">Mini Ecommerce</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <NavDropdown
                        title={
                            <div style={{ display: "inline-block" }}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                &nbsp;
                                Carrinho
                            </div>
                        }
                        drop="down"
                        align="end"
                        >
                        <NavDropdown.Item href="#"
                            onClick={props.handleExibirProdutos}
                        >
                            <FontAwesomeIcon icon={faShoppingBasket} />
                            &nbsp;
                            <strong>Produtos</strong>
                        </NavDropdown.Item>

                        <NavDropdown.Divider />
                            <ItensCarrinhoMenu produtos={props.produtos} />
                        <NavDropdown.Divider />
                        
                        <NavDropdown.Item href="#">
                            &nbsp;
                            Total: R$ {calcularTotal()}
                        </NavDropdown.Item>
                        <span className={props.produtos && props.produtos.length === 0 ? 'hidden' : null}>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                href="#"
                                style={{ color: 'green' }}
                                onClick={() => props.handleExibirCheckout(calcularTotal())}
                            >
                                <FontAwesomeIcon icon={faCashRegister} />
                                &nbsp;
                                Finalizar compra
                            </NavDropdown.Item>
                        </span>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

Menu.propTypes = {
    produtos: PropTypes.array.isRequired,
    handleExibirProdutos: PropTypes.func.isRequired,
    handleExibirCheckout: PropTypes.func.isRequired
};

export default Menu;