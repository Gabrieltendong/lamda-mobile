import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const PaymentMode = ({source, name, number}) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: source}}
                style={styles.image}

            />
            <View>
                <Text style={styles.texte}>{name}</Text>
                <Text style={styles.texte}>{number}</Text>
            </View>
        </View>
    )
}

export default PaymentMode

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50,
        padding: 5,
        marginRight: 20
    },

    image: {
        width: 52,
        height: 52,
        borderRadius: 50,
        marginRight: 10
    },

    texte: {
        fontSize: 12
    }
})
