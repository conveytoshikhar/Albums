import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
//create a component
const App = () => (
    <Header />
);

//render the component 
AppRegistry.registerComponent('albums', () => App);
