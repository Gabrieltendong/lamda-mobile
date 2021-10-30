import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../assets/themes/colors';

const Btn = ({title, onPress, style, color}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, style]}>
                <Text style={[styles.title, {color}]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Btn

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        
    },
    title: {
        textAlign: 'center',
        fontSize: 15,
    }
})
