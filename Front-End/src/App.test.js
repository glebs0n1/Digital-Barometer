import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders temperature correctly', () => {
    render( < App / > );


    const temperatureText = screen.getByText(/Temperature:/i);
    expect(temperatureText).toBeInTheDocument();
});