import React, { useState } from "react";
import { Form, Row, Col, Button, Container, Modal } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";
import "react-datepicker/dist/react-datepicker.css";
import ListarEstados from "./listar-estados";
import ListarCidades from "./listar-cidades";
import PropTypes from "prop-types";
import { Formik} from "formik";

registerLocale('pt', pt);

function Checkout(props) {

    const [dataNascimento, setDataNascimento] = useState(null);
    const [formEnviado, setFormEnviado] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showErroModal, setErroShowModal] = useState(false);

    function visivel() {
        return props.visivel ? null : 'hidden';
    }

    function finalizarCompra(value) {

    }

    function handleDataNacimento(data) {
        setDataNascimento(data);
    }

    function datePickerCss() {
        if (!formEnviado) {
            return "form-control";
        }

        if (dataNascimento) {
            return "form-control is-valid";
        } else {
            return "form-control is-invalid";
        }
    }

    return (
        <Container 
            fluid
            style={{margin: '10px', padding: '20px', backgroundColor: '#f2f2f2'}}
            className={visivel()}
        >
            <h3 className="text-center">Finalizar compra</h3>

            <Formik
                onSubmit={(values) => finalizarCompra(values)}     
                initialValues={{
                    email: '',
                    nome: '', 
                    cpf: '',
                    endereco: '',
                    cidade: '',
                    estado: '',
                    cep: '',
                    termosCondicoes: false,
                    emailPromocional: 'S'
                }}>
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors
                }) => (
                    <Form 
                        noValidate 
                        style={{margin: '10px'}}
                        onSubmit={handleSubmit}
                    >
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
                                    className="my-2" 
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={touched.email && !!errors.email}
                                />
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
                                    value={values.nome}
                                    onChange={handleChange}
                                    isValid={touched.nome && !errors.nome}
                                    isInvalid={touched.nome && !!errors.nome}
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
                                    selected={dataNascimento}
                                    onChange={handleDataNacimento}
                                    className={"my-2 " + datePickerCss()}
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
                                    value={values.cpf}
                                    onChange={handleChange}
                                    isValid={touched.cpf && !errors.cpf}
                                    isInvalid={touched.cpf && !!errors.cpf}
                                    className={"my-2"}
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
                                    value={values.endereco}
                                    onChange={handleChange}
                                    isValid={touched.endereco && !errors.endereco}
                                    isInvalid={touched.endereco && !!errors.enderco}

                                />
                                <Form.Control.Feedback type="invalid">
                                    Digite o seu endereço.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="estado">
                            <Form.Label column sm={3}>
                                Estado
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                    as="select"
                                    name="estado"
                                    data-testid="estado"
                                    className="my-2"
                                    value={values.estado}
                                    onChange={handleChange}
                                    isValid={touched.estado && !errors.estado}
                                    isInvalid={touched.estado && !!errors.estado}
                                >
                                <ListarEstados />
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Selecione o seu estado.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="cidade">
                            <Form.Label column sm={3}>
                                Cidade
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                    as="select"
                                    name="cidade"
                                    data-testid="cidade"
                                    className="my-2"
                                    value={values.estado}
                                    isValid={touched.cidade && !errors.cidade}
                                    isInvalid={touched.cidade && !!errors.cidade}
                                >
                                    <option value="">Selecione a cidade</option>
                                    <ListarCidades estado={values.estado} />
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Selecione a sua cidade.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="cep">
                            <Form.Label column sm={3}>
                                CEP
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="text"
                                    placeholder="Digite o seu CEP"
                                    name="cep"
                                    className={"my-2"}
                                    data-testid="txt-cep"
                                    value={values.cep}
                                    onChange={handleChange}
                                    isValid={touched.cep && !errors.cep}
                                    isInvalid={touched.cep && !!errors.cep}
                                    />
                                <Form.Control.Feedback type="invalid">
                                    Digite o seu CEP
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="emailPromocional">
                            <Form.Label column sm={12}>
                                Deseja receber email com promoções?
                            </Form.Label>
                            <Form.Check
                                inline
                                name="emailPromocional"
                                value="S"
                                type="radio"
                                id="promocaoSim"
                                label="Sim"
                                className="col-md-1"
                                style={{marginLeft: '15px'}} 
                                checked={values.emailPromocional === 'S'}  
                                onChange={handleChange}  
                            />
                            <Form.Check
                                inline
                                name="emailPromocional"
                                value="N"
                                type="radio"
                                id="promocaoNao"
                                label="Não"
                                className="col-md-1"
                                style={{marginLeft: '15px'}} 
                                checked={values.emailPromocional === 'N'}
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Form.Group as={Row} controlId="termosConficoes">
                            <Form.Check 
                                name="termosConficoes"
                                label="Concordo com os termos e condições"
                                style={{marginLeft: '15px'}}
                                data-testid="check-termos-conficoes"
                                value={values.termosCondicoes}
                                onChange={handleChange}
                                isValid={touched.termosCondicoes && !errors.termosCondicoes}
                                isInvalid={touched.termosCondicoes && !!errors.termosCondicoes}
                            />
                        </Form.Group>
                        <Form.Group as={Row} controlId="cep">
                            <Form.Label className="text-center" sm={12}>
                                <Button
                                    type="submit"
                                    variant="success"
                                    data-testid="btn-finalizar-compra">
                                        Finalizar compra
                                    </Button>
                            </Form.Label>
                        </Form.Group>
                    </Form>
                )}
            
            </Formik>

            <Modal show={false} data-testid="modal-compra-success">
                <Modal.Header closeButton>
                    <Modal.Title>Compra realizada com sucesso!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Um email de confirmação foi enviado com os detalhes da transação.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success">
                        Continuar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={false} data-testid="modal-compra-error">
                <Modal.Header closeButton>
                    <Modal.Title>Erro ao processar pedido.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tente novamente em instantes.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning">
                        Continuar
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    );
}

Checkout.propTypes = {
    visivel: PropTypes.bool.isRequired,
    handleExibirProdutos: PropTypes.func.isRequired,
    total: PropTypes.string.isRequired,
    produtos: PropTypes.object.isRequired,
    handleLimparCarrinho: PropTypes.func.isRequired
}

export default Checkout;