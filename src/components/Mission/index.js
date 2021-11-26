import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import colors from '../../assets/themes/colors'
import QuestionItem from '../Questionitem'

const Mission = ({item}) => {
    return (
        <View>
            <View style = {styles.header_sondage}>
                <Text>{item.titre}</Text>
            </View>
            <FlatList
                data = {item?.questions}
                renderItem  = {({item, index}) => <QuestionItem item = {item} selectedResponse = {selectedResponse}  />}
            />
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
    }
})
