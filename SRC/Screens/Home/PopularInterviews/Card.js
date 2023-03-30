import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant';
import QAsection from '../components/QAsection'
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'



const chat = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.49998C0 8.7954 0.415671 10.0046 1.13493 11.0277L0.412082 13.5577C0.232474 14.1863 0.813661 14.7675 1.44228 14.5879L4.65454 13.6701C5.05611 13.8166 5.47513 13.933 5.90807 14.0161C5.9081 14.0162 5.90805 14.0161 5.90807 14.0161C6.42105 14.1147 6.95362 14.1667 7.49977 14.1667C7.63958 14.1667 7.77851 14.1633 7.91644 14.1566C7.91628 14.1566 7.91659 14.1566 7.91644 14.1566C11.8651 13.9647 15 11.0578 15 7.49998C15 3.81808 11.6422 0.833313 7.5 0.833313C3.35787 0.833313 0 3.81808 0 7.49998ZM2.73747 11.4856C2.87574 11.0016 2.78789 10.4811 2.49843 10.0693C1.96285 9.3074 1.66667 8.4294 1.66667 7.49998C1.66667 4.91768 4.08837 2.49998 7.5 2.49998C10.9117 2.49998 13.3333 4.91768 13.3333 7.49998C13.3333 10.0823 10.9117 12.5 7.5 12.5C6.68791 12.5 5.92037 12.3577 5.22568 12.1044C4.89516 11.9838 4.53496 11.9709 4.19667 12.0676L2.4267 12.5733L2.73747 11.4856Z" fill="#979797"/>
<path d="M16.2781 5.07324C16.5139 5.78577 16.6486 6.54408 16.6648 7.33737C17.7155 8.2673 18.3331 9.52933 18.3331 10.8334C18.3331 11.7628 18.0369 12.6408 17.5013 13.4027C17.2119 13.8145 17.124 14.3351 17.2623 14.819L17.5731 15.9067L15.8031 15.401C15.4648 15.3043 15.1046 15.3172 14.7741 15.4377C14.0794 15.6912 13.3118 15.8334 12.4997 15.8334C11.6841 15.8334 10.9251 15.6952 10.2422 15.4496C9.37983 15.6964 8.47008 15.8297 7.53875 15.8333C8.86092 16.8707 10.5977 17.5001 12.4997 17.5001C13.5069 17.5001 14.4678 17.3236 15.3453 17.0035L18.5575 17.9213C19.1861 18.1009 19.7673 17.5197 19.5877 16.8911L18.8648 14.3612C19.5841 13.3379 19.9998 12.1288 19.9998 10.8334C19.9998 8.37617 18.5043 6.22948 16.2781 5.07324Z" fill="#979797"/>
</svg>`

const Card = (props) => {
    const {darktheme}=useContext(AuthContext);

    const navigation = useNavigation();
    return (
        <View style={[styles.container, { width: props.width }]}>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <TouchableOpacity style={styles.imagebox}>
                    {/* image part wants to be set dynamically */}
                    <Image source={props.profilePic} style={styles.image} />
                </TouchableOpacity>
                <View style={styles.textbox}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* username wants to be set dynamically  */}
                        <Text style={styles.heading}>{props.profileName}</Text>
                        {/* time wants to be set dynamically  */}
                        <Text style={styles.heading1}> . 25 mins ago</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        {/* interview name wants to be set dynamically  */}
                        <SvgXml xml={chat} width={20} height={20} />
                        <Text style={styles.text1}>{props.tag}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.iconbox}>
                    <Icon name="more-horizontal" size={20} color={colors.IconStroke} />
                </TouchableOpacity>
            </View>
            <View style={styles.contentbox}>
                {/* content wants to be set dynamically  */}
                <Text numberOfLines={2} style={styles.content}>{props.statement1}</Text>
                <Text numberOfLines={2} style={styles.content1}>{props.statement2}</Text>
            </View>
            <View style={styles.qabox}>
                {/* modification done by passing props */}
                <QAsection />
            </View>
            <TouchableOpacity style={styles.button} onPress = {props.onPress}>
                <Text style={styles.buttontext}>Read Full Interview</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        borderRadius: 22,
        marginHorizontal: 10,
        marginVertical: 15,
        overflow: 'hidden',
        borderColor: colors.CardBackgroundStroke,
        borderWidth: 1,
    },
    imagebox: {
        width: 32,
        height: 32,
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
        width: 180,
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
        color: colors.primarycolor,
        fontFamily: fontfamily.fontRegular,
    },
    text1: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.regular,
        color: colors.primarycolor,
        fontFamily: fontfamily.fontRegular,
        marginLeft: 5,
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
        numofLines: 2,
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
    button: {
        width: '90%',
        height: 40,
        borderRadius: 15,
        backgroundColor: colors.LikeButton,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    buttontext: {
        fontSize: fontsize.subheading,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        color: colors.PostDescriptionAnswer,
        fontFamily: fontfamily.fontRegular,
    },



})