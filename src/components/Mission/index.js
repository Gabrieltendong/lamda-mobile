import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../assets/themes/colors'

const Mission = ({title, description}) => {
    return (
        <View>
            <Text style={[styles.texte, {color: colors.tertiary1}]}>{title}</Text>
            <Text style={[styles.texte, {color: colors.grey}]}>{description}</Text>
        </View>
    )
}

export default Mission

const styles = StyleSheet.create({
    texte: {
        textAlign: 'center',
        marginBottom: 10
    }
})
