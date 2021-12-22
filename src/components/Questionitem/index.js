//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { mixins } from '../../styles'

// create a component
const QuestionItem = ({item, selectedResponse, value, responses}) => {
    return (
        <View style={styles.container}>
            <Text style = {styles.title}>{item?.titre}</Text>
            <RadioButton.Group onValueChange={(value) => selectedResponse(value, item)} value={value}>
                {
                    item.reponses.map((item) => {
                        const index = responses.findIndex((data) => data.reponse == item.id);
                        return(
                            <View style = {styles.row}>
                                <RadioButton  
                                    value={item.id}
                                    status={ index != -1 ? 'checked' : 'unchecked' }
                                />
                                <Text style = {styles.title_response}>{item.titre}</Text>
                            </View>
                        )
                    })
                }
            </RadioButton.Group>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 1,
        padding: 10,
        ...mixins.boxShadow('#777')
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title_response: {
        marginLeft: 10,
        color: '#777'
    }
});

//make this component available to the app
export default QuestionItem;
