//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../assets/themes/colors';

// create a component
const StoreItem = ({item}) => {
    
    const openLink = () => {
        Linking.canOpenURL(item.lien_app).then(supported => {
            if (supported) {
              Linking.openURL(item.lien_app);
            } else {
              console.log("Don't know how to open URI: " + item.lien_app);
            }
        });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress = {openLink}>
                <Ionicons 
                    name = "cloud-download"
                    size = {50}
                    color = {colors.primary1}
                />
            </TouchableOpacity>
            <Text>{item.titre}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        borderRadius: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5
    },
});

//make this component available to the app
export default StoreItem;
