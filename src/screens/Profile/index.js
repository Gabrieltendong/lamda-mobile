//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { launchImageLibrary} from 'react-native-image-picker';
import { URL } from '../../api/config';

import { styles } from "./style"
import { update_profil } from '../../store/actions/user';
import Loading from '../../components/Loading';
import { getProfilUser } from '../../store/actions/user';

// create a component
const ProfileScreen = () => {

    const dispatch = useDispatch()
    const {profil} = useSelector(state => state.userReducer)
    const [first_name, setFirstName] = useState(profil?.user.first_name);
    const [last_name, setLastName] = useState(profil?.user.last_name);
    const [email, setEmail] = useState(profil?.user.email);
    const [avatar, setAvatar] = useState(URL + profil.avatar);
    const [date_naissance, setDate] = useState(profil.date_naissance)
    const [telephone, setTelephone] = useState(profil.telephone)
    const [isLoad, setIsLoad] = useState(true)
    const [sexe, setSexe] = useState(profil.sexe)
    const [token, setToken] = useState(profil.token)
    const isLoading = useSelector(state => state.application.isLoading)

    const handleTakePhoto = () => {
        launchImageLibrary({maxHeight: 500, maxWidth: 500}, (response) => {
            if(response.didCancel) console.log("didCancel")
            else if(response.errorCode) console.log("error code", response.errorCode)
            else if(response.errorMessage) console.log("error message", response.errorMessage)
            else setAvatar(response.assets[0].uri)
        })
    }

    const handleUpdate = () => {
        const data = {first_name, last_name, telephone, date_naissance, sexe}
        
        dispatch(update_profil(data))
    }

    useEffect(()=> {
        dispatch(getProfilUser())
    }, [])


    console.log("user ------", profil)
    return (
        <ScrollView style={styles.container}>
            <Loading isVisible = {isLoading} />
            <View style = {styles.content_avatar}>
                {
                    !isLoad &&
                    <Ionicons 
                        name = "person-outline"
                        size = {50}
                    />
                }
                <Image
                    source = {{uri: avatar}}
                    onLoad = {() => setIsLoad(true)}
                    onError = {() => setIsLoad(false)}
                    style={styles.avatar}
                />
                <TouchableOpacity onPress = {handleTakePhoto} style = {styles.btn_photo}>
                    <Ionicons 
                        name = "camera-outline"
                        size = {20}
                    />
                </TouchableOpacity>
            </View>

            <View style = {styles.content}>
                <View style = {styles.content_input}>
                    <Text style = {styles.label}>Prénom</Text>
                    <View style = {styles.row}>
                        <Ionicons 
                            name = "person-outline"
                            size = {25}
                        />
                        <TextInput 
                            defaultValue = {first_name}
                            style = {styles.input}
                            onChangeText = {setFirstName}
                        />
                    </View>
                </View>
                <View style = {styles.content_input}>
                    <Text style = {styles.label}>Nom</Text>
                    <View style = {styles.row}>
                        <Ionicons 
                            name = "person-outline"
                            size = {25}
                        />
                        <TextInput 
                            defaultValue = {last_name}
                            style = {styles.input}
                            onChangeText = {setLastName}
                        />
                    </View>
                </View>
                <View style = {styles.content_input}>
                    <Text style = {styles.label}>Téléphone</Text>
                    <View style = {styles.row}>
                        <Ionicons 
                            name = "call-outline"
                            size = {25}
                        />
                        <TextInput 
                            defaultValue = {telephone}
                            style = {styles.input}
                            onChangeText = {setTelephone}
                        />
                    </View>
                </View>
                <View style = {styles.content_input}>
                    <Text style = {styles.label}>Email</Text>
                    <View style = {styles.row}>
                        <Ionicons 
                            name = "mail-outline"
                            size = {25}
                        />
                        <TextInput 
                            defaultValue = {email}
                            style = {styles.input}
                            onChangeText = {setEmail}
                        />
                    </View>
                </View>
                <TouchableOpacity 
                    style = {styles.btn}
                    onPress = {handleUpdate}
                >
                    <Text style = {styles.text_btn}>Mettre à jour</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

//make this component available to the app
export default ProfileScreen;
