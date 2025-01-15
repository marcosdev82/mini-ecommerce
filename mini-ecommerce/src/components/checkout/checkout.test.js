import { render, screen } from '@testing-library/react';
import Checkout from './checkout';
import '@testing-library/jest-dom';

describe('Teste do componente Checkout', () => {
  it('deve renderizar o componente sem erros', () => {
    render(<Checkout />);
    const tituloElement = screen.getByText(/checkout/i); // Substitua pelo texto esperado no componente
    expect(tituloElement).toBeInTheDocument();
  });
});