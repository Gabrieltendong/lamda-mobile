import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

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
            // onPress={() => navigation.navigate(CHAT, {item})}
            item = {item}
        />
    ))

    return(
        <Container style={styles.container}>
            <Header 
                navigation={navigation}
            />
            <Loading isVisible = {isLoading} />
            <View style={styles.hContainer}>
                <FlatList
                    data = {list_abonne}
                    renderItem = {renderItem}
                    contentContainerStyle = {{paddingBottom: 50}}
                />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },

    hContainer: {
        height: '100%',
        backgroundColor: colors.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginTop: 20,
    }
});

export default Discussions;