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
                        color={'#000'} 
                    />
                    <Text style={[styles.title, {marginLeft: 10}]}>Notifications</Text>
                </View>
            </View>
            {
                notifications.length == 0?
                <View style = {styles.empty_notification}>
                    <Ionicons
                        name = "notifications-off-outline"
                        style = {styles.icon_notification}
                        size = {40}
                    />
                    <Text style = {styles.text_empty_notification}>Aucune notification pour le moment</Text>
                </View>
                :
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
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        padding: 20
    },
    empty_notification: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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