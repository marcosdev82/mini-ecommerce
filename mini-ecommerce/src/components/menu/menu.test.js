import { render, screen } from '@testing-library/react';
import Menu from './menu';
import '@testing-library/jest-dom';

describe('Teste do componente Menu', () => {
  it('deve renderizar o componente sem erros', () => {
    render(<Menu />);
    const tituloElement = screen.getByText(/menu/i); // Substitua pelo texto esperado no componente
    expect(tituloElement).toBeInTheDocument();
  });
});