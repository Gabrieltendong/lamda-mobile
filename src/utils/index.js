import {request, PERMISSIONS, RESULTS, check} from 'react-native-permissions';


const generateToken = () => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 100; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }
   return result;
}

export const get_register_form = (data) => {
    const dataForm = new FormData()
    dataForm.append("first_name", data.first_name)
    dataForm.append("last_name", data.last_name)
    dataForm.append("telephone", data.telephone)
    dataForm.append("sexe", data.sexe)
    dataForm.append("avatar", data.avatar != undefined? {
        uri: data.avatar.uri,
        type: data.avatar.type,
        name: data.avatar.fileName
    }: "")
    dataForm.append("email", data.email)
    dataForm.append("password", data.password)
    dataForm.append("token", "")

    return dataForm
}

export const storeUser = (data) => {
    return {
        email: data.email,
        password: data.password
    }
}

export const checkAccessLocation = () => {
    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    .then((result) => {
        switch (result) {
        case RESULTS.UNAVAILABLE:
            console.log('This feature is not available (on this device / in this context)');
            break;
        case RESULTS.DENIED:
            console.log('The permission has not been requested / is denied but requestable');
            break;
        case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
        case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
        case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
    })
    .catch((error) => {
        // …
    });
}