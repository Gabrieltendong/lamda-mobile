import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';


const Pickers = ({title, style, selectedValue, onValueChange, label, data}) => {


    return (
        <View style={style}>
            <Text style={styles.title}>{title}</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
            >
                {
                    data.map((item) => <Picker.Item label={item.label} value = {item.value} />)
                }
            </Picker>

        </View>
    )
}

export default Pickers

const styles = StyleSheet.create({
    title: {
        fontSize: 12
    }
})
