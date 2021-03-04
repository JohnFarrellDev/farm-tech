import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe("App.tsx", () => {
  it("should render", () => {
    const component = render(<App />);
    expect(component).toBeTruthy();
  })
  
  it("should update price on input changing", () => {
    const component = render(<App />);
    let calculatedCost = component.getByTestId("total-cost");
    expect(calculatedCost.textContent?.includes("£0.00")).toBeTruthy();

    const inputElement = component.getByPlaceholderText("Corn");
    fireEvent.change(inputElement, { target: { value: '10' }})
    calculatedCost = component.getByTestId("total-cost");
    expect(calculatedCost.textContent?.includes("£5.00")).toBeTruthy();
  })

})

