import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import Video from 'react-native-video';
import { useDispatch } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../assets/themes/colors';
import { URL } from '../../api/config'
import ShareFeed from '../ShareFeed';
import { share_feed } from '@store/actions'
import { store } from '@store/configureStore'
import { DETAIL_FEED } from '../../constants/routeName'
import { date } from '../../utils/date'

const FeedItem = ({item, handleComment, handleLike, open, openProfil}) => {

    const userId = store.getState().userReducer.user.abonne
    const [isVisible, setIsVisible] = useState(false)
    const [ isLoading, setisLoading ] = useState(false)
    const dispatch = useDispatch()

    const handleToggle = () => {
        setIsVisible(!isVisible)
    }

    const handleShare = (network) => {
        // if(network == "facebook") 
        dispatch(share_feed(item, network))
    }

    console.log("item", item)

    return (
        <TouchableOpacity 
            onPress = {open} 
            style={[
                styles.container,
                !item.client?.informations?{
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                }:null
            ]}
        >
            <ShareFeed
                isVisible = {isVisible}
                toggle = {handleToggle}
                handleShare = {handleShare}
            />
            {
                isLoading && 
                <View style = {styles.loadingStyle}>
                    <ActivityIndicator size = "large" color = {colors.primary1} />
                </View>
            }
            <View >
                {
                    item.client?
                    <View style={styles.row}>
                        <TouchableOpacity onPress = {() => openProfil(item.client)} >
                            <Image
                                source={{uri: item.client?.logo}} 
                                style={styles.annonceImage}
                                defaultSource = {require('../../assets/images/avatar.jpg')}
                            />
                        </TouchableOpacity>
                        <View>
                            <Text style = {styles.name__wrapper}>{item.client?.raison_social}</Text>
                            <Text>{date(item.date_publication)}</Text>
                        </View>
                    </View>
                    :null
                }
                {/* <Text>{item.time}</Text> */}
            </View>
            <View>
                {
                    item.photo != null?
                    <Image 
                        source={{uri: item.photo}}
                        style={[
                            styles.image,
                            !item.client?.informations?{
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }:null
                        ]}
                        progressiveRenderingEnabled = {true}
                        onLoadStart = {setisLoading}
                        onLoadEnd = {setisLoading}
                    />
                    :
                    <Video 
                        source={{uri: item.video}}               
                        style={styles.backgroundVideo}
                        resizeMode = "stretch"
                    />
                }
                <View style={styles.action}>
                    <TouchableOpacity onPress = {() => handleLike(item)}>
                        <Ionicons 
                            name="heart"
                            size={20}
                            color={item.likes.includes(userId)?'orange': colors.white}
                        />
                    </TouchableOpacity>
                    <Ionicons 
                        name="chatbubble"
                        size={20}
                        color={colors.white}
                        onPress = {() => handleComment(item)}
                    />
                    <Ionicons 
                        name="share-social"
                        size={20}
                        color={colors.white}
                        onPress = {handleToggle}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FeedItem

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginVertical: 5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    annonceImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
        backgroundColor: '#777'
    },
    image: {
        width: '100%',
        height: 400,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 10
    }, 
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        backgroundColor: colors.transparent,
        bottom: 20,
        width: 130,
        height: 40,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    backgroundVideo: {
        width: '100%',
        height: 400,
        borderRadius: 20,
        marginTop: 10
    },
    name__wrapper: {
        fontSize: 20
    },
    loadingStyle: {
        position: 'absolute',
        height: 450,
        justifyContent: 'center',
        left: 0,
        right: 0
    }
})
