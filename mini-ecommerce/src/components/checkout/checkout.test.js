import { render, screen } from '@testing-library/react';
import Checkout from './checkout';
import '@testing-library/jest-dom';

describe('Teste do componente Checkout', () => {
  it('deve renderizar o componente sem erros', () => {
    render(<Checkout />);
    const textos = screen.getAllByText('Finalizar compra'); // Substitua pelo texto esperado no componente
    expect(textos[0]).toBeInTheDocument();
  });
});