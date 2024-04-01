import React from "react";
import { View, Text } from "react-native";

const CountryDetails = ({ route }) => {
  const { country } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Name: {country.name.common}</Text>
      <Text>Capital: {country.capital}</Text>
      <Text>Population: {country.population}</Text>
      <Text>Region: {country.region}</Text>
    </View>
  );
};

export default CountryDetails;
