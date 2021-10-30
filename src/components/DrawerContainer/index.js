import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, Image, TouchableOpacity, Share, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';
import call from 'react-native-phone-call'

import colors from '../../assets/themes/colors';
import {MISSIONS, ACTUALITES, LAMDA_MONEY, AUTH, LAMDA_STORE} from '../../constants/routeName';
import { URL } from '../../api/config'
import { SET_USER } from '../../store/actions/type'

const DrawerContainer = ({navigation}) => {

    const user = useSelector(state => state.userReducer.profil);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch({type: SET_USER, value: {}});
        navigation.navigate(AUTH);
    }

    const shareApp = () => {
        Share.share({
            message: "Hello! retrouve moi sur lamda en telechargeant l'application via le lien si dessous: \n \n https://lamdacm.herokuapp.com"
        })
    }

    const onCall = () => {
        const args = {
            number: '694610759', // String value with the number to call
            prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
          }
           
        call(args).catch(console.error)
    }

    const sendMail = () => {
        Linking.openURL("mailto:lamda@gmail.com")
    }

    if(user.user){
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.username}>{user.user.first_name} {user.user.last_name}</Text>
                    <View style={styles.image}>
                        <Image 
                            source={{uri: URL + user.avatar}}
                            style={styles.user}
                        />
                    </View>
                </View>
                <Text style={styles.phone}>{user.telephone}</Text>
                <View style={styles.middle}>
                    <TouchableOpacity style={styles.page} onPress={() => navigation.navigate(MISSIONS)}>
                        <Ionicons 
                            name="remove-circle"
                            size={30}
                            color={"#777"}
                        />
                        <Text style={{marginLeft: 10}}>Missions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.page} onPress={() => navigation.navigate(ACTUALITES)}>
                        <Ionicons 
                            name="radio"
                            size={25}
                            color={"#777"}
                        />
                        <Text style={{marginLeft: 10}}>Fil d'actualités</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.page} onPress={() => navigation.navigate(LAMDA_MONEY)}>
                        <Ionicons 
                            name="server"
                            size={25}
                            color={"#777"}
                        />
                        <Text style={{marginLeft: 10}}>Lamda Money</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.page} onPress={() => navigation.navigate(LAMDA_STORE)} >
                        <Ionicons 
                            name="cloud-download"
                            size={25}
                            color={"#777"}
                        />
                        <Text style={{marginLeft: 10}}>Lamda Store</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {shareApp} style={[styles.page, {marginTop: '12%'}]}>
                        <Ionicons 
                            name="share-social"
                            size={25}
                            color={"#777"}
                        />
                        <Text style={{marginLeft: 10}}>Partager</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.contact}>Contactez-nous</Text>
                <TouchableOpacity onPress = {sendMail} style={[styles.page, {marginLeft: 10}]}>
                    <Ionicons 
                        name="mail"
                        size={25}
                        color={"#777"}
                    />
                    <Text style={{marginLeft: 10}}>Par mail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {onCall} style={[styles.page, {marginLeft: 10}]}>
                    <Ionicons 
                        name="call"
                        size={25}
                        color={"#777"}
                    />
                    <Text style={{marginLeft: 10}}>Par appel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {logOut} style={[styles.page, {marginLeft: 10}]}>
                    <Ionicons 
                        name="log-in"
                        size={25}
                        color={"#777"}
                    />
                    <Text style={{marginLeft: 10}}>Deconnexion</Text>
                </TouchableOpacity>
    
            </View>
        )
    }else{
        return null
    }
    
}

export default DrawerContainer

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary2,
        paddingHorizontal: 10,
        paddingTop: 30
    },
    user: {
        width: 100,
        height: 100,
        borderRadius: 100,
        
    },
    image: {
        width: 105,
        height: 105,
        borderRadius: 100,
        borderWidth: 3,
        backgroundColor: colors.white,
        borderColor: colors.white,
        alignSelf: 'center',
        marginBottom: -50
    },
    username: {
        marginTop: 20,
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 12,
        textTransform: 'uppercase',
        color: colors.white,
        fontWeight: 'bold'
    },
    phone: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 20,
        color: colors.transparent
    },
    middle: {
        paddingHorizontal: 10,
        paddingTop: 20,
        paddingBottom: 5,
        borderWidth: 1,
        borderColor: "#eee",
        marginTop: 20
    },

    page: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },

    contact: {
        padding: 10,
        fontSize: 15,
        color: colors.grey
    }
})
