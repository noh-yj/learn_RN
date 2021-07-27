import React from 'react';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import DetailPage from './pages/DetailPage';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style='light' />
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;
