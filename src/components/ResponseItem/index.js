//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

// create a component
const ResponseItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Text>ResponseItem</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ResponseItem;
