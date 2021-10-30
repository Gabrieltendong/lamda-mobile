import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Container from '../../components/Container';
import Btn from '../../components/Btn';
import colors from '../../assets/themes/colors';
import LinearGradient from 'react-native-linear-gradient';
import {SIGN_IN} from '../../constants/routeName';

import Swiper from 'react-native-swiper';

const HOME1 = require('../../assets/images/home1.jpeg')
const HOME2 = require('../../assets/images/home2.jpeg')
const HOME3 = require('../../assets/images/home3.jpeg')
const HOME4 = require('../../assets/images/home4.jpeg')

const Start = ({navigation}) => {
    return(
        <Container style={styles.wrapper}>
            <Swiper
                dotStyle={styles.dot}
                activeDotStyle={styles.dot}
                activeDotColor={colors.tertiary1}
                dotColor={colors.white}
            >
                <View style={styles.slide1}>
                    <View style={styles.view1}>
                        <Image 
                            source = {HOME1} 
                            style = {styles.imageStyle}
                            resizeMode = "contain"
                        />
                    </View>
                </View>
                <View style={styles.slide1}>
                    <View style={styles.view1}>
                        <Image 
                            source = {HOME2} 
                            style = {styles.imageStyle}
                            resizeMode = "contain"
                        />
                    </View>
                </View>
                <View style={styles.slide1}>
                    <View style={styles.view1}>
                        <Image 
                            source = {HOME3} 
                            style = {styles.imageStyle}
                            resizeMode = "contain"
                        />
                    </View>
                </View>
            </Swiper>
            <LinearGradient 
                colors={[colors.secondary2.first, colors.secondary2.second]} 
                style={styles.linearGradient}
            >
                <Btn 
                    title="DEMARRER"
                    onPress={() => navigation.navigate(SIGN_IN)}
                    color={colors.white}
                />
            </LinearGradient>  
        </Container>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        borderRadius: 50,
        marginBottom: 50,
        marginHorizontal: 30
    },
    imageStyle: {
        height: 300,
        width: '100%',
        borderRadius: 50
    },
    wrapper: {
        flex: 1
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    view1: {
        backgroundColor: colors.white,
        marginHorizontal: 40,
        height: 300,
        marginTop: '50%',
        borderRadius: 50
    },

    dot: {
        width: 30,
        height: 5,
    },
});

export default Start;