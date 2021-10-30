import React, {useState,} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Container from '../../components/Container';
import Btn from '../../components/Btn';
import colors from '../../assets/themes/colors';
import {SIGN_UP2} from '../../constants/routeName';
import HotspotContainer1 from '../../components/HotspotContainer1';
import Input from '../../components/Input';
import ValidationCondition from '../../components/ValidationCondition';
import Mission from '../../components/Mission';
import { get_register_form, storeUser} from '../../utils'
import { register } from '@store/actions'
import Loading from '../../components/Loading';

const SignUp2 = ({navigation, route}) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [phone, setPhone] = useState()
    const isLoading = useSelector(state => state.application.isLoading)
    const avatar = route.params.dataForm.avatar
    const dispatch = useDispatch()

    const handleSignUp = () => {
        const { dataForm } = route.params
        dataForm.telephone = phone
        dispatch(register(get_register_form(dataForm), navigation, storeUser(dataForm)))
    }

    return(
        <Container>
            <HotspotContainer1 
                style={styles.hotspotContainer}
            >
                <Loading isVisible = {isLoading} />
                {
                    avatar != undefined &&
                    <Image
                        source={{uri: avatar.uri}}
                        style={styles.image}
                    />
                }
                <ScrollView showsHorizontalScrollIndicator keyboardShouldPersistTaps = "always">
                    <View style = {styles.content_input}>
                        <View style = {styles.row}>
                            <Ionicons 
                                name = "call-outline"
                                size = {25}
                            />
                            <TextInput
                                placeholder = "Numéro de téléphone"
                                placeholderTextColor = "#777"
                                style = {styles.input}
                                keyboardType = "number-pad"
                                onChangeText = {setPhone}
                            />
                        </View>
                    </View>
                    <ValidationCondition 
                        title="J’accepte de recevoir des publicités même en dehors de l’application LAMDA"
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        style={styles.validation}
                    />
                    <Mission 
                        description="Appuyer sur « VALIDER » pour vérifier votre
                            compte avec Account Kit par Facebook. Vous
                            n’avez pas besoin d’un compte Facebook pour
                            utiliser Account Kit. Un texto peut vous être
                            transmis pour vérifier votre numéro. Des frais de
                            supplémentaires peuvent être appliqués.
                            En savoir plus sur l’utilisation de vos données par Facebook."
                    />
                    <Btn 
                        title="VALIDER"
                        onPress={handleSignUp}
                        routeName={SIGN_UP2}
                        style={styles.btn}
                        color={colors.white}
                    />
                </ScrollView>
            </HotspotContainer1>
        </Container>
    )
}

const styles = StyleSheet.create({
    hotspotContainer: {
        marginTop: '40%',
        paddingHorizontal: 30,
        paddingTop: 50,
        paddingBottom: 20
    },

    image: {
        width: 99,
        height: 99,
        borderRadius: 150,
        alignSelf: 'center',
        marginTop: -40,
        position: 'absolute'
    },

    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },

    picker: {
        width: '50%'
    },

    btn: {
        borderRadius: 10,
        marginTop: 30,
        bottom: 0,
        backgroundColor: colors.primary1
    },
    validation: {
        marginVertical: 20
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
});

export default SignUp2;