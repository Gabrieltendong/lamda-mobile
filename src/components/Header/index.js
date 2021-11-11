import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../assets/themes/colors';
import { URL } from '../../api/config';
import { PROFIL } from '../../constants/routeName'

const Header = ({navigation}) => {
    const user = useSelector(state => state.userReducer.profil)
    return (
        <View style={styles.container}>
            <Feather
                name="bar-chart-2"
                size={40}
                color={colors.white}
                style = {styles.iconStyle}
                onPress={() => navigation.openDrawer()}
            />
            <Text style={styles.title}>Lamda</Text>
            {/* <Image
                source={{uri: URL + user.avatar}}
                style={styles.image} 
            /> */}
            <TouchableOpacity 
                style = {styles.avatar}
                onPress = {() => navigation.navigate(PROFIL)}
            >
                <Ionicons
                    name = "person-outline"
                    color = "#fff"
                    size = {25}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    title: {
        color: colors.white,
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    iconStyle: {
        transform: [{rotate: "90deg", }]
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1
    }

})

export default Header;
