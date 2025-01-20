import React from "react";
import { render, screen } from "@testing-library/react";
import ListarEstados from "./listar-estados";

describe('Teste do componente de listagem de estados.', () => {

    it('deve gerar uma listagem de estados', () => {
        render(<ListarEstados />);

        expect(screen.getByTestId('AM')).toHaveTextContent('Amazonas');
        expect(screen.getByTestId('SP')).toHaveTextContent('São Paulo');
    });

});