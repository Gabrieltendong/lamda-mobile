import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import colors from '../../assets/themes/colors';
import Container from '../../components/Container';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../../components/Input';
import { useSelector, useDispatch, connect } from 'react-redux';
import { get_chat_id } from '../../store/actions/chat';

class Chat extends Component {

    chatSocket = null;
    state = {
        message: '',
        messages: []
    }

    sendMessage = () => {
        const {item} = this.props.route.params
        const { user, idChat } = this.props
        this.chatSocket.send(JSON.stringify({
            'message': this.state.message,
            'command':'new_message',
            'auteur': user.id,
            'destinataire': item.id,
            'file': '',
            'idchat': idChat
        }));
        this.setMessage('')
    }

    getChatId = () => {
        const {item} = this.props.route.params
        const { dispatch, user } = this.props
        dispatch(get_chat_id(item.id, user.id))
    }

    setMessage = (message) => {
        this.setState({
            message
        })
    }

    setMessages = (message) => {
        this.setState({
            messages: [...this.state.messages, message]
        })
    }

    fecthMessage = () => {
        const {item} = this.props.route.params
        this.chatSocket.send(JSON.stringify({
            'command':'fetch_messages',
            'abonne': item.id
            })
        );
    }
    

    componentDidMount() {

        this.getChatId()
        
        this.chatSocket = new WebSocket(
            'wss://lamda-cm.herokuapp.com/ws/chat/'
            + this.props.idChat
            + '/'
        );

        console.log('user', this.props.user.user)
    
        this.chatSocket.onopen = (e) => {
            this.fecthMessage()
        }; 
    
        this.chatSocket.onmessage = (e) => {
            console.log(e.data)
            let data = JSON.parse(e.data)
            if(data.messages) this.setState({messages: data.messages})
            else this.setMessages(data.message.message)
        };
    
        this.chatSocket.onclose = function(e) {
            console.error('Chat socket closed unexpectedly');
        };
    
    }

    render(){

        const { user } = this.props
        const {item} = this.props.route.params
        const { messages } = this.state

        return(
            <View style = {styles.container_full}>
                <View style={styles.header}>
                    <Ionicons 
                        name="arrow-back"
                        size={30}
                    />
                    <Text style={styles.title}>Chat</Text>
                </View>
    
                <ScrollView style = {styles.content} keyboardShouldPersistTaps = 'always'>
                    {
                        messages.map((message, index) => {
                            if(message.auteur != user.user.email)
                                return(
                                    <View style={styles.receiver_wrapper}>
                                        <Image 
                                            source={{uri: 'https://miro.medium.com/max/1200/0*lf2XvQsiQG-HOz8D.jpg'}} 
                                            style={styles.avatar}
                                        />
                                        <Text style = {styles.messsage_receiver}>{message.contenu}</Text>
                                    </View>
                                )
                            else{
                                return (
                                    <View style = {styles.sender_wrapper}>
                                        <Text style = {styles.message_send}>{message.contenu}</Text>
                                    </View>
                                )
                            }
                        })
                    }
                </ScrollView>
                <View style = {styles.footer}>
                    <View style = {styles.content_input}>
                        <TextInput 
                            placeholder="Ecrivez votre message..."
                            placeholderTextColor = '#444'
                            style={styles.input}
                            defaultValue = {this.state.message}
                            onChangeText = {this.setMessage}
                        />
                        <Ionicons
                            name = "paper-plane"
                            size = {25}
                            style = {styles.paperIconStyle}
                            color = {colors.primary1}
                            onPress = {this.sendMessage}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        idChat: state.chat.idChat,
        user: state.userReducer.profil
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

const styles = StyleSheet.create({
    container_full: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        paddingHorizontal: 20
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
        borderRadius: 20,
        marginRight: 10
    },
    input: {
        marginHorizontal: 20,
        flex: 1,
    },
    footer: {
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 20,
        paddingHorizontal: 20
    },
    receiver_wrapper: {
        flexDirection: 'row',
        backgroundColor: '#f6f6f6',
        alignSelf: 'flex-start',
        maxWidth: '80%',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10
    },
    sender_wrapper: {
        maxWidth: '80%',
        padding: 10,
        alignSelf: 'flex-end',
        backgroundColor: colors.primary1,
        marginVertical: 5,
        borderRadius: 10
    },
    content_input: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#f6f6f6',
        paddingHorizontal: 10,
        borderRadius: 25
    },
    messsage_receiver: {
        flex: 1
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);