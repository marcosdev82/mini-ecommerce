import { render, screen } from '@testing-library/react';
import Produtos from './produtos';
import '@testing-library/jest-dom';

describe('Teste do componente Produto', () => {
  it('deve renderizar o componente quando visivel', () => {
      render(
          <Produtos visivel={true} adicionarProduto={() => false} />
      );
      const botoes = screen.getAllByText(/comprar/i);
      expect(botoes).toBeTruthy();
  });
});