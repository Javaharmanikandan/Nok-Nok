import { StyleSheet, Text, View, TouchableOpacity,ScrollView,Platform } from 'react-native'
import React from 'react'
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'
const DiscoverMediaHouse = (item) => {
    const {darktheme}=useContext(AuthContext);

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textbox}>
                    <Text style={styles.text}>Discover Media House</Text>
                    <Text style={styles.text1}>Pick your favorite topics</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DiscoverPage',{item})}>
                    <Text style={styles.text2}> See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft:10}} fadingEdgeLength={100}>
                <Card/>
                <Card/>
                <Card/>
            </ScrollView>
        </View>
    )
}

export default DiscoverMediaHouse

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 15,
    },
    text: {
        fontSize: fontsize.heading,
        fontWeight: Platform === 'ios' ? fontWeight.regular: fontWeight.bold,
        fontFamily: fontfamily.fontRegular,
        color: colors.HeadingProfileTitles,
        letterSpacing: 0.5,
    },
    text1: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.regular,
        fontFamily: fontfamily.fontRegular,
        color: colors.SubHeading,
        marginTop: 5,
        letterSpacing: 0.5,
    },
    button: {
        borderRadius: 10,
        paddingVertical: 5,
    },
    text2: {
        fontSize: fontsize.paragraph,
        fontWeight: Platform === 'ios' ? fontWeight.regular: fontWeight.bold,
        fontFamily: fontfamily.fontRegular,
        color: colors.primarycolor,
        letterSpacing: 0.5,
    },


})