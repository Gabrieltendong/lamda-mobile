//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { get_stores } from '@store/actions'
import StoreItem from '../../components/StoreItem';

// create a component
const LamdaStore = ({navigation}) => {

    const dispatch = useDispatch();
    const listApp = useSelector(state => state.stores.list)

    useEffect(()=> {
        dispatch(get_stores())
    }, [])

    return (
        <View style={styles.container}>
            <View style = {styles.header}>
                <TouchableOpacity onPress = {() => navigation.goBack()}  style = {styles.btn_back}>
                    <Ionicons
                        name = "arrow-back"
                        size = {30}
                    />
                </TouchableOpacity>
                <Text style = {styles.title_header}>Lamda Store</Text>
            </View>
            <FlatList
                data = {listApp}
                style = {styles.content}
                numColumns = {2}
                renderItem = {({item}) => <StoreItem item = {item} />}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#fff'
    },
    content: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    header: {
        height: 60,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    btn_back: {

    },
    title_header: {
        fontSize: 18,
        marginLeft: 20
    }
});

//make this component available to the app
export default LamdaStore;
