import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import data from '../../assets/data/data';
import colors from '../../assets/themes/colors';

const HotspotContainer1 = ({children, style}) => {

    return (
            <View style={[styles.container, style]}>
                 {children}
            </View>
    )
}

export default HotspotContainer1;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        height: '100%'
    }
})
