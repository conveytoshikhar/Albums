import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image } = album;
    const { thumbNailStyle, headerContentStyle } = styles; //destructuring
    return (
        <Card>
            <CardSection>
                <View>
                    <Image style={thumbNailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>  
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
       flexDirection: 'column',
       justifyContent: 'space-around' 
    },
    thumbNailStyle: {
        height: 50,
        width: 50,
        marginRight: 10
    }
};

export default AlbumDetail;

