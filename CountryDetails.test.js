import React from "react";
import { render } from "@testing-library/react-native";
import CountryDetails from "./CountryDetails";

const mockCountry = {
  name: {
    common: "Test Country",
  },
  capital: "Test Capital",
  population: 1000000,
  region: "Test Region",
};

describe("CountryDetails component", () => {
  test("renders correct country details", () => {
    const { getByText } = render(
      <CountryDetails route={{ params: { country: mockCountry } }} />
    );

    expect(getByText("Name: Test Country")).toBeTruthy();
    expect(getByText("Capital: Test Capital")).toBeTruthy();
    expect(getByText("Population: 1000000")).toBeTruthy();
    expect(getByText("Region: Test Region")).toBeTruthy();
  });
});
