import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App forms filters testes', () => {
  it("Title test", () => {
    render(<App />);
    const message = screen.getByText(/Hello, App!/i);
    expect(message).toBeInTheDocument();
  });
  
  it("", () => {
    render(<App />);
    const nameSeach = screen.getByRole()
  });

  it("", () => {
    render(<App />);
  });

})
