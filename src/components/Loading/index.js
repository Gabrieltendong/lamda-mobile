//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal'

// create a component
const Loading = ({isVisible}) => {
    return (
        <Modal 
            style={styles.container}
            isVisible = {isVisible}
            animationIn = "fadeIn"
            animationOut = "fadeOut"
        >
            <View style = {styles.content}>
                <ActivityIndicator size = "large" color = "#000" />
                <Text>Patienter ...</Text>
            </View>
        </Modal>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    content: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 150
    }
});

//make this component available to the app
export default Loading;
