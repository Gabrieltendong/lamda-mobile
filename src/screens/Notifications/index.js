import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'


import colors from '../../assets/themes/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Counter from '../../components/Counter';
import Notification from '../../components/Notifications';
import { get_notifications } from '../../store/actions/user';
import { date } from '../../utils/date';

const Notifications = () => {

    const dispatch = useDispatch();
    const notifications = useSelector(state => state.userReducer.notifications)

    console.log("notifications", notifications)


    useEffect(() => {
        dispatch(get_notifications())
    }, [])

    return(
        <View style={styles.container}>
            <View style={[styles.notification, {padding: 20}]}>
                <View style={styles.notification}>
                    <Ionicons 
                        name="notifications-outline" 
                        size={25} 
                        color={colors.primary1} 

                    />
                    <Text style={[styles.title, {marginLeft: 10}]}>Notifications</Text>
                </View>
            </View>
            <FlatList
                style = {styles.content}
                data = {notifications}
                renderItem = {({item}) => (
                    <Notification
                        title = {item.titre}
                        text= {item.message}
                        date= {date(item.date_notification)}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: colors.white
    },
    content: {
        padding: 20
    },
    title: {
        fontSize: 25,
        color: "#000",
        fontWeight: 'bold'
    },

    notification: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    counter: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
});

export default Notifications;