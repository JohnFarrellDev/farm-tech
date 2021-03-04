import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe("App.tsx", () => {
  it("should render", () => {
    const component = render(<App />);
    expect(component).toBeTruthy();
  })
  
  it("should update price on corn input changing", () => {
    const component = render(<App />);
    let calculatedCost = component.getByTestId("total-cost");
    expect(calculatedCost.textContent?.includes("£0.00")).toBeTruthy();

    const inputElement = component.getByPlaceholderText("Corn");
    fireEvent.change(inputElement, { target: { value: '10' }})
    calculatedCost = component.getByTestId("total-cost");
    expect(calculatedCost.textContent?.includes("£5.00")).toBeTruthy();
  })
  
  it("should update price on geese input changing", () => {
    const component = render(<App />);
    let calculatedCost = component.getByTestId("total-cost");
    expect(calculatedCost.textContent?.includes("£0.00")).toBeTruthy();

    const inputElement = component.getByPlaceholderText("Geese");
    fireEvent.change(inputElement, { target: { value: '10' }})
    calculatedCost = component.getByTestId("total-cost");
    expect(calculatedCost.textContent?.includes("£5.00")).toBeTruthy();
  })
  
  it("should update price on fox input changing", () => {
    const component = render(<App />);
    let calculatedCost = component.getByTestId("total-cost");
    expect(calculatedCost.textContent?.includes("£0.00")).toBeTruthy();
  
    const inputElement = component.getByPlaceholderText("Foxes");
    fireEvent.change(inputElement, { target: { value: '10' }})
    calculatedCost = component.getByTestId("total-cost");
    expect(calculatedCost.textContent?.includes("£5.00")).toBeTruthy();
  })  
  
  // it("should warn for a bad input combination", () => {
  //   const component = render(<App />);
  //   let calculatedCost = component.getByTestId("total-cost");
  //   expect(calculatedCost.textContent?.includes("£0.00")).toBeTruthy();
  
  //   const foxElement = component.getByPlaceholderText("Foxes");
  //   fireEvent.change(foxElement, { target: { value: '2' }});
  
  //   const gooseElement = component.getByPlaceholderText("Geese");
  //   fireEvent.change(gooseElement, { target: { value: '2' }});
  
  //   const cornElement = component.getByPlaceholderText("Corn");
  //   fireEvent.change(cornElement, { target: { value: '2' }});

  //   let warning = component.getByDisplayValue("eat");

  //   expect(warning).toBeDefined();

  // })  

})
