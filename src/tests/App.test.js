import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import AppProvider from '../context/AppProvider';
import fetch from "../../cypress/mocks/fetch.js";


describe('App forms filters testes', () => {
  beforeEach(async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockImplementation(fetch);
    await act(() => {  //async
      render(
        <AppProvider>
          <App />
        </AppProvider>
      );
    });
  });

  it("Title test", () => {
    const message = screen.getByText(/Hello, App!/i);
    expect(message).toBeInTheDocument();
  });

  it("test if Alderaan is not showed when Tatooine is typed", () => {
    const nameInput = screen.getByRole("textbox", {
      name: /filtrar por nome:/i,
    });
    const planetTatooine = screen.getByText(/Tatooine/i);
    expect(planetTatooine).toBeInTheDocument();
    const planetAlderaan = screen.queryByText(/alderaan/i);
    expect(planetAlderaan).toBeInTheDocument();

    userEvent.type(nameInput, 'Tatooine');
    expect(planetAlderaan).not.toBeInTheDocument();
 
  });

  it("test if the delete filter buttons are showed when the filters are used", async () => {

    const filterBtn = screen.getByRole("button", { name: /filtrar/i });
    userEvent.click(filterBtn);
    userEvent.click(filterBtn);
    const deleteBtns = screen.getAllByRole("button", { name: /x/i });
    expect(deleteBtns.length).toBe(2);
  })

  it("When it is filtered by diameter bigger then 10000 Bespin e showed. When operation is less then 10000 Bespin is not showed ", async () => {
    const column = screen.getByRole("combobox", { name: /coluna/i });
    userEvent.selectOptions(column, "diameter");
    const numberInput = screen.getByRole("spinbutton", { name: /número/i });
    userEvent.type(numberInput, '10000')
    const planeBespin = screen.getByRole("cell", { name: /bespin/i });
    expect(planeBespin).toBeInTheDocument();
    
  });
})
