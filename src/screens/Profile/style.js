import { StyleSheet } from 'react-native';
import colors from '../../assets/themes/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        paddingHorizontal: 20
    },
    content_input: {
        borderBottomColor: '#f3f3f3',
        borderBottomWidth: 1,
        marginVertical: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        color: '#777',
        marginLeft: 10
    },
    label: {
        fontSize: 18
    },
    content_avatar: {
        height: 100,
        width: 100,
        backgroundColor: '#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    btn_photo:{
        height: 40,
        width: 40,
        borderRadius: 20,
        position: 'absolute',
        right: -15,
        bottom: -10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 15,
    },
    btn: {
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.primary1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    text_btn: {
        color: '#fff'
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 50,
        position: 'absolute'
    }
});