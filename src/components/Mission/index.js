import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../assets/themes/colors'
import QuestionItem from '../Questionitem'

const Mission = ({item, selectedResponse}) => {
    return (
        <View>
            <View style = {styles.header_sondage}>
                <Text>{item?.titre}</Text>
            </View>
            <FlatList
                data = {item?.questions}
                renderItem  = {({item, index}) => <QuestionItem item = {item} selectedResponse = {selectedResponse}  />}
            />
            <TouchableOpacity style = {styles.btn}>
                <Ionicons 
                    name = 'checkmark'
                    color = {colors.white}
                    size = {25}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Mission

const styles = StyleSheet.create({
    header_sondage: {
        height: 80,
        borderRadius: 10,
        backgroundColor: colors.primary1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
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
        right: 20,
        elevation: 5,
        marginBottom: 100
        // zIndex: 20
    }
})
