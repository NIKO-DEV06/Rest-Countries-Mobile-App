import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import tw from "twrnc";

const CountryDetails = ({ route }) => {
  const { country } = route.params;

  return (
    <ScrollView contentContainerStyle={tw`mt-10`}>
      <View style={tw`items-center`}>
        <Image
          source={{ uri: country.flags.png }}
          style={tw`w-full h-full rounded`}
        />
      </View>
      <View style={tw`items-center mt-4`}>
        <View>
          <View style={tw`flex flex-col gap-3`}>
            <Text style={tw`text-xl font-bold mt-5 pt-3 pb-3 ml-6`}>
              {country.name.common}
            </Text>
            <Text style={tw`ml-6`}>
              <Text style={tw`font-semibold`}>Official Name:</Text>{" "}
              {country.name.official}
            </Text>
            <Text style={tw`ml-6`}>
              <Text style={tw`font-semibold`}>Population:</Text>{" "}
              {country.population.toLocaleString()}
            </Text>
            <Text style={tw`ml-6`}>
              <Text style={tw`font-semibold`}>Region:</Text> {country.region}
            </Text>
            <Text style={tw`ml-6`}>
              <Text style={tw`font-semibold`}>Sub Region:</Text>{" "}
              {country.subregion}
            </Text>
            <Text style={tw`ml-6`}>
              <Text style={tw`font-semibold`}>Capital:</Text> {country.capital}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CountryDetails;
