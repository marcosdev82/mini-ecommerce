import React from "react";
import { render, screen } from "@testing-library/react";
import ItensCarrinhoMenu from "./items-carrinho-menu";

describe('Teste de componente de items do carrinho do menu', () => {

    it('Deve renderizar o carrinho vazil', () => {
        render(<ItensCarrinhoMenu produtos={[]} />);
        expect(screen.getByTestId('items')).toHaveTextContent('Carrinho vazil...');
    });

    it('Deve renderizar o carrinho com um produto', () => {
        const produtos = [ { nome: 'Curso de JavaScript Básico', preco: 'R$ 99.90', quantidade: 1 }];
        render(<ItensCarrinhoMenu produtos={produtos} />);
        expect(screen.getByTestId(produtos[0].nome)).toHaveTextContent('Curso de JavaScript Básico - 1 x R$ 99.90');
    });

    it('Deve renderizar multiplos produtos no carrinho', () => {
        const produtos = [ 
            { nome: 'Curso de JavaScript Básico', preco: 'R$ 99.90', quantidade: 1 },
            { nome: 'Curso de React Avançado', preco: 'R$ 149.90', quantidade: 2 }
        ];
        render(<ItensCarrinhoMenu produtos={produtos} />);
        expect(screen.getByTestId(produtos[0].nome)).toHaveTextContent('Curso de JavaScript Básico - 1 x R$ 99.90');
        expect(screen.getByTestId(produtos[1].nome)).toHaveTextContent('Curso de React Avançado - 2 x R$ 149.90');
    });

});