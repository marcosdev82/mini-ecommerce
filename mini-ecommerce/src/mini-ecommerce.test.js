import { render, screen } from '@testing-library/react';
import MiniEcommerce from './mini-ecommerce';
import '@testing-library/jest-dom';

describe('Teste do componente Produtos', () => {
  it('deve renderizar o componente sem erros', () => {
    render(<MiniEcommerce />);
    const tituloElement = screen.getByText('Mini Ecommerce'); // Substitua pelo texto esperado no componente
    expect(tituloElement).toBeInTheDocument();
  });
});