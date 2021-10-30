import React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import data from '../../assets/data/data';
import colors from '../../assets/themes/colors';

const HotspotContainer = ({children, style}) => {

    return (
            <View style={[styles.container, style]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                 {children}
                </ScrollView>
            </View>
    )
}

export default HotspotContainer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    }
})
