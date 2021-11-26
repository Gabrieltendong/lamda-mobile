import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Share } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {request, PERMISSIONS, check} from 'react-native-permissions';
import Contacts from 'react-native-contacts';
var _ = require('lodash')

import colors from '../../assets/themes/colors';
import Container from '../../components/Container';
import Header from '../../components/Header';
import HotspotContainer from '../../components/HotspotContainer';
import HotspotItem from '../../components/HotspotItem';
import { CHAT, HOTSPOT } from '../../constants/routeName'
import { getAllAccessPoint, get_abonne } from '@store/actions'
import DiscussionItem from '../../components/DiscussionItem';
import Loading from '../../components/Loading';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Discussions = ({navigation}) => {
    
    const dispatch = useDispatch();
    const {list_abonne} = useSelector(state => state.userReducer)
    const isLoading = useSelector(state => state.application.isLoading)
    const [abonnes, setAbonnes] = useState(list_abonne)

    const requestPermissionContact = () => {
        request(PERMISSIONS.ANDROID.READ_CONTACTS).then((result) => {
            console.log("result", result)
        });
    }

    const getAllContact = async () => {
        const contacts = await Contacts.getAll()
        // console.log('contact', contacts)
        const numbers = _.keyBy(contacts, (contact) => contact?.phoneNumbers[0]?.number)
        const newAbonneList = abonnes.filter(item => numbers[item.telephone])
        setAbonnes(newAbonneList)
    }

    const shareApp = () => {
        Share.share({
            message: "Hello! retrouve moi sur lamda en telechargeant l'application via le lien si dessous: \n \n https://lamdacm.herokuapp.com"
        })
    }

    useEffect(() => {
        requestPermissionContact()
        dispatch(get_abonne())
        getAllContact()
    }, [])

    const renderItem = (({item, index}) => (
        <DiscussionItem
            onPress={() => navigation.navigate(CHAT, {item})}
            item = {item}
        />
    ))

    return(
        <View style={styles.container}>
            <View style = {styles.searchBar}>
                <Ionicons name = 'search' size = {30}/>
                <TextInput
                    placeholder = "rechercher" 
                    style = {styles.input}
                    placeholderTextColor = '#777'
                />
            </View>
            <Text style = {styles.title}>Messages</Text>
            <Loading isVisible = {isLoading} />
            <View style={styles.hContainer}>
                {
                    abonnes.length == 0?
                    <View style = {styles.content_empty_message}>
                        <Text style = {styles.empty_message}>Aucun de tes contacts utilise Lamda pour le moment, inviter vos contacts a vous regoindre sur Lamda</Text>
                        <TouchableOpacity onPress = {shareApp} style = {styles.btn}>
                            <Text style = {styles.text_btn}>Inviter</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <FlatList
                        data = {abonnes}
                        renderItem = {renderItem}
                        contentContainerStyle = {{paddingBottom: 50}}
                    />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20
    },
    hContainer: {
        height: '100%',
        backgroundColor: colors.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginTop: 20,
    },
    searchBar: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        shadowColor: '#777',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        paddingHorizontal: 10,
        marginVertical: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    input: {
        color: '#777'
    },
    content_empty_message: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    },
    btn: {
        height: 50,
        width: 150,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.primary1
    },
    text_btn: {
        color: colors.white
    },
    empty_message: {
        textAlign: 'center',
        fontSize: 18,
        color: '#777'
    }
});

export default Discussions;