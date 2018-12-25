//Import Libraries for component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component 
const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums</Text>
        </View>
    );
};
const styles = {
    viewStyle: {
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: '#F8F8F8',
        display: 'flex',
        justifyContents: 'flex-end', //vertical align 
        alignItems: 'center', //horizontal align 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 40
    }
};

//Make component avaiable 
export default Header;

