import React from "react";
import placeholder from "../../images/placeholder.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ListarProdutos() {
    const produtos = [
        { nome: "Curso de JavaScript Básico", preco: 'R$ 99.90' },
        { nome: "Curso de React Avançado", preco: 'R$ 149.90' },
        { nome: "Curso de Node.js Completo", preco: 'R$ 129.90' },
        { nome: "Curso de Python para Iniciantes", preco: 'R$ 89.90' },
        { nome: "Curso de Desenvolvimento Mobile com React Native", preco: 'R$ 199.90' },
        { nome: "Curso de Design Responsivo com CSS", preco: 'R$ 79.90' },
        { nome: "Curso de Inteligência Artificial com Python", preco: 'R$ 249.90' }
    ];

    function render() {

        let key = 1;

        const cards =produtos.map(produto =>
            <Card
                key={key}
                data-testid={'card' + key++}
                style={{ width: '18rem', margin: '10px', float: 'left' }}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body className="text-center">
                    <Card.Title style={{ height: '40px' }}>
                        {produto.nome}
                    </Card.Title>
                    <Card.Text>
                        Descrição do produto aqui...
                    </Card.Text>
                    <Button
                        variant="success"
                        style={{ width: '100%' }}
                        onClick={() => false }>
                        Comprar {produto.preco}
                    </Button>
                </Card.Body>
                
            </Card>
        );

        return cards;
    }
      
    return render();
}

export default ListarProdutos;