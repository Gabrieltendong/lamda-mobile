import React, { useState } from 'react'
import { useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../assets/themes/colors'
import QuestionItem from '../../components/Questionitem'
var _ = require('lodash')

const DetailSondageScreen = ({route}) => {
    const {item} = route.params
    const [responses, setResponses] = useState([])

    const selectedResponse = (value, question) => {
        const index = responses.findIndex((item) => item.question == question.id)
        if(index != -1){
            const newReponsesList = [...responses]
            newReponsesList[index]['reponse'] = value;
            setResponses(newReponsesList)
        }else{
            setResponses(responses => [...responses, {
                question: question.id,
                reponse: value
            }])
        }
        console.log('responses', responses)
    }

    return (
        <View style = {styles.container}>
            <FlatList
                data={item.questions}
                renderItem={({item}) => <QuestionItem responses = {responses} item={item} selectedResponse={selectedResponse} />}
            />
            <TouchableOpacity style = {styles.btn}>
                <Ionicons 
                    name='checkmark'
                    size={25}
                    color = '#fff'
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    btn: {
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary1,
        position: 'absolute',
        bottom: 20,
        right: 10
    }
})


export default DetailSondageScreen
