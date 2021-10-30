import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, TextInput } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useForm } from "react-hook-form";
import DatePicker from 'react-native-datepicker'


import Container from '../../components/Container';
import Btn from '../../components/Btn';
import colors from '../../assets/themes/colors';
import LinearGradient from 'react-native-linear-gradient';
import {SIGN_UP2, ACTIVE_ACCOUNT} from '../../constants/routeName';
import HotspotContainer1 from '../../components/HotspotContainer1';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../../components/Input';
import Picker from '../../components/Picker';
import { dataSex, dataAgeRange }  from '@constants'
import moment from 'moment';

const SignUp1 = ({navigation}) => {

    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
    const [sexe, setSex] = useState(dataSex[0].value);
    const [avatar, setAvatar] = useState(null);
    const [error, setError] = useState({})
    const [show, setShow] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleSignUpStepTwo  = () => {
        if(email == undefined) setError({...error, email: "Email obligatoire"})
        if(password == undefined) setError({...error, password: "Mot de passe obligatoire"})
        else{
            const dataForm = {email, password, sexe, avatar, first_name, last_name}
            navigation.navigate(SIGN_UP2, {dataForm})
        }
    }

    const handleTakePhoto = () => {
        launchImageLibrary({maxHeight: 500, maxWidth: 500}, (response) => {
            if(response.didCancel) console.log("didCancel")
            else if(response.errorCode) console.log("error code", response.errorCode)
            else if(response.errorMessage) console.log("error message", response.errorMessage)
            else setAvatar(response.assets[0])
        })
    }

    return(
        <ScrollView 
            style = {styles.container}
            keyboardShouldPersistTaps = 'always'
        >
            <View 
                style={styles.hotspotContainer}
            >
                <LinearGradient 
                    colors={[
                        colors.secondary2.first, 
                        colors.secondary2.second
                    ]} 
                    style={styles.linearGradient}
                >
                    <TouchableOpacity onPress = {handleTakePhoto}>
                        {
                            avatar != null?
                            <Image source = {{uri: avatar.uri}} style = {styles.avatar__wapper} />
                            :
                            <Ionicons 
                                name="camera"
                                size={40}
                                color={colors.white}
                            />
                        }
                    </TouchableOpacity>
                </LinearGradient>
                <View style = {styles.content_input}>
                    <View style = {styles.row}>
                        <Ionicons 
                            name = "person-outline"
                            size = {25}
                        />
                        <TextInput
                            placeholder = "Nom"
                            placeholderTextColor = "#777"
                            style = {styles.input}
                            onChangeText = {setFirstName}
                        />
                    </View>
                </View>
                <View style = {styles.content_input}>
                    <View style = {styles.row}>
                        <Ionicons 
                            name = "person-outline"
                            size = {25}
                        />
                        <TextInput
                            placeholder = "Prénom"
                            placeholderTextColor = "#777"
                            style = {styles.input}
                            onChangeText = {setLastName}
                        />
                    </View>
                </View>
                <View style = {styles.content_input}>
                    <View style = {styles.row}>
                        <Ionicons 
                            name = "mail-outline"
                            size = {25}
                        />
                        <TextInput
                            placeholder = "Email"
                            placeholderTextColor = "#777"
                            style = {styles.input}
                            keyboardType = 'email-address'
                            onChangeText = {setEmail}
                        />
                    </View>
                </View>
                {error.email && <Text style = {styles.messageError}>{error.email}</Text>}
                <View style = {styles.content_input}>
                    <View style = {styles.row}>
                        <Ionicons 
                            name = "lock-closed-outline"
                            size = {25}
                        />
                        <TextInput
                            placeholder = "Mot de passe"
                            placeholderTextColor = "#777"
                            style = {styles.input}
                            secureTextEntry = {true}
                            onChangeText = {setPassword}
                        />
                    </View>
                </View>
                {error.password && <Text style = {styles.messageError}>{error.password}</Text>}
                <View style={styles.pickerContainer}>
                    <View style = {{flex: 1}}>
                        <Text style = {styles.label}>Date de naissance</Text>
                        <DatePicker
                            date={date}
                            mode="date"
                            androidMode = "spinner"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="1980-05-01"
                            maxDate="3016-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            iconComponent= {() => <></>}
                            customStyles={{
                                dateInput: {
                                    borderRadius: 25,
                                    width: 200
                                }
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={setDate}
                        />
                    </View>
                    <Picker 
                        title="Sexe"
                        style={styles.picker}
                        selectedValue={sexe}
                        onValueChange={(itemValue, itemIndex) =>
                            setSex(itemValue)
                        }
                        data={dataSex}
                    />
                </View>
                <Btn 
                    title="SUIVANT"
                    onPress={handleSignUpStepTwo}
                    style={styles.btn}
                    color={colors.primary1}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary1,
    },
    hotspotContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        marginTop: 100,
        paddingTop: 50,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: Dimensions.get('window').height
    },
    linearGradient: {
        height: 90,
        width: 90,
        borderRadius: 150,
        alignSelf: 'center',
        marginTop: -40,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
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
    label: {
        marginBottom: 10
    },
    btn: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.primary1,
        marginTop: 30,
        bottom: 0
    },
    avatar__wapper: {
        height: 90,
        width: 90,
        borderRadius: 45
    },
    messageError: {
        color: "#e74c3c"
    },
    contentDatePiker: {
        position: 'absolute'
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
    }
});

export default SignUp1;