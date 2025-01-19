import React from "react";
import { Form, Row, Col, Button, Container, Modal } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";
import "react-datepicker/dist/react-datepicker.css";

registerLocale('pt', pt);

function Checkout() {
    return (
        <Container 
            fluid
            style={{margin: '10px', padding: '20px', backgroundColor: '#f2f2f2'}}
        >
            <h3 className="text-center">Finalizar compra</h3>

            <Form noValidate style={{margin: '10px'}}>
                <Form.Group as={Row} controlId="email">
                    <Form.Label column sm={3}>
                        E-mail
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="email"
                            placeholder="Digite o seu email"
                            name="email"
                            data-testid="txt-email"
                            className="my-2" />
                        <Form.Control.Feedback type="invalid">
                            Digite um email válido
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="Nome completo">
                    <Form.Label column sm={3}>
                        Nome completo
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            placeholder="Digite o seu nome completo"
                            name="nomeCompleto"
                            data-testid="txt-nome-completo"
                            className="my-2"
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite o seu nome completo (mínimo 5 Caracteres).
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="dataNascimento">
                    <Form.Label column sm={3}>
                        Data de nascimento
                    </Form.Label>
                    <Col sm={9}>
                        <DatePicker
                            locale="pt"
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            dateFormat="dd/mm/yyyy" 
                            placeholderText="Selecione a data"
                            withPortal 
                            className="my-2"
                            />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="cpf">
                    <Form.Label column sm={3}>
                        CPF
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            placeholder="Digite o seu CPF"
                            name="cpf"
                            data-testid="txt-cpf"
                            />
                        <Form.Control.Feedback type="invalid">
                            Digite um CPF válido
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="endereco">
                    <Form.Label column sm={3}>
                        Endereço
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                            type="text"
                            placeholder="Digite o seu endereço completo"
                            name="endereco"
                            data-testid="txt-endereco"
                            className="my-2"
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite o seu endereço.
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
            </Form>

        </Container>
    );
}

export default Checkout;
