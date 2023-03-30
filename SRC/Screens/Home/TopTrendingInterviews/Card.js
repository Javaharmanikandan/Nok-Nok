import { StyleSheet, Text, View, Image, TouchableOpacity,Platform } from 'react-native'
import React from 'react'
import { colors,LightThemeColors, fontWeight, fontfamily, fontsize } from '../../../Constant/DesignConstant'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'
const Card = (props) => {
    const {darktheme}=useContext(AuthContext);

    return (
        <View style={[styles.container,{width:props.width,height:props.height}]}>
            <View style={styles.imagebox}>
                {/* image wants to change dynamically */}
                <Image source={props.image} style={styles.image} />
            </View>
            <View style={styles.textbox}>
                {/* heading wants to change dynamically */}
                <Text style={styles.heading}>{props.heading}</Text>
            </View>
            <View style={styles.textcontent}>
                {/* contents wants to change dynamically */}
                <Text style={styles.text}>{props.question}</Text>
            </View>
            <View style={styles.textcontent1}>
                {/* Q&A now it is in button view  */}
                <TouchableOpacity style={styles.textbox1} >
                    <Text style={styles.text1}>Q&A</Text>
                </TouchableOpacity>
                {/*  question counts wants dicuss with jawahar sir */}
                <Text style={styles.text2}>  .</Text>
                <Text style={styles.text2}> 1</Text>
                <Text style={styles.text2}> questions </Text>
            </View>

        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        width: 193,
        height: 284,
        backgroundColor: colors.CardBackground,
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: colors.CardBackgroundStroke,
        overflow: 'hidden',
    },
    imagebox: {
        width: '90%',
        height: '35%',
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        overflow: 'hidden',
    },
    textbox: {
        width: '90%',
        height: 'auto',
        marginLeft: 10,
        overflow: 'hidden',
    },
    heading: {
        fontSize: fontsize.small,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        marginTop: 20,
        letterSpacing: 2,
    },
    textcontent: {
        width: '90%',
        height: '30%',
        paddingVertical: 10,
        marginLeft: 10,
        overflow: 'hidden',
    },
    text: {
        fontSize: fontsize.paragraph,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        color: colors.PostTitleQuestion,
        fontFamily: fontfamily.fontRegular,
        lineHeight: 20,
    },
    textcontent1: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 'auto',
        marginLeft: 10,
        overflow: 'hidden',
        marginTop: 10,
    },
    textbox1: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.PrimaryTinyBtn,
        borderRadius: 15,
    },
    text1: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.medium,
        color: colors.primarycolor,
        fontFamily: fontfamily.fontRegular,
        // padding: 5,
    },
    text2: {
        fontSize: fontsize.paragraph,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        color: colors.primarycolor,
        fontFamily: fontfamily.fontRegular,
    },


})