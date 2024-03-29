import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Table from "../components/Table";
import AppProvider from "../context/AppProvider";
import { act } from "react-dom/test-utils";

import mockFetch from "../../cypress/mocks/fetch.js";

describe("Table component tests", () => {
  beforeEach(async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockImplementation(mockFetch);
    await act(() => {
      //async
      render(
        <AppProvider>
          <Table />
        </AppProvider>
      );
    });
  });

  it("test if the API is called", async () => {
    expect(global.fetch).toBeCalledTimes(1);
  });

  it("test if the API's endpoint is 'https://swapi.dev/api/planets'", async () => {
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith("https://swapi.dev/api/planets");
  });

  it("test if the Table`s lines` number is equal to the planets` quantity from API response plus a line of the header", async () => {
    const allPlanets = screen.getAllByRole("row");
    await waitFor(async () => {
      const results = await mockFetch()
        .then((response) => response.json())
        .then((data) => data.results);
      expect(allPlanets).toHaveLength(results.length + 1);
    });
  });

  it("test if Tatooine is showed on the screen ", async () => {
    const planet = await screen.findByText(/Tatooine/i);
    expect(planet).toBeInTheDocument();
  });
});
