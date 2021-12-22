import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList , Image} from 'react-native';
import colors from '../../assets/themes/colors';
import Btn from '../../components/Btn';
import {ACTUALITES} from '../../constants/routeName';
import ValidationCondition from '../../components/ValidationCondition';
import { useDispatch, useSelector } from 'react-redux';
import { get_missions_list } from '../../store/actions/missions';
import SondageItem from '../../components/SondageItem';

const SondageScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const { list } = useSelector(state => state.missions)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    console.log('list', list)

    useEffect(() => {
        dispatch(get_missions_list())
    }, [])

    const selectedResponse = (value) => {
        console.log('value', value)
    }

    return(
        <ScrollView 
            style = {styles.container}
            contentContainerStyle = {{paddingBottom: 40}}
        >
            <Image 
                source={require('../../assets/images/winer.png')}
                style = {styles.imageHeader} 
                resizeMode='contain'
            />
            <Text style = {styles.title}>Gagner des points en partipant au sondage suivant:</Text>
            {
                list.map((item, index) =>(
                    <SondageItem item = {item} selectedResponse = {selectedResponse} />
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 30,
    },
    title: {
        fontSize: 20,
        color: '#444',
        textAlign: 'center',
        marginVertical: 20
    },
    wrapper: {
        paddingBottom: 150,
        borderWidth: 10,
        borderColor: '#000'
    },
    imageHeader: {
        height: 250,
        width: '100%',
        borderWidth: 1
    }
});

export default SondageScreen;