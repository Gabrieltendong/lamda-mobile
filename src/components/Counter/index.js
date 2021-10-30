import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../assets/themes/colors'

const Counter = ({style, number, txtStyle}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={[styles.counter, txtStyle]}>{number}</Text>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.tertiary1,
        
        borderRadius: 20
    },
    counter: {
        color: colors.white
    }
})
