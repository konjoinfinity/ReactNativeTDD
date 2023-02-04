import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import {} from "@testing-library/jest-native"
import Counter from "./Counter";


describe("Counter", () => {

        it("renders correctly", () => {
          render(<Counter />);
        });

    it("initial value is 0", () => {
        const { queryByText } = render(<Counter />);
      const initialState = queryByText("Counter: 0");
      expect(initialState).not.toBeNull();

    });

      it("increments by 1 each time increment is pressed", () => {
        const { queryByText, getByTestId } = render(<Counter />);
  
      const increment = getByTestId("incrementButton");
      fireEvent.press(increment);
  
      const oneState = queryByText("Counter: 1");
      expect(oneState).not.toBeNull();
    });
  
    it("decrements by 1 each time decrement is pressed", () => {
        const { queryByText, getByTestId } = render(<Counter />);
  
      const decrement = getByTestId("decrementButton");
      fireEvent.press(decrement);
      console.log(decrement)
  
      const oneState = queryByText("Counter: -1");
      expect(oneState).not.toBeNull();
    });
})