import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import colors from '../../assets/themes/colors';
import Mission from '../../components/Mission';
import Btn from '../../components/Btn';
import {ACTUALITES} from '../../constants/routeName';
import ValidationCondition from '../../components/ValidationCondition';
import { useDispatch, useSelector } from 'react-redux';
import { get_missions_list } from '../../store/actions/missions';
import Swiper from 'react-native-swiper'

const Missions = ({navigation}) => {

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
        <View style = {styles.container}>
            <Swiper key = {list.length} height = '100%'  loop = {true} style={styles.wrapper}>
                {
                    list.map((item, index) =>(
                        <Mission item = {item} selectedResponse = {selectedResponse} />
                    ))
                }
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        color: colors.primary1,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginVertical: 20
    },
    wrapper: {
        paddingBottom: 150,
        borderWidth: 10,
        borderColor: '#000'
    }
});

export default Missions;