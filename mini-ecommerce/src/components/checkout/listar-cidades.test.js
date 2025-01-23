import React from "react";
import { render, screen } from "@testing-library/react";
import axiosMock from "axios";
import ListarCidades from "./listar-cidades";

jest.mock("axios"); // Mock do axios

describe("Teste do componente de listar cidades", () => {
  it("Deve gerar uma listagem de cidades", async () => {
    // Simula o retorno da API
    axiosMock.get.mockResolvedValueOnce({ data: ["São Paulo", "São Pedro"] });

    render(<ListarCidades estados="SP" />);

    expect(await screen.findByTestId("São Paulo")).toHaveTextContent("São Paulo");
    expect(await screen.findByTestId("São Pedro")).toHaveTextContent("São Pedro");
  });
});
