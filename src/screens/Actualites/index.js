import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import { get_feed, comment_feed, like_feed, share_feed } from '@store/actions'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../assets/themes/colors';
import FeedItem from '../../components/FeedItem';
import { DETAIL_FEED, PROFIL_ENTERPRISE } from '../../constants/routeName'
import Loading from '../../components/Loading'
import Container from '../../components/Container';
import Header from '../../components/Header';

const Actualites = ({navigation}) => {

    const dispatch = useDispatch();
    const listFeed = useSelector(state => state.feed.list)
    const isLoading = useSelector(state => state.application.isLoading)
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        dispatch(get_feed())
        setIsFetching(false);
    };

    const handleLike = (item) => {
        dispatch(like_feed(item.id))
    }

    const handleComment = (item) => {
        navigation.navigate(DETAIL_FEED, {item})
    }

    const onRefresh = () => {
        setIsFetching(true);
        fetchData();
    };

    const renderItem = (({item}) => (
        <FeedItem 
            item = {item}
            handleLike = {handleLike}
            handleComment = {handleComment}
            open = {() => navigation.navigate(DETAIL_FEED, {item})}
            openProfil = {() => navigation.navigate(PROFIL_ENTERPRISE, {item: item.client})}
        />
    ))

    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor = {colors.primary1} />
            <Loading isVisible = {isLoading} />
            <Header navigation={navigation} />
            <View style = {styles.content}>
                <FlatList 
                    data={listFeed}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    onRefresh={onRefresh}
                    refreshing={isFetching}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: colors.primary1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary1,
        marginLeft: 20,
    },
    content: {
        height: '100%',
        backgroundColor: "#eee",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 80,
    }
});

export default Actualites;