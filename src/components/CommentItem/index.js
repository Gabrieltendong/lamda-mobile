//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CommentItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Text>{item.commentaire}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#dfe6e9",
      padding: 10,
      marginVertical: 10,
      borderRadius: 25,
      borderBottomRightRadius: 0,
      alignSelf: 'flex-start'
    },
});

//make this component available to the app
export default CommentItem;
