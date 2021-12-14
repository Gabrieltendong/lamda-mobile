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
import { mixins } from '../../styles';

const FeedItem = ({item, handleComment, handleLike, open, openProfil}) => {

    const userId = store.getState().userReducer.user.abonne
    const [isVisible, setIsVisible] = useState(false)
    const [ isLoading, setisLoading ] = useState(false)
    const [ muted, setMuted ] = useState(true)
    const dispatch = useDispatch()

    const handleToggle = () => {
        setIsVisible(!isVisible)
    }

    const handleShare = (network) => {
        // if(network == "facebook") 
        dispatch(share_feed(item, network))
    }

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
                            <Text style = {styles.date__wrapper}>{date(item.date_publication)}</Text>
                        </View>
                    </View>
                    :null
                }
                {
                    item?.description ?
                    <Text style = {styles.description_wrapper} numberOfLines = {2}>{item.description}</Text>:null
                }
                
            </View>
            <View>
                {
                    item.photo != null?
                    <Image 
                        source={{uri: item.photo}}
                        style={[
                            styles.image,
                        ]}
                        progressiveRenderingEnabled = {true}
                        onLoadStart = {setisLoading}
                        onLoadEnd = {setisLoading}
                    />
                    :
                    <View>
                        <Video 
                            source={{uri: item.video}}               
                            style={styles.backgroundVideo}
                            resizeMode = "stretch"
                            ignoreSilentSwitch="ignore"
                            muted = {muted}
                        />
                        <TouchableOpacity 
                            style = {styles.btnVolume}
                            onPress = {() => setMuted(!muted)}
                        >
                            <Ionicons
                                name = {muted?'volume-mute':'volume-high'}
                                size = {20}
                            />
                        </TouchableOpacity>
                    </View>
                }
                <View style={styles.action}>
                    <TouchableOpacity onPress = {() => handleLike(item)}>
                        <Ionicons 
                            name="heart"
                            size={20}
                            color={item.likes.includes(userId)?'orange': colors.white}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => handleComment(item)}>
                        <Ionicons 
                            name="chatbubble"
                            size={20}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {handleToggle}>
                        <Ionicons 
                            name="share-social"
                            size={20}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FeedItem

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginHorizontal: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginVertical: 5,
        ...mixins.boxShadow('#000')
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
        width: 150,
        height: 40,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    backgroundVideo: {
        width: '100%',
        height: 400,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
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
    },
    description_wrapper: {
        margin: 10
    },
    date__wrapper: {
        fontSize: 10,
        color: '#777'
    },
    btnVolume: {
        height: 40,
        width: 40,
        borderRadius: 20,
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
