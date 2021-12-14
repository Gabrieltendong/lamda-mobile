//import liraries
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import Video from 'react-native-video';
import { Thumbnail } from 'react-native-thumbnail-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { URL } from '../../api/config'
import colors from '../../assets/themes/colors';
import { comment_feed, get_comment_feed, see_feed } from '@store/actions'
import CommentItem from '../../components/CommentItem';
import { SET_LIST_COMMENT_FEED } from '@store/actions/type'
import { get_piece_or } from '../../store/actions/user';

// create a component
const DetailFeed = ({route}) => {

    const { item } = route.params;
    const dispatch = useDispatch();
    const [ comment, setComment ] = useState()
    const listComment = useSelector(state => state.feed.listComment)

    const addComment = () => {
        const data = {commentaire: comment}
        dispatch(comment_feed(item.id, data))
        setComment("")
    }

    const renderItem = ({item}) => (
        <CommentItem
            item = {item}
        />
    )

    useEffect(() => {
        dispatch(see_feed(item.id))
        dispatch(get_comment_feed(item.id))

        return () => {
            dispatch({type: SET_LIST_COMMENT_FEED, value: []})
        }
    },[])

    console.log("item", item.partages)
    
    return (
        <View style={styles.container}>
            {
                item.photo != null?
                <View>
                    <StatusBar translucent backgroundColor = "transparent" />
                    <Image 
                        source={{uri: item.photo}}
                        style={styles.image}
                        onLoad = {() => {
                            dispatch(get_piece_or(2))
                        }}
                    />
                </View>
                :
                <Video 
                    source={{uri: item.video}}               
                    style={styles.backgroundVideo}
                    resizeMode = "cover"
                    onEnd = {() => {
                        dispatch(get_piece_or(3))
                    }}
                />
            }
            <View style = {styles.content} >
                <View style = {styles.row}>
                    <View style = {styles.col}>
                        <Ionicons
                            name = "heart-outline"
                            size = {25}
                        />
                        <Text>{item.likes.length} likes</Text>
                    </View>
                    <View style = {styles.col}>
                        <Ionicons
                            name = "chatbubble-outline"
                            size = {25}
                        />
                        <Text>{listComment.length} commentaires</Text>
                    </View>
                    <View style = {styles.col}>
                        <Ionicons
                            name = "share-social-outline"
                            size = {25}
                        />
                        <Text>{item.partages.length} partages</Text>
                    </View>

                </View>
                <Text></Text>
                <Text style = {styles.comment_title}>Commentaire</Text>
                <View style = {{flex: 1}}>
                    <FlatList
                        data = {listComment}
                        renderItem = {renderItem}
                        contentContainerStyle = {{paddingBottom: 70}}
                    />
                </View>
                <View style = {styles.footer}>
                    <TextInput 
                        style = {styles.textInput}
                        defaultValue = {comment}
                        placeholder = "Ecrire un commentaire"
                        placeholderTextColor = "#777"
                        multiline = {true}
                        onChangeText = {(comment) => setComment(comment)}
                    />
                    <TouchableOpacity onPress = {addComment}>
                    <Ionicons
                        name = "paper-plane"
                        size = {25}
                        style = {styles.paperIconStyle}
                        color = {colors.green}
                    />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 20,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: -50,
        backgroundColor: '#fff'
    },
    row: {
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    col: {
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 300,
    },
    backgroundVideo: {
        width: '100%',
        height: 300,
        borderRadius: 20,
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        marginHorizontal: 20,
        bottom: 10,
        backgroundColor: '#ecf0f1',
        borderRadius: 15,
    },
    textInput: {
        minHeight: 50,
        flex: 1,
        marginRight: 10,
        paddingLeft: 20,
        color: '#777'
    },
    paperIconStyle: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10,
        marginRight: 10
    },
    comment_title: {
        fontSize: 22,
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default DetailFeed;
