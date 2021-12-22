import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../assets/themes/colors'
import { mixins } from '../../styles'
import QuestionItem from '../Questionitem'

const SondageItem = ({item}) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style = {styles.container} onPress={() => navigation.navigate("DetailSondage", {item})}>
            <View style = {styles.header_sondage}>
                <Text>{item?.titre}</Text>
            </View>
            <Ionicons
                name='chevron-forward-outline'
                size={25}
                color={colors.primary1}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        ...mixins.boxShadow('#777')
    },
    header_sondage: {
        flex: 1,
    },
})

export default SondageItem
