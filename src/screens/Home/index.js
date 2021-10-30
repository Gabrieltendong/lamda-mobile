import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import colors from '../../assets/themes/colors';
import Container from '../../components/Container';
import Header from '../../components/Header';
import HotspotContainer from '../../components/HotspotContainer';
import HotspotItem from '../../components/HotspotItem';
import { HOTSPOT } from '../../constants/routeName'
import { getAllAccessPoint, getProfilUser } from '@store/actions'
import { checkAccessLocation } from '../../utils';
import registerFcmDevice from '../../provider/notification/registerFcmDevice';

const Home = ({navigation}) => {
    
    const dispatch = useDispatch();
    const listPoint = useSelector(state => state.accessPoint.list)

    useEffect(() => {
        checkAccessLocation()
        dispatch(getAllAccessPoint())
        dispatch(getProfilUser())
        registerFcmDevice()
    }, [])

    const renderItem = (({item, index}) => (
        <HotspotItem
            onPress={() => navigation.navigate(HOTSPOT, {item})}
            item = {item}
        />
    ))

    return(
        <Container style={styles.container}>
            <Header 
                navigation={navigation}
            />
            <View style={styles.hContainer}>
                <FlatList 
                    data = {listPoint}
                    keyExtractor = {(item) => String(item.id)}
                    renderItem = {renderItem}
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

export default Home;