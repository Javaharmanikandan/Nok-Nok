import { StyleSheet, Text, View, Image, TouchableOpacity,Platform } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import QAsection from '../components/QAsection';
import LCSbar from '../components/LCSbar';
import InterviewButton from './InterviewButton';
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'
const Card1 = (item) => {
    const {darktheme}=useContext(AuthContext);

    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ReadInterviews', { item: item })}>
            <View style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.imagebox}>
                        {/* image part wants to be set dynamically */}
                        <Image source={require('../../../Assets/photos/profilePic.png')} style={styles.image} />
                    </TouchableOpacity>
                    <View style={styles.textbox}>
                        <View style={{ flexDirection: 'row',alignItems:'center' }}>
                            {/* username wants to be set dynamically  */}
                            <Text style={styles.heading}>Sonu Maveric</Text>
                            {/* time wants to be set dynamically  */}
                            <Text style={styles.heading1}> . 25 mins ago</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {/* interview name wants to be set dynamically  */} 
                            <Text style={styles.text}>Has Given Interview under  </Text>
                            <Text style={styles.text1}>@Indian Economy</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.iconbox}>
                        <Icon name="more-horizontal" size={20} color={colors.IconStroke} />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentbox}>
                    {/* content wants to be set dynamically  */}
                    <Text style={styles.content}>Name the sector that is the largest employer in India. Why does this sector produce only a 14% of the National GDP?</Text>
                    <Text style={styles.content1}>The World Bank has revised its 2022-23 GDP forecast upward to 6.9 percent from 6.5 percent (in October 2022), considering a strong outturn in India ...</Text>
                </View>
                <View style={styles.qabox}>
                    {/* modification done by passing props */}
                    <QAsection />
                </View>
                <View style={styles.lcsbox}>
                    {/* modification done by passing props */}
                    <LCSbar />
                </View>
                <View style={styles.buttonbox} >
                    {/* navigation want to be set */}
                    <InterviewButton />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    card: {
        width: '100%',
        height: 460,
        backgroundColor: colors.backgroundcolor,
        borderRadius: 30,
        borderWidth: .5,
        borderColor: colors.CardBackgroundStroke
    },
    imagebox: {
        width: 46,
        height: 46,
        borderRadius: 22,
        marginTop: 15,
        marginLeft: 15,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textbox: {
        width: '100%',
        height: 'auto',
        marginTop: 10,
        marginLeft: 11,
        overflow: 'hidden',
        justifyContent: 'center',
        
    },
    heading: {
        fontSize: fontsize.paragraph,
        FontWeight: fontWeight.regular,
        color: colors.HeadingProfileTitles,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
    },
    heading1: {
        fontSize: fontsize.numbers,
        fontWeight: fontWeight.regular,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
    },
    text: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.regular,
        color:colors.SubHeading,
        fontFamily: fontfamily.fontRegular,
    },
    text1: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.regular,
        color: colors.primarycolor,
        fontFamily: fontfamily.fontRegular,
    },
    iconbox: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 15,
        top: 15,    
    },
    icon: {
        width: '100%',
        height: '100%',    
    },
    contentbox: {
        width: '90%',
        height: 'auto',
        marginTop: 10,
        marginLeft: 15,
    },
    content: {
        fontSize: fontsize.subheading,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        color: colors.PostTitleQuestion,
        fontFamily: fontfamily.fontRegular,
        marginTop: 10,
        lineHeight: 25,
    },
    content1: {

        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.regular,
        color: colors.PostDescriptionAnswer,
        fontFamily: fontfamily.fontRegular,
        marginTop: 10,
        lineHeight: 24,
    },
    qabox: {
        width: '90%',
        height: 'auto',
        marginTop: 24,
        marginLeft: 15,
    },
    lcsbox: {
        width: '90%',
        height: 'auto',
        marginTop: 15,
        marginLeft: 15,
    },
    buttonbox: {
        width: '90%',
        height: 'auto',
        marginTop: 15,
        marginLeft: 15,
    },
})