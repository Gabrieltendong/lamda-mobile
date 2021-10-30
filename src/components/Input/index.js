import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import colors from '../../assets/themes/colors'

const Input = ({placeholder, style, keyboardType, onChangeText}) => {
    return (
        <View style={[styles.container, style]}>
            <TextInput 
                placeholder={placeholder}
                keyboardType =  {keyboardType}
                onChangeText = {onChangeText}
                placeholderTextColor = "#000"
                style = {{color: '#000'}}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.input,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginTop: 30,
        height: 50
    }
})
