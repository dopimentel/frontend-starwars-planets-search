import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Table from "../components/Table";
import AppProvider from "../context/AppProvider";

import fetch from "../../cypress/mocks/fetch.js";
import { act } from "react-dom/test-utils";


describe('Table component tests', () => {
  beforeEach(async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockImplementation(fetch);
    await act(() => {  //async
      render(
        <AppProvider>
          <Table />
        </AppProvider>
      );
    })
  })
  
  it("test if the API is called", async () => {
    expect(global.fetch).toBeCalledTimes(1);
  });

  it("test if the API's endpoint is 'https://swapi.dev/api/planets'", async () => {
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith("https://swapi.dev/api/planets");
  });

  it("test if Tatooine is showed on the screen ", async () => {
    waitFor(async () => {
      const planet = await screen.findByText(/Tatooine/i);
      expect(planet).toBeInTheDocument();
    });
  });


})

