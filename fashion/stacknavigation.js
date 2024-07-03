import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Homescreen from "./components/home";
import Cartscreen from "./components/cart";
import { createStackNavigator } from "@react-navigation/stack";

const Stacknavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={Homescreen} />
            <Stack.Screen name="Cart" component={Cartscreen}/>      
        </Stack.Navigator>
    );
};

export default Stacknavigator;