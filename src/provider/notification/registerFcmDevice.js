import {checkNotifications} from 'react-native-permissions';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import { updateToken, auth } from '../../api'
import { store } from '../../store/configureStore'

const registerFcmDevice = async () => {
    const { status } = await checkNotifications();
    const memoryUser = store.getState().userReducer.memoryUser

    // console.log('status', user)
    // Stop here if the user did not grant permissions
    if (status !== 'granted') {
        alert('No notification permissions!');
        return;
    }

    // Get the token that identifies this device
    // let pushtoken = await Notifications.getExpoPushTokenAsync();
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
        onRegister: async function(token) {
          auth(memoryUser)
          .then((resp) => {
              updateToken(
                resp.data.user,
                {token: token.token},
                resp.data.access
              )
              .then((res) => console.log("update token",res.data ))
              .catch((err) => console.log("error", err))
            })
          
        },
        onNotification: function (notification) {
          // process the notification

          // (required) Called when a remote is received or opened, or local notification is opened
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },

        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,

        requestPermissions: true,
      }

    )
}

export default registerFcmDevice