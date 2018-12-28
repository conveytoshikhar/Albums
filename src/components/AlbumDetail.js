import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnailStyle, 
            headerContentStyle, 
            thumbnailContainerStyle, 
            headerTextStyle, 
            albumImageStyle } = styles; //destructuring

    function onPressHandler() {
        Linking.openURL(url);
    }
            
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>  
            </CardSection>

            <CardSection>
                <Image style={albumImageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button buttonText={'Buy Now'} onPress={onPressHandler} /> 
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
       flexDirection: 'column',
       justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;

