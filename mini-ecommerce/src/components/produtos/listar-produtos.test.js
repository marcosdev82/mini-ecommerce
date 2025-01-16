import { render, screen } from '@testing-library/react';
import ListarProdutos from './listar-produtos';
import '@testing-library/jest-dom';

describe('Teste do componente de listagem de produtos', () => {
    it('deve exibir os nomes dos produtos nos cards', () => {
        render(
            <ListarProdutos
                adicionarProduto={jest.fn()}
                exibirMensagem={jest.fn()}
            />
        );

        // Verifica o conteúdo dos cards
        expect(screen.getByTestId('card1')).toHaveTextContent('Curso de JavaScript Básico');
        expect(screen.getByTestId('card2')).toHaveTextContent('Curso de React Avançado');
    });

    it('deve exibir descrição dos produtos nos cards', () => {
        render(
            <ListarProdutos 
                adicionarProduto={jest.fn()}
                exibirMensagem={jest.fn()}
            />
        );

        expect(screen.getByTestId('card1')).toHaveTextContent('Descrição do produto aqui...');
        expect(screen.getByTestId('card3')).toHaveTextContent('Descrição do produto aqui...');
    });

    it('deve exibir os preços dos produtos nos botões de comprar', () => {
        render(
            <ListarProdutos
                adicionarProduto={jest.fn()}
                exibirMensagem={jest.fn()}
            />
        );

        expect(screen.getByTestId('card1')).toHaveTextContent('Comprar (R$ 99.90)');
        expect(screen.getByTestId('card2')).toHaveTextContent('Comprar (R$ 149.90)');
    });
});
