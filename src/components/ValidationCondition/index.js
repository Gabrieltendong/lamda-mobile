import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const ValidationCondition = ({title, value, onValueChange, style}) => {

    

    return(
        <View style={[styles.container, style]}>

            <CheckBox
                value={value}
                onValueChange={onValueChange}
            />

            <Text style={styles.titre}>{title}</Text>
        </View>
    )
}

export default ValidationCondition

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10
    },

    titre: {
        width: '85%',
        fontSize: 13
    }
})