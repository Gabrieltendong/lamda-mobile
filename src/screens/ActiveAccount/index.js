//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import colors from '../../assets/themes/colors';
import Btn from '../../components/Btn';
import Container from '../../components/Container';
import HotspotContainer1 from '../../components/HotspotContainer1';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import { confirmeCode } from '@store/actions'

// create a component
const ActiveAccount = ({navigation}) => {

    const [code, setCode ] = useState();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.application.isLoading)

    const handleActiveAccount = () => {
        dispatch(confirmeCode(code, navigation))
    }

    return (
        <Container>
            <Loading isVisible = {isLoading} />
            <HotspotContainer1 
                style={styles.hotspotContainer}
            >
                <Text style = {styles.title}>Un code d'activation vous a été envoyé par mail</Text>
                <Input 
                    placeholder="Code"
                    onChangeText = {(code) => setCode(code)}
                />
                <Btn 
                    title="Activer"
                    onPress={handleActiveAccount}
                    style={styles.btn}
                    color={colors.white}
                />
            </HotspotContainer1>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    hotspotContainer: {
        marginTop: '40%',
        paddingHorizontal: 30,
        paddingTop: 50,
        paddingBottom: 20,

    },
    btn: {
        borderRadius: 50,
        marginTop: 30,
        bottom: 0,
        backgroundColor: colors.primary1
    },
    title: {
        fontSize: 18,
        color: '#777'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ActiveAccount;
