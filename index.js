import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create a component
const App = () => {
    return (
        <View style={{ flex: 1, marginBottom: 10 }}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
        
    );
};

//render the component 
AppRegistry.registerComponent('albums', () => App);
