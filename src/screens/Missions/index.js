import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import colors from '../../assets/themes/colors';
import Mission from '../../components/Mission';
import Btn from '../../components/Btn';
import {ACTUALITES} from '../../constants/routeName';
import ValidationCondition from '../../components/ValidationCondition';

const Missions = ({navigation}) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Missions</Text>

                <View style={styles.missionContainer}>
                    <Mission 
                        title="PARTAGER LES PUBS"
                        description="Appuyer sur « VALIDER » pour vérifier votre 
                            compte avec Account Kit par Facebook. Vous 
                            n’avez pas besoin d’un compte Facebook pour 
                            utiliser Account Kit. Un texto peut vous être 
                            transmis pour vérifier votre numéro. Des frais de 
                            supplémentaires peuvent être appliqués.Appuyer sur « VALIDER » pour vérifier votre compte avec Account Kit par Facebook."
                    />

                    <Mission 
                        title="REGARDER LES PUBS"
                        description="Vous n’avez pas besoin d’un compte Facebook pour 
                            utiliser Account Kit. Un texto peut vous être 
                            transmis pour vérifier votre numéro. Des frais de 
                            supplémentaires peuvent être appliqués.
                            Appuyer sur « VALIDER » pour vérifier votre 
                            compte avec Account Kit par Facebook. Vous 
                            n’avez pas besoin d’un compte Facebook pour 
                            utiliser Account Kit."
                    />

                    <Mission 
                        title="INVITER DES AMIS"
                        description=" Un texto peut vous être 
                            transmis pour vérifier votre numéro. Des frais de 
                            supplémentaires peuvent être appliqués.
                            Appuyer sur « VALIDER » pour vérifier votre 
                            compte avec Account Kit par Facebook. Vous 
                            n’avez pas besoin d’un compte Facebook pour 
                            utiliser Account Kit. Un texto peut vous être 
                            transmis pour vérifier votre numéro. Des frais de 
                            supplémentaires peuvent être appliqués.Appuyer sur « VALIDER » pour vérifier votre 
                            compte avec Account Kit par Facebook. Vous 
                            n’avez pas besoin d’un compte Facebook pour 
                            utiliser Account Kit. Un texto peut vous être 
                            transmis pour vérifier votre numéro. Des frais de 
                            supplémentaires peuvent être appliqués."
                    />
                </View>

                <ValidationCondition 
                    title="J’accepte de recevoir des publicités même en dehors de l’application LAMDA"
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    style={styles.validation}
                />

                <Btn 
                    title='VALIDER'
                    style={styles.btn}
                    onPress={() => navigation.navigate(ACTUALITES)}
                    color={colors.white}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingTop: 30
    },

    title: {
        fontSize: 20,
        color: colors.primary1,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginVertical: 20
    },

    missionContainer: {
        margin: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 20
    },

    btn: {
        backgroundColor: colors.primary1,
        margin: 20,
    },

    validation: {
        margin: 20
    }
});

export default Missions;