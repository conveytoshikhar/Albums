//Import Libraries for component
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

//Make a component 
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <View style={viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
        </SafeAreaView>
    );
};
const styles = {
    viewStyle: {
        height: 60,
        backgroundColor: '#F8F8F8',
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

