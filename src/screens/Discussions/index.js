import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'

import colors from '../../assets/themes/colors';
import Container from '../../components/Container';
import Header from '../../components/Header';
import HotspotContainer from '../../components/HotspotContainer';
import HotspotItem from '../../components/HotspotItem';
import { CHAT, HOTSPOT } from '../../constants/routeName'
import { getAllAccessPoint, get_abonne } from '@store/actions'
import DiscussionItem from '../../components/DiscussionItem';
import Loading from '../../components/Loading';

const Discussions = ({navigation}) => {
    
    const dispatch = useDispatch();
    const list_abonne = useSelector(state => state.userReducer.list_abonne)
    const isLoading = useSelector(state => state.application.isLoading)

    useEffect(() => {
        dispatch(get_abonne())
    }, [])

    console.log("list_abonne", list_abonne)

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
                <FlatList
                    data = {list_abonne}
                    renderItem = {renderItem}
                    contentContainerStyle = {{paddingBottom: 50}}
                />
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
    }
});

export default Discussions;