import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, FlatList } from 'react-native';
import colors from '../../assets/themes/colors';
import Container from '../../components/Container';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../../components/Input';
import { useSelector, useDispatch, connect } from 'react-redux';
import { get_chat_id } from '../../store/actions/chat';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

    getChatId = async () => {
        const {item} = this.props.route.params
        const { dispatch, user } = this.props
        return dispatch(get_chat_id(item.id, user.id))
    }

    setMessage = (message) => {
        this.setState({
            message
        })
    }

    setMessages = (message) => {
        let newMessageList = [...this.state.messages]
        newMessageList.unshift(message)
        this.setState({messages: newMessageList})
    }

    fecthMessage = () => {
        const {item} = this.props.route.params
        this.chatSocket.send(JSON.stringify({
            'command':'fetch_messages',
            'abonne': item.id
            })
        );
    }
    

    async componentDidMount() {

        await this.getChatId()
        console.log('id', this.props.idChat)
        this.chatSocket = new WebSocket(
            'wss://lamda-cm.herokuapp.com/ws/chat/'
            + this.props.idChat
            + '/'
        );
        this.chatSocket.onopen = (e) => {
            console.log("connected")
            this.fecthMessage()
        }; 

        this.chatSocket.onmessage = (e) => {
            console.log(e.data)
            let data = JSON.parse(e.data)
            if(data.messages) this.setState({messages: data.messages.reverse()})
            else this.setMessages(data.message.message)
        };

        this.chatSocket.onclose = function(e) {
            console.error('Chat socket closed unexpectedly', e);
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
                        name="chevron-back-outline"
                        size={30}
                        onPress = {() => this.props.navigation.goBack()}
                    />
                    <Image 
                        source={{uri: 'https://miro.medium.com/max/1200/0*lf2XvQsiQG-HOz8D.jpg'}} 
                        style={styles.avatar}
                    />
                    <View>
                        <Text style={styles.title}>{item.user.first_name} {item.user.last_name}</Text>
                    </View>
                </View>
                <FlatList
                    data = {messages}
                    style = {styles.content}
                    inverted = {true}
                    keyExtractor = {(item, index) => String(index)}
                    renderItem = {({item, index}) => {
                        if(item.auteur != user.user.email)
                                return(
                                    <View key = {index} style={styles.receiver_wrapper}>
                                        <Text style = {styles.messsage_receiver}>{item.contenu}</Text>
                                        <Text style = {styles.date}>{item.date}</Text>
                                    </View>
                                )
                            else{
                                return (
                                    <View key = {index} style = {styles.sender_wrapper}>
                                        <Text style = {styles.message_send}>{item.contenu}</Text>
                                        <Text style = {styles.date}>{item.date}</Text>
                                    </View>
                                )
                            }
                    }}
                    
                />
                <View style = {styles.footer}>
                    <View style = {styles.content_input}>
                        <TextInput 
                            placeholder="Ecrivez votre message..."
                            placeholderTextColor = '#444'
                            style={styles.input}
                            multiline = {true}
                            defaultValue = {this.state.message}
                            onChangeText = {this.setMessage}
                        />
                        <TouchableOpacity onPress = {this.sendMessage}>
                            <Ionicons
                                name = "paper-plane"
                                size = {25}
                                style = {styles.paperIconStyle}
                                color = {colors.primary1}
                            />
                        </TouchableOpacity>
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
        backgroundColor: '#fff',
        paddingTop: 30
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.white,
        shadowColor: '#777',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    title: {
        fontSize: 16,
        marginLeft: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    input: {
        marginHorizontal: 20,
        flex: 1,
        color: '#777'
    },
    footer: {
        width: '100%',
        height: 60,
        // position: 'absolute',
        // bottom: -40,
        paddingHorizontal: 20
    },
    receiver_wrapper: {
        alignSelf: 'flex-start',
        maxWidth: '80%',
        marginVertical: 10,
    },
    messsage_receiver: {
        backgroundColor: '#f6f6f6',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'flex-start'
    },
    sender_wrapper: {
        maxWidth: '80%',
        alignSelf: 'flex-end',
        marginVertical: 5,
    },
    message_send: { 
        alignSelf: 'flex-end',
        padding: 10,
        backgroundColor: colors.primary1,
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
    date: {
        fontSize: 9,
        marginTop: 5
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);