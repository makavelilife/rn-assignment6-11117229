import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Stacknavigator from './stacknavigation';

export default function App() {
  return (
    <NavigationContainer>
      <Stacknavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
 