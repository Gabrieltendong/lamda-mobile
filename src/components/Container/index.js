import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/themes/colors';

const Container = ({style, children}) => {
    return (
        <LinearGradient colors={[colors.primary3.first, colors.primary3.second]}
            style={{flex: 1}}
        >
            <View style={[styles.wrapper, style]}>
                {children}
            </View>
        </LinearGradient>
    )
}

export default Container;