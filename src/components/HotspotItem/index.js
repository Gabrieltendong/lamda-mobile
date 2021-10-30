import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../assets/themes/colors'

const HotspotItem = ({onPress, item}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View>
                <Text style={styles.title}>{item.designation}</Text>
                <Text style={styles.subTitle}>DOUALA</Text>
                <Text style={styles.subTitle}>PK 17, RADIO TELECOM</Text>
            </View>
            <View style={styles.container}>
                <View style={{marginRight: 10}}>
                    <Ionicons name="wifi-outline" size={30} color={colors.green} />
                    <Text style={styles.subTitle}>{parseInt(item.distance)} Km</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={20} color={colors.grey} />
            </View>
        </TouchableOpacity>
    )
}

export default HotspotItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },

    title: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 13,
        color: colors.grey
    },
})
