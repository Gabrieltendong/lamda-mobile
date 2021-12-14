import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, Image, TouchableOpacity, Share, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';
import call from 'react-native-phone-call'

import colors from '../../assets/themes/colors';
import {MISSIONS, ACTUALITES, LAMDA_MONEY, AUTH, LAMDA_STORE} from '../../constants/routeName';
import { URL } from '../../api/config'
import { SET_USER } from '../../store/actions/type'
import { ScrollView } from 'react-native-gesture-handler';

const DrawerContainer = ({navigation}) => {

    const [isLoad, setIsLoad] = useState(false)
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
            number: '656000126', // String value with the number to call
            prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
          }
           
        call(args).catch(console.error)
    }

    const sendMail = () => {
        Linking.openURL("mailto:infos@lamda.cm")
    }

    if(user.user){
        console.log('user.avatar', user.avatar)
        return (
            <View>
                <View style={styles.header}>
                    <View style = {styles.content_avatar}>
                        <Ionicons
                            name = 'person'
                            size = {40}
                            color = {'#777'}
                        />
                    </View>
                    {/* <View style={styles.image}>
                        <Image 
                            source={{uri: URL + user.avatar}}
                            style={styles.user}
                        />
                    </View> */}
                    <View style = {styles.content_header_text}>
                        <Text style={styles.username}>{user.user.first_name} {user.user.last_name}</Text>
                        <Text style={styles.phone}>{user.telephone}</Text>
                    </View>
                </View>
                <ScrollView contentContainerStyle = {{paddingBottom: 200}}>
                    <View style={styles.middle}>
                        <View style = {styles.row}>
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
                                <Text style={{marginLeft: 10}}>Publications</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.row}>
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
                        </View>
                        <TouchableOpacity onPress = {shareApp} style={[styles.page]}>
                            <Ionicons 
                                name="share-social"
                                size={25}
                                color={"#777"}
                            />
                            <Text style={{marginLeft: 10}}>Partager</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.contact}>Contactez-nous</Text>
                    <View style = {styles.row}>
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
                    </View>
                    <TouchableOpacity onPress = {logOut} style={[styles.btn]}>
                        <Ionicons 
                            name="log-in"
                            size={25}
                            color={"#fff"}
                        />
                        <Text style={{marginLeft: 10, color: '#fff'}}>Deconnexion</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }else{
        return null
    }
    
}

export default DrawerContainer

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
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
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    phone: {
        // textAlign: 'center',
        fontSize: 12,
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
    row: {
        flexDirection: 'row'
    },
    page: {
        height: 100,
        width: 120,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        shadowColor:'#000',
        shadowOffset: {height:1, width:1},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5
    },
    contact: {
        padding: 10,
        fontSize: 15,
        color: colors.grey
    },
    btn: {
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.primary1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20
    },
    content_avatar: {
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content_header_text: {
        marginLeft: 10
    }
})
