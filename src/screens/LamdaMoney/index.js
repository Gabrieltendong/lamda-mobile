import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import colors from '../../assets/themes/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Counter from '../../components/Counter';
import PaymentMode from '../../components/PaymentMode';

const LamdaMoney = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Lamda Money</Text>
                <View>
                    <Ionicons name="server" size={30} color={colors.primary1} />
                    <Counter
                        style={styles.counter}
                        number={25}
                        txtStyle={styles.txtCount}
                    />
                </View>
            </View>

            <View style={styles.subHeader}>
                <Text style={styles.texte1}>Convertir en...</Text>
                <Text style={styles.texte2}>Voir tout</Text>
                
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{marginLeft: 20, flexDirection: 'row', height: 80}}>
                    <PaymentMode 
                        name='Mobile Money'
                        number='6 75 24 15 45'
                        source='https://matinlibre.com/wp-content/uploads/2020/08/4-3-750x430-1-750x430.jpg'
                    />

                    <PaymentMode 
                        name='Orange Money'
                        number='6 97 24 60 45'
                        source='https://orange.africa-newsroom.com/files/thumb/6362488be0891aa/600/418/fit'
                    />

                    <PaymentMode 
                        name='Yup Money'
                        number='6 75 24 15 45'
                        source='https://play-lh.googleusercontent.com/PWE8MCpJCpjQitrjJdKvE-blDAROtkwjEcsPOaYsv7GVWK_rwQihnZTBF6azq6ofi-82'
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingTop: 30
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 10
    },

    title: {
        textAlign: 'center',
        width: '90%',
        fontSize: 20,
        color: colors.primary1,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },

    counter: {
        position: 'absolute',
        paddingVertical: 3,
        paddingHorizontal: 5,
        alignSelf: 'flex-end'
    },

    txtCount: {
        fontSize: 10
    },

    subHeader: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    texte1: {
        fontSize: 16
    },

    texte2: {
        color: colors.primary1,
        textDecorationLine: 'underline'
    }
});

export default LamdaMoney;