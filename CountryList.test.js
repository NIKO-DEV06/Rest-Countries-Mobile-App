import React from "react";
import { render } from "@testing-library/react-native";
import CountryList from "./CountryList";

describe("CountryList component", () => {
  test("renders without crashing", () => {
    render(<CountryList />);
  });
});
