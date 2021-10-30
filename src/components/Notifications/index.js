import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../assets/themes/colors'

const Notifications = ({title, date, text}) => {
    return (
        <View style={styles.container}>
            <View style = {styles.row}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Text style = {styles.text}>{text}</Text>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        shadowColor: '#777',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 10,
        marginHorizontal: 1,
        marginVertical: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    text: {
        color: '#777'
    },
    date: {
        fontSize: 12
    }
})
