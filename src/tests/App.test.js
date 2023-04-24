import React from "react";
import {
  getAllByRole,
  queryAllByTestId,
  queryByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import AppProvider from "../context/AppProvider";
import mockFetch from "../../cypress/mocks/fetch.js";

describe("App forms filters testes", () => {
  beforeEach(async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockImplementation(mockFetch);
    await act(() => {
      //async
      render(
        <AppProvider>
          <App />
        </AppProvider>
      );
    });
  });

  it("Title test", () => {
    const message = screen.getByText(/Star Wars Project/i);
    expect(message).toBeInTheDocument();
  });

  it("Test filter by name. It test if Alderaan is not showed when Tatooine is typed", () => {
    const nameInput = screen.getByRole("textbox", {
      name: /filtrar por nome:/i,
    });
    const planetTatooine = screen.getByText(/Tatooine/i);
    expect(planetTatooine).toBeInTheDocument();
    const planetAlderaan = screen.queryByText(/alderaan/i);
    expect(planetAlderaan).toBeInTheDocument();
    const allPlanets = screen.getAllByRole("row");
    expect(allPlanets).toHaveLength(11);
    userEvent.type(nameInput, "Tatooine");
    expect(planetAlderaan).not.toBeInTheDocument();
    const newAllPlanets = screen.getAllByRole("row");
    expect(newAllPlanets).toHaveLength(2);
  });

  it("test if the delete filter buttons are showed when the filters are used and it is removed a filter of the filter list when it is alredy been used", async () => {
    // const column = screen.getByRole("combobox", { name: /coluna/i });
    // userEvent.selectOptions(column, "diameter");
    // const numberInput = screen.getByRole("spinbutton", { name: /número/i });
    // userEvent.type(numberInput, '10000')
    const filterBtn = screen.getByRole("button", { name: /filtrar/i });
    userEvent.click(filterBtn);
    userEvent.click(filterBtn);
    const deleteBtns = screen.getAllByRole("button", { name: /x/i });
    expect(deleteBtns).toHaveLength(2);
  });

  it("test if the delete filter button remove just a button", async () => {
    const column = screen.getByRole("combobox", { name: /coluna/i });
    userEvent.selectOptions(column, "population");
    const operation = screen.getByRole("combobox", { name: /operação/i });
    userEvent.selectOptions(operation, "menor que");
    const numberInput = screen.getByRole("spinbutton", { name: /número/i });
    userEvent.type(numberInput, "2000000");
    const filterBtn = screen.getByRole("button", { name: /filtrar/i });
    userEvent.click(filterBtn);
    userEvent.selectOptions(operation, "igual a");
    userEvent.click(filterBtn);
    userEvent.click(filterBtn);
    const deleteBtns = screen.getAllByRole("button", { name: /x/i });
    expect(deleteBtns).toHaveLength(3);
    userEvent.click(deleteBtns[0]);
    const newDeleteBtns = screen.getAllByRole("button", { name: /x/i });
    expect(newDeleteBtns).toHaveLength(2);
  });

  it("test if the remove all filters button is working", async () => {
    // const column = screen.getByRole("combobox", { name: /coluna/i });
    // userEvent.selectOptions(column, "diameter");
    // const numberInput = screen.getByRole("spinbutton", { name: /número/i });
    // userEvent.type(numberInput, '10000')
    const filterBtn = screen.getByRole("button", { name: /filtrar/i });
    userEvent.click(filterBtn);
    userEvent.click(filterBtn);
    const removefiltersBtn = screen.getByRole("button", {
      name: /remover filtros/i,
    });
    userEvent.click(removefiltersBtn);
    const deleteBtns = screen.queryAllByRole("button", { name: /x/i });
    expect(deleteBtns).toHaveLength(0);
  });

  it("When it is filtered by diameter bigger then 10000 Bespin e showed. When operation is less then 10000 Bespin is not showed ", async () => {
    const column = screen.getByRole("combobox", { name: /coluna/i });
    userEvent.selectOptions(column, "diameter");
    const numberInput = screen.getByRole("spinbutton", { name: /número/i });
    userEvent.type(numberInput, "10000");
    const planeBespin = screen.getByRole("cell", { name: /bespin/i });
    expect(planeBespin).toBeInTheDocument();

    // userEvent.type(nameSeach, "Tatooine");
    // waitFor(async () => {
    //   const planet = await screen.findByText(/Tatooine/i);
    //   expect(planet).toBeInTheDocument();
    //   const otherPlanet = screen.queryByText(/alderaan/i);
    //   expect(otherPlanet).toBeNull();
    // });
  });
});
