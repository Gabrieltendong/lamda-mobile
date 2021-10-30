import RNFetchBlob from 'rn-fetch-blob'
import { 
    getFeed,
    getDetailFeed, 
    shareFeed, 
    commentFeed, 
    seeFeed, 
    followFeed,
    auth,
    getCommentFeed,
    onLike
} from '../../api';
import { URL } from '../../api/config'

import { 
    UPDATE_LIST_FEED, 
    SET_LIST_COMMENT_FEED 
} from './type'

import Share from 'react-native-share';
import { ShareDialog } from 'react-native-fbsdk-next';

import { uiLoading } from './uiLoading'
import { store } from '../configureStore'
import { get_piece_or } from './user';

const user = store.getState().userReducer.memoryUser
const infosUser =  store.getState().userReducer
const userId = store.getState().userReducer.user.abonne
const list_feed = store.getState().feed.list

export const get_feed = () => (dispatch) => {
    dispatch(uiLoading())
    auth(user).then((res) => {
        getFeed(res.data.access)
        .then((resp) => {
            dispatch(uiLoading())
            dispatch({
                type: UPDATE_LIST_FEED,
                value: resp.data
            })
            console.log("get feed", resp.data)
        })
        .catch((err) => {
            dispatch(uiLoading())
            console.log("err feed", err)
        })
    })
    .catch((err) => console.log("connect error"))
}

export const get_detail_feed = (idFeed) => (dispatch) => {
    auth(user).then((res) => {
        getDetailFeed(idFeed, res.data.access)
        .then((resp) => {
            console.log("get detail feed", resp.data )
        })
        .catch((err) => {
            console.log("err detail feed", err)
        })
    })
}

export const share_feed = (feed, network) => (dispatch) => {
    console.log("infosUser", infosUser)
    let imagePath = null;
    let shareOptions = {
        title: 'Share via',
        message: 'some message',
        social: Share.Social.WHATSAPP, // only for base64 file in Android
    };
    RNFetchBlob.config({
        fileCache : true,
      }).fetch('GET','https://graphiste.com/blog/wp-content/uploads/2017/06/Affiche-test-court-Graphiste.jpg', {})
      .then((res) => {
          imagePath = res.path();
          return res.readFile("base64");
      })
      .then(async  base64Data => {
        var base64Data = `data:image/png;base64,` + base64Data;
        if(network == 'facebook') {
            console.log("reseau", network)
            const shareLinkContent = {
                contentType: 'link',
                contentUrl: "https://graphiste.com/blog/wp-content/uploads/2017/06/Affiche-test-court-Graphiste.jpg",
                quote: 'I am a message',
            };
          ShareDialog.show(shareLinkContent)
          .then((resp) => {
                dispatch(get_piece_or(2))
          })
        }
        if(network == 'twitter') shareOptions.social = Share.Social.TWITTER
        
        shareOptions.url = base64Data
        Share.shareSingle(shareOptions)
        .then((res) => { 
            dispatch(get_piece_or(2))
         })
        .catch((err) => { err && console.log(err); });
        
      })
    
}

const handleshareFeed = (idFeed, reseau, user) => {
    auth(user).then((res) => {
        shareFeed(idFeed, {reseau}, res.data.access)
        .then((resp) => {
            console.log("resp share feed", resp)
        })
        .catch((err) => {
            console.log("err share feed", err)
        })
    })
}

export const comment_feed = (idFeed, data) => (dispatch) => {
    auth(user).then((res) => {
        commentFeed(idFeed, data, res.data.access)
        .then((resp) => {
            dispatch(get_comment_feed(idFeed))
            console.log("resp comment feed", resp.data)
        })
        .catch((err) => {
            console.log("err comment feed", err)
        })
    })
}

export const see_feed = (idFeed) => (dispatch) => {
    auth(user).then((res) => {
        seeFeed(idFeed, res.data.access)
        .then((resp) => {
            console.log("resp see feed", resp.data)
        })
        .catch((err) => {
            console.log("err see feed")
        })
    })
}

export const like_feed = (idFeed) => (dispatch) => {
    auth(user).then((res) => {
        onLike(idFeed, res.data.access)
        .then((resp) => {
            const feeds = [...list_feed]
            const index = feeds.findIndex(item => item.id == idFeed)
            if(feeds[index].likes.findIndex(item => item == userId) == -1){
                feeds[index].likes.push(userId)
                dispatch({
                    type: UPDATE_LIST_FEED,
                    value: feeds
                })
                console.log("index feed", feeds[index])
            }
            console.log("resp like feed", resp.data)
        })
        .catch((err) => {
            console.log("err like feed", err)
        })
    })
}

export const get_comment_feed = (idFeed) => (dispatch) => {
    dispatch(uiLoading())
    auth(user).then((res) => {
        getCommentFeed(idFeed, res.data.access)
        .then((resp) => {
            dispatch(uiLoading())
            dispatch({
                type: SET_LIST_COMMENT_FEED,
                value: resp.data.data
            })
            console.log("resp get comment feed", resp.data.data)
        })
        .catch((err) => {
            dispatch(uiLoading())
            console.log("err get comment feed", err)
        })
    })
}