//import liraries
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import Video from 'react-native-video';
import { Thumbnail } from 'react-native-thumbnail-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { URL } from '../../api/config'
import colors from '../../assets/themes/colors';
import { get_profil_enterprise, follow_enterprise } from '@store/actions'
import { UPDATE_LIST_FEED_ENTERPRISE } from '@store/actions/type'
import { DETAIL_FEED } from '../../constants/routeName'
import FeedItem from '../../components/FeedItem';
import Btn from '../../components/Btn';

// create a component
const ProfilEnterprise = ({route, navigation}) => {

    const { item } = route.params;
    const dispatch = useDispatch();
    const listFeed = useSelector(state => state.client.listFeed)

    useEffect(() => {
        dispatch(get_profil_enterprise(item.id))

        return () => {
            dispatch({type: UPDATE_LIST_FEED_ENTERPRISE, value: []})
        }
    },[])

    const handleLike = (item) => {
        dispatch(like_feed(item.id))
    }

    const handleComment = (item) => {
        navigation.navigate(DETAIL_FEED, {item})
    }

    const renderItem = (({item}) => (
        <FeedItem 
            item = {item}
            handleLike = {handleLike}
            handleComment = {handleComment}
            open = {() => navigation.navigate(DETAIL_FEED, {item})}
        />
    ))

    const handleFollow = () => {
        dispatch(follow_enterprise(item.id))
    }

    console.log("item profil", item)
    
    return (
        <View style={styles.container}>
            <View>
                <StatusBar translucent backgroundColor = "transparent" />
                <Image
                    source={{uri: item.logo}}
                    style={styles.image}

                />
            </View>
            <View style = {styles.content} >
                <View style = {styles.row}>
                    <View style = {styles.col}>
                        <Ionicons
                            name = "heart-outline"
                            size = {25}
                        />
                        <Text>{item.abonnements.length} followers</Text>
                    </View>
                    <Btn
                        title="Suivre cette entreprise"
                        onPress={handleFollow}
                        style={styles.btn}
                        color={colors.white}
                    />
                    {/* <View style = {styles.col}>
                        <Ionicons
                            name = "chatbubble-outline"
                            size = {25}
                        />
                        <Text>{item.commentaires.length} commentaires</Text>
                    </View>
                    <View style = {styles.col}>
                        <Ionicons
                            name = "share-social-outline"
                            size = {25}
                        />
                        <Text>{item.partages.length} partages</Text>
                    </View> */}

                </View>
                <View style = {{flex: 1}}>
                    <FlatList
                        data = {listFeed}
                        renderItem = {renderItem}
                        contentContainerStyle = {{paddingBottom: 70}}
                    />
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 20,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: -50,
        backgroundColor: '#fff'
    },
    row: {
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    col: {
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 300,
        backgroundColor: colors.primary1
    },
    backgroundVideo: {
        width: '100%',
        height: 300,
        borderRadius: 20,
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        marginHorizontal: 20,
        bottom: 10,
        backgroundColor: '#ecf0f1',
        borderRadius: 15,
    },
    textInput: {
        minHeight: 50,
        flex: 1,
        marginRight: 10,
        paddingLeft: 20,
        color: '#777'
    },
    paperIconStyle: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10,
        marginRight: 10
    },
    btn: {
        backgroundColor: colors.secondary1,
        paddingHorizontal: 20,
        borderRadius: 25
    }
});

//make this component available to the app
export default ProfilEnterprise;
