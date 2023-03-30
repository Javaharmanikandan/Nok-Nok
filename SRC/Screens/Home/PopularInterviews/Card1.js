import { StyleSheet, Text, View, Image, TouchableOpacity,Platform } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/Feather';
import QAsection from '../components/QAsection';
import LCSbar from '../components/LCSbar';
import InterviewButton from '../TopTrendingInterviews/InterviewButton';
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'
const Card1 = (props) => {
    const {darktheme}=useContext(AuthContext);

    return (
        <View style={[styles.container ,{width:props.width}]}>
            <View style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.imagebox}>
                        {/* image part wants to be set dynamically */}
                        <Image source={require('../../../Assets/photos/profilePic2.png')} style={styles.image} />
                    </TouchableOpacity>
                    <View style={styles.textbox}>
                        <View style={{ flexDirection: 'row' }}>
                            {/* username wants to be set dynamically  */}
                            <Text style={styles.heading}>Durai (EFP-India)</Text>
                            {/* time wants to be set dynamically  */}
                            <Text style={styles.heading1}> . 25 mins ago</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {/* interview name wants to be set dynamically  */} 
                            <Text style={styles.text}>Has Given Interview under  </Text>
                            <Text numberOfLines={1} style={styles.text1}>@Indian Economy</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.iconbox}>
                        <Icon name="more-horizontal" size={20} color={colors.IconStroke} />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentbox}>
                    {/* content wants to be set dynamically  */}
                    <Text style={styles.content}>Does the Rajya Sabha session ends amid din over Jagdeep Dhankhar’s remark on Sonia Gandhi?</Text>
                    <Text style={styles.content1}>May Congress stages a walkout over the Rajya Sabha Chairman’s observations against Ms. Gandhi’s comments during a party meeting</Text>
                </View>
                <View style={styles.qabox}>
                    {/* modification done by passing props */}
                    <QAsection />
                </View>
                <View style={styles.lcsbox}>
                    {/* modification done by passing props */}
                    <LCSbar />
                </View>
                <View style={styles.buttonbox}>
                    {/* navigation want to be set */}
                    <InterviewButton />
                </View>
            </View>
        </View>
    )
}

export default Card1

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 10,
        paddingVertical: 10,
        alignItems: 'center',
        alignSelf: 'center',
    },
    card: {
        width: '100%',
        height: 460,
        backgroundColor: colors.backgroundcolor,
        marginHorizontal: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colors.CardBackgroundStroke,
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
        width: '90%',
        height: 'auto',
        marginTop: 10,
        marginLeft: 11,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    heading: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.medium,
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
        color: colors.SubHeading,
        fontFamily: fontfamily.fontRegular,
    },
    text1: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.regular,
        color: colors.primarycolor,
        fontFamily: fontfamily.fontRegular,
        width:'35%'


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
        alignItems: 'center',
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