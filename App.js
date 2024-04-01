import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CountryList from "./CountryList";
import CountryDetails from "./CountryDetails";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CountryList"
          component={CountryList}
          options={{ title: "Countries" }}
        />
        <Stack.Screen
          name="CountryDetails"
          component={CountryDetails}
          options={{ title: "Country Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
