//import liraries
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { View, Text, StyleSheet, ScrollView, Dimensions, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Btn from '../../components/Btn';
import colors from '../../assets/themes/colors';
import { SIGN_UP1 } from '../../constants/routeName'
import Input from '../../components/Input';
import { login } from '@store/actions'
import Loading from '../../components/Loading';

// create a component
const SignIn = ({navigation}) => {

    const isLoading = useSelector(state => state.application.isLoading)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();

    const handleLogin = () => {
        const data = { email, password }
        dispatch(login(data, navigation))
    }

    return (
        <ScrollView 
            style = {styles.container}
            keyboardShouldPersistTaps = 'always'
        >
            <Text style = {styles.title}>Connexion</Text>
            <View 
                style={styles.hotspotContainer}
            >
                <Loading isVisible = {isLoading} />
                <View style = {styles.content_input}>
                    <View style = {styles.row}>
                        <Ionicons 
                            name = "mail-outline"
                            size = {25}
                        />
                        <TextInput
                            placeholder = "Email"
                            placeholderTextColor = "#777"
                            keyboardType = 'email-address'
                            style = {styles.input}
                            onChangeText = {setEmail}
                        />
                    </View>
                </View>
                {/* {error.email && <Text style = {styles.messageError}>{error.email}</Text>} */}
                <View style = {styles.content_input}>
                    <View style = {styles.row}>
                        <Ionicons 
                            name = "lock-closed-outline"
                            size = {25}
                        />
                        <TextInput
                            placeholder = "Mot de passe"
                            placeholderTextColor = "#777"
                            secureTextEntry = {true}
                            style = {styles.input}
                            onChangeText = {setPassword}
                        />
                    </View>
                </View>
                {/* {error.password && <Text style = {styles.messageError}>{error.password}</Text>} */}
                <Btn 
                    title="Connexion"
                    onPress={handleLogin}
                    style={styles.btn}
                    color={colors.white}
                />
                <View style = {styles.row}>
                    <Text>Pas encore inscrire?  </Text>
                    <Btn 
                        title="S'inscrire"
                        onPress={() => navigation.navigate(SIGN_UP1)}
                        style={styles.btn_sign_up}
                        color={colors.primary1}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary1,
    },
    title: {
        color: colors.white,
        fontSize: 30,
        marginTop: 50,
        marginLeft: 20
    },
    hotspotContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        marginTop: 50,
        paddingTop: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: Dimensions.get('window').height
    },
    btn: {
        backgroundColor: colors.primary1,
        borderRadius: 10,
        marginTop: 30
    },
    content_input: {
        borderBottomColor: '#f3f3f3',
        borderBottomWidth: 1,
        marginVertical: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        color: '#777',
        marginLeft: 10
    },
    label: {
        fontSize: 18
    },
});

//make this component available to the app
export default SignIn;
