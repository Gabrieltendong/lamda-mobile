import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MapView, {Marker} from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux'

import colors from '../../assets/themes/colors';
import Btn from '../../components/Btn';
import HotspotItem from '../../components/HotspotItem';
import { connectWifi } from '@store/actions'
import Loading from '../../components/Loading';

const Hotspot = ({route}) => {

    const {item} = route.params
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.application.isLoading)

    return(
        <View style = {styles.container}>
            <Loading isVisible = {isLoading} />
            <MapView
                style = {{flex: 1}}
                initialRegion={{
                    latitude: parseFloat(item.latitude),
                    longitude: parseFloat(item.longitude),
                    latitudeDelta: 0.3,
                    longitudeDelta: 0.1,
                }}
                minZoomLevel = {17}
            >
                <Marker
                    coordinate={{ latitude : parseFloat(item.latitude) , longitude : parseFloat(item.longitude) }}
                    title={item.designation}
                    description={item.description}
                />
            </MapView>
            <View style = {styles.footer}>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.title}>{item.designation}</Text>
                        <Text style={styles.subTitle}>DOUALA</Text>
                        <Text style={styles.subTitle}>PK 17, RADIO TELECOM</Text>
                    </View>
                    <View style={{marginRight: 10}}>
                        <Ionicons name="wifi-outline" size={30} color={colors.green} />
                        <Text style={styles.subTitle}>{parseInt(item.distance)} Km</Text>
                    </View>
                </View>
                <Btn 
                    title="Se connecter"
                    onPress={() => dispatch(connectWifi(item))}
                    style={styles.btn}
                    color={colors.white}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    footer: {
        width: '100%',
        height: 200,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: "#fff",
        position: 'absolute',
        bottom: 0,
        paddingTop: 10,
        paddingHorizontal: 40
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 13,
        color: colors.grey
    },
    btn: {
        backgroundColor: colors.green,
        marginTop: 20
    }
});

export default Hotspot;