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
            {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                    name="arrow-back"
                    size={30}
                    color={colors.white}
                    style = {styles.iconStyle}
                />
            </TouchableOpacity> */}
            <Text style={styles.title}>Lamda Actualité</Text>
            {/* <Image
                source={{uri: URL + user.avatar}}
                style={styles.image} 
            /> */}
            <View style = {styles.row}>
                {/* <TouchableOpacity 
                    style = {styles.btnIcon}
                    onPress = {() => navigation.navigate(PROFIL)}
                >
                    <Ionicons
                        name = "search"
                        size = {25}
                    />
                </TouchableOpacity> */}
                <TouchableOpacity 
                    style = {styles.btnIcon}
                    onPress = {() => navigation.navigate(PROFIL)}
                >
                    <Ionicons
                        name = "person-outline"
                        size = {25}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title: {
        flex: 1,
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#000'
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    btnIcon: {
        height: 40,
        width: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        marginHorizontal: 5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Header;
