;//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

// create a component
const DiscussionItem = ({item, onPress}) => {
    return (
        <TouchableOpacity onPress = {onPress} style={styles.container}>
            <View style = {styles.content_avatar}>
                <Ionicons 
                    name = "person"
                    size = {30}
                    color = "#999"
                />
            </View>
            <View style = {styles.content_text}>
                <Text numberOfLines = {1} style = {styles.title}>{item.user.first_name} {item.user.last_name}</Text>
                <Text style = {styles.subTile}>Salut! je suis sur lamda.</Text>
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // height: 60,
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center'
    },
    content_avatar: {
        height: 60,
        width: 60,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#eee",
        borderRadius: 30
    },
    title: {
        fontSize: 18
    },
    subTile: {
        color: '#777'
    },
    content_text: {
        flex: 1,
        borderBottomColor: '#f3f3f3',
        borderBottomWidth: 1,
        paddingVertical: 10
    }
});

//make this component available to the app
export default DiscussionItem;
