import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import colors from '../../assets/themes/colors';
import Container from '../../components/Container';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../../components/Input';

const Chat = ({navigation, route}) => {

    const {item} = route.params
    
    const chatSocket = new WebSocket(
        'wss://lamda-cm.herokuapp.com/ws/chat/'
        + item.id
        + '/'
    );

    chatSocket.onopen = function(e){
        console.log('test')
    }; 
    
    useEffect(() => {
        
    }, [])

    return(
        <View style = {styles.container_full}>
            <View style={styles.header}>
                <Ionicons 
                    name="arrow-back"
                    size={30}
                />
                <Text style={styles.title}>Chat</Text>
            </View>

            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.info}>
                        <Image 
                            source={{uri: 'https://miro.medium.com/max/1200/0*lf2XvQsiQG-HOz8D.jpg'}} 
                            style={styles.avatar}
                        />

                        <Text style={styles.username}>William Gregory</Text>
                    </View>

                    <Text>Je suis père et je suis à l’école en train d’attendre que le professeur vienne et j’ai faim.</Text>
                </View>

                <View style={styles.container}>
                    <View style={styles.info}>
                        <Image 
                            source={{uri: 'https://miro.medium.com/max/1200/0*lf2XvQsiQG-HOz8D.jpg'}} 
                            style={styles.avatar}
                        />

                        <Text style={styles.username}>William Gregory</Text>
                    </View>

                    <Text>Je suis père et je suis à l’école en train d’attendre que le professeur vienne et j’ai faim.</Text>
                </View>

                <View style={styles.container}>
                    <View style={styles.info}>
                        <Image 
                            source={{uri: 'https://miro.medium.com/max/1200/0*lf2XvQsiQG-HOz8D.jpg'}} 
                            style={styles.avatar}
                        />

                        <Text style={styles.username}>William Gregory</Text>
                    </View>

                    <Text>Je suis père et je suis à l’école en train d’attendre que le professeur vienne et j’ai faim.</Text>
                </View>
                

            </ScrollView>

            <View style = {styles.footer}>
                <Input 
                    placeholder="Ecrivez votre message..."
                    style={styles.input}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_full: {
        flex: 1
    },
    container: {
        backgroundColor: colors.white,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '70%',
        marginTop: 20,
        marginHorizontal: 20
    },

    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginTop: 30,
        backgroundColor: colors.white
    },

    title: {
        fontSize: 20,
        color: colors.primary1,
        textTransform: 'uppercase',
        marginLeft: 10,
    },

    avatar: {
        width: 20,
        height: 20,
        borderRadius: 20
    },

    username: {
        fontSize: 10,
        color: colors.grey,
        marginLeft: 10
    },

    input: {
        marginHorizontal: 20,
    },
    footer: {
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 40
    }
});

export default Chat;