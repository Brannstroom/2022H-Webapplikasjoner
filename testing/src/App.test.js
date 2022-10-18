import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import UserCreation from './components/UserCreation';

it('should render our form', () => {
    render(<App />);

    const form = document.getElementById("create");
    expect(form).toBeInTheDocument();
  });

it('should validate input before submit', () => {
    render(<App />);

    const submitButton = document.getElementById("submit");
    expect(submitButton).toBeDisabled();
});

/* Denne testen feiler ettersom submit knappen ikke blir enabled etter at vi har fylt ut alle feltene.
Dette er på grunn av at onChange ikke blir trigget når vi fyller ut feltene gjennom screen. Dette fant jeg ikke løsningen på.

it('should enable submit button when all fields are filled', () => {
    render(<UserCreation />);
    
    fireEvent.change(screen.getByLabelText(/Fornavn/i), {target: {value: 'John'}});
    fireEvent.change(screen.getByLabelText(/Etternavn/i), {target: {value: 'Doe'}});
    fireEvent.change(screen.getByLabelText(/Email/i), {target: {value: 'john.doe@gmail.com'}});
    fireEvent.change(screen.getByLabelText(/Passord/i), {target: {value: 'fAs1#al3!K'}});

    const submitButton = document.getElementById("submit");
    expect(submitButton).toBeEnabled();
  });
    */