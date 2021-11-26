import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import colors from '../../assets/themes/colors';
import Mission from '../../components/Mission';
import Btn from '../../components/Btn';
import {ACTUALITES} from '../../constants/routeName';
import ValidationCondition from '../../components/ValidationCondition';
import { useDispatch, useSelector } from 'react-redux';
import { get_missions_list } from '../../store/actions/missions';

const Missions = ({navigation}) => {

    const dispatch = useDispatch()
    const { list } = useSelector(state => state.missions)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    console.log('list', list)

    useEffect(() => {
        dispatch(get_missions_list())
    }, [])

    return(
        <View style = {styles.container}>
            <FlatList
                data = {list}
                renderItem = {({item, index}) => <Mission item = {item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 30,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 20,
        color: colors.primary1,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginVertical: 20
    },
});

export default Missions;