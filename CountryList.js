import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const CountryList = ({ navigation }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleCountryPress = (country) => {
    navigation.navigate("CountryDetails", { country });
  };

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCountryPress(item)}>
      <View style={{ padding: 10 }}>
        <Text>{item.name.common}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={countries}
      renderItem={renderCountryItem}
      keyExtractor={(item) => item.name.common}
    />
  );
};

export default CountryList;
