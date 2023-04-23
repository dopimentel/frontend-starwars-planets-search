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
  
  // it("", async () => {
  //   render(<App />);
  //   const nameSeach = screen.getByRole("textbox", {
  //     name: /filtrar por nome:/i,
  //   });
  //   userEvent.type(nameSeach, /tatooine/i);
  //   await waitFor( async () => {
  //     const planets = await screen.findAllByRole('cell');
  //   expect(planets.length).toBe(1);
  //   })

  // });

  it("test if Alderaan is not showed when Tatooine is typed", async () => {
    const nameSeach = screen.getByRole("textbox", {
      name: /filtrar por nome:/i,
    });
    userEvent.type(nameSeach, 'Tatooine');
   
    const planet = await screen.findByText(/Tatooine/i);
    expect(planet).toBeInTheDocument();
    // const otherPlanet = screen.queryByText(/alderaan/i);
    // expect(otherPlanet).toBeNull();
    // const planets = await screen.findAllByRole("cell");
    // expect(planets.length).toBe();
 
  });

  it("test if Alderaan is not showed when Tatooine is typed", async () => {
    const column = screen.getByRole("combobox", { name: /coluna/i });
    // userEvent.type(nameSeach, "Tatooine");
    // waitFor(async () => {
    //   const planet = await screen.findByText(/Tatooine/i);
    //   expect(planet).toBeInTheDocument();
    //   const otherPlanet = screen.queryByText(/alderaan/i);
    //   expect(otherPlanet).toBeNull();
    // });
  });



  // it("test if Tatooine is showed on the screen ", async () => {
  //   render(<App />)
  //   const nameSeach = screen.getByRole("textbox", {
  //     name: /filtrar por nome:/i,
  //   });
  //   waitFor(async () => {
  //     const planet = await screen.findByText(/Tatooine/i);
  //     expect(planet).toBeInTheDocument();
  //   });
  // });
})
