import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";

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
      <View style={tw`flex-row items-center p-4`}>
        <Image source={{ uri: item.flags.png }} style={tw`w-24 h-24 rounded`} />
        <View style={tw`ml-4`}>
          <Text style={tw`font-bold text-lg`}>{item.name.common}</Text>
          <View style={tw`mt-2`}>
            <Text style={tw`font-semibold`}>Population: </Text>
            <Text>{item.population.toLocaleString()}</Text>
          </View>
          <View style={tw`mt-1`}>
            <Text style={tw`font-semibold`}>Region: </Text>
            <Text>{item.region}</Text>
          </View>
          <View style={tw`mt-1`}>
            <Text style={tw`font-semibold`}>Capital: </Text>
            <Text>{item.capital}</Text>
          </View>
        </View>
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
