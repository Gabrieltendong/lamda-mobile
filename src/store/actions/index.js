import { register, confirmeCode, login, getProfilUser, get_abonne } from './user';
import { getAllAccessPoint, connectWifi } from './accessPoint';
import { follow_enterprise, get_profil_enterprise } from './client'
import { 
    get_detail_feed, 
    get_feed, share_feed, 
    comment_feed, see_feed,
    get_comment_feed,
    like_feed
} from './feed'
import { get_stores } from './store'

export {
    register,
    confirmeCode,
    login,
    getAllAccessPoint,
    getProfilUser,
    get_detail_feed, 
    get_feed, share_feed, 
    comment_feed, see_feed, 
    follow_enterprise,
    connectWifi,
    get_comment_feed,
    get_abonne,
    like_feed,
    get_profil_enterprise,
    get_stores
}