//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'
import Ionicons from 'react-native-vector-icons/Ionicons';

// create a component
const ShareFeed = ({isVisible, toggle, handleShare}) => {
    return (
        <Modal 
            isVisible = {isVisible}
            style={styles.container}
            onBackButtonPress = {toggle}
            onBackdropPress = {toggle}
        >
            <View style = {styles.content}>
                <TouchableOpacity 
                    style = {styles.row_wraper}
                    onPress = {() => handleShare("whatsapp")}
                >
                    <Ionicons 
                        size = {20}
                        name = "logo-whatsapp"
                    />
                    <Text style = {styles.text_item_wraper}>Partager sur Whatsapp</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.row_wraper}
                    onPress = {() => handleShare("facebook")}
                >
                    <Ionicons 
                        size = {20}
                        name = "logo-facebook"
                    />
                    <Text style = {styles.text_item_wraper}>Partager sur Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.row_wraper}
                    onPress = {() => handleShare("twitter")}
                >
                    <Ionicons 
                        size = {20}
                        name = "logo-twitter"
                    />
                    <Text style = {styles.text_item_wraper}>Partager sur Twitter</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 0
    },
    content: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#fff',
        padding: 20
    },
    row_wraper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    text_item_wraper: {
        marginLeft: 20
    }
});

//make this component available to the app
export default ShareFeed;
