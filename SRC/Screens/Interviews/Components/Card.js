import { StyleSheet, Text, View, Image, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SvgXml } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Feather';
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant'
import InterViewCard from './InterViewCard';
import SuggestedInterviews from './SuggestedInterviews';
import LCSbar from '../../Home/components/LCSbar';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'


const share = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M5.625 9.26542C7.18354 9.26542 8.59177 9.90885 9.61234 10.9464C9.84177 11.1796 10.0554 11.437 10.2453 11.7105L19.1456 7.94638C18.8608 7.26273 18.7104 6.51475 18.7104 5.73458C18.7104 4.15013 19.3434 2.7185 20.3639 1.68097C21.3845 0.643432 22.7927 0 24.3513 0C25.9098 0 27.318 0.643432 28.3386 1.68097C29.3592 2.7185 29.9921 4.15013 29.9921 5.73458C29.9921 7.31903 29.3592 8.75067 28.3386 9.7882C27.318 10.8257 25.9098 11.4692 24.3513 11.4692C22.7927 11.4692 21.3845 10.8257 20.3639 9.7882C20.1899 9.61126 20.0237 9.41823 19.8734 9.21716L10.9177 13.0054C11.1472 13.6247 11.2737 14.3003 11.2737 15C11.2737 15.4343 11.2263 15.8525 11.1392 16.2627L20.087 20.5255C20.1741 20.4209 20.269 20.3164 20.3718 20.2118C21.3924 19.1743 22.8006 18.5308 24.3592 18.5308C25.9177 18.5308 27.3259 19.1743 28.3465 20.2118C29.3671 21.2493 30 22.681 30 24.2654C30 25.8499 29.3671 27.2815 28.3465 28.319C27.3259 29.3566 25.9177 30 24.3592 30C22.8006 30 21.3924 29.3566 20.3718 28.319C19.3513 27.2815 18.7184 25.8499 18.7184 24.2654C18.7184 23.3646 18.9241 22.504 19.2959 21.748L10.6566 17.63C10.3877 18.1609 10.0396 18.6434 9.62816 19.0536C8.6076 20.0912 7.19937 20.7346 5.64082 20.7346C4.08228 20.7346 2.67405 20.0912 1.65348 19.0536C0.632911 18.0161 0 16.5844 0 15C0 13.4155 0.632911 11.9839 1.65348 10.9464C2.67405 9.90885 4.08228 9.26542 5.64082 9.26542H5.625ZM27.318 2.71046C26.5585 1.93834 25.5063 1.45576 24.3434 1.45576C23.1804 1.45576 22.1282 1.93834 21.3687 2.71046C20.6092 3.48257 20.1345 4.55228 20.1345 5.73458C20.1345 6.91689 20.6092 7.9866 21.3687 8.75871C22.1282 9.53083 23.1804 10.0134 24.3434 10.0134C25.5063 10.0134 26.5585 9.53083 27.318 8.75871C28.0775 7.9866 28.5522 6.91689 28.5522 5.73458C28.5522 4.55228 28.0775 3.48257 27.318 2.71046ZM27.318 21.2332C26.5585 20.4611 25.5063 19.9786 24.3434 19.9786C23.1804 19.9786 22.1282 20.4611 21.3687 21.2332C20.6092 22.0054 20.1345 23.0751 20.1345 24.2574C20.1345 25.4397 20.6092 26.5094 21.3687 27.2815C22.1282 28.0536 23.1804 28.5362 24.3434 28.5362C25.5063 28.5362 26.5585 28.0536 27.318 27.2815C28.0775 26.5094 28.5522 25.4397 28.5522 24.2574C28.5522 23.0751 28.0775 22.0054 27.318 21.2332ZM8.59968 11.9678C7.84019 11.1957 6.78797 10.7131 5.625 10.7131C4.46203 10.7131 3.40981 11.1957 2.65032 11.9678C1.89082 12.7399 1.41614 13.8097 1.41614 14.992C1.41614 16.1743 1.89082 17.244 2.65032 18.0161C3.40981 18.7882 4.46203 19.2708 5.625 19.2708C6.78797 19.2708 7.84019 18.7882 8.59968 18.0161C9.35918 17.244 9.83386 16.1743 9.83386 14.992C9.83386 13.8097 9.35918 12.7399 8.59968 11.9678Z" fill="#A8A8A8"/>
</svg>`

const profile = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<rect width="30" height="30" rx="15" fill="white" fill-opacity="0.12"/>
<path d="M14.1847 20.6H10.3695C10.0348 20.6 9.70013 20.39 9.56626 20.11C9.36546 19.83 9.36546 19.55 9.49933 19.2C10.3025 17.24 12.1098 15.91 14.1847 15.91C16.2597 15.91 18 14.09 18 11.92C18 9.75 16.2597 8 14.1178 8C12.0428 8 10.3025 9.82 10.3025 11.99C10.3025 13.25 10.838 14.37 11.7082 15.07C10.1687 15.7 8.82998 17.03 8.16064 18.71C7.89291 19.41 7.95984 20.25 8.36144 20.88C8.82998 21.58 9.49933 22 10.3025 22H14.1178C14.5194 22 14.7872 21.72 14.7872 21.3C14.7872 20.88 14.5194 20.6 14.1847 20.6ZM11.6412 11.99C11.6412 10.59 12.7791 9.4 14.1178 9.4C15.4565 9.4 16.5944 10.59 16.5944 11.99C16.5944 13.39 15.4565 14.58 14.1178 14.58C12.7791 14.58 11.6412 13.39 11.6412 11.99Z" fill="#C1C1C1"/>
<path d="M21.3478 17.7391H19.6522V15.7609C19.6522 15.3043 19.3913 15 19 15C18.6087 15 18.3478 15.3043 18.3478 15.7609V17.7391H16.6522C16.2609 17.7391 16 18.0435 16 18.5C16 18.9565 16.2609 19.2609 16.6522 19.2609H18.3478V21.2391C18.3478 21.6957 18.6087 22 19 22C19.3913 22 19.6522 21.6957 19.6522 21.2391V19.2609H21.3478C21.7391 19.2609 22 18.9565 22 18.5C22 18.0435 21.7391 17.7391 21.3478 17.7391Z" fill="#C1C1C1"/>
</svg>`
const more = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
<path d="M10 6.001H22M6 6.011L6.01 6M6 12.011L6.01 12M10 12.001H22" stroke="#C1C1C1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="0.5" y="0.5" width="27" height="17.011" rx="3.5" stroke="#7A7A7A"/>
</svg>`
const heart = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
<path d="M14.3 0C12.6 0 11.1 0.68786 10 1.96532C8.9 0.68786 7.4 0 5.7 0C2.6 0 0 2.55491 0 5.60116C0 5.79769 0 5.99422 0 6.19075C0.4 10.8092 5.4 14.6416 8.3 16.5087C8.8 16.8035 9.4 17 10 17C10.6 17 11.2 16.8035 11.7 16.5087C14.6 14.6416 19.6 10.8092 20 6.28902C20 6.09249 20 5.89595 20 5.69942C20 2.55491 17.4 0 14.3 0ZM18 5.99422C17.7 9.9249 12.7 13.4624 10.6 14.7399C10.2 14.9364 9.8 14.9364 9.4 14.7399C7.3 13.3642 2.4 9.8266 2 5.89595C2 5.89595 2 5.69942 2 5.60116C2 3.63584 3.7 1.96532 5.7 1.96532C7.2 1.96532 8.5 2.84971 9.1 4.12717C9.2 4.52023 9.6 4.71676 10 4.71676C10.4 4.71676 10.8 4.52023 10.9 4.12717C11.5 2.84971 12.8 1.96532 14.3 1.96532C16.3 1.96532 18 3.63584 18 5.60116C18 5.69942 18 5.89595 18 5.99422Z" fill="#A8A8A8"/>
</svg>`
const comment = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M1.8 20C1.3 20 0.9 19.8 0.5 19.5C0 19 -0.1 18.3 0.0999999 17.7L1.1 14.6C0.4 13.2 0 11.6 0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C8.4 20 6.8 19.6 5.4 18.9L2.3 19.9C2.2 20 2 20 1.8 20ZM6 16.9C7.2 17.6 8.6 18 10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2C5.6 2 2 5.6 2 10C2 11.4 2.4 12.8 3.1 14C3.2 14.2 3.3 14.5 3.2 14.8L2.2 17.9L5.3 16.9C5.3 16.9 5.90219 16.8511 6 16.9Z" fill="#A8A8A8"/>
</svg>`
const rightarrow = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
<path d="M1 1L7 7L1 13" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const downarrow = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path d="M13 1L7 7L1 1" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const bookmark = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" viewBox="0 0 16 23" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.69922V19.2127C2 19.9194 2.80487 20.2083 3.23991 19.8105L7.2649 16.0283C7.6497 15.6666 8.2495 15.6666 8.6344 16.0283L12.6595 19.8106C12.883 20.0152 13.1805 20.0544 13.4771 19.9289C13.7766 19.8021 13.9696 19.5497 14 19.2723V3.66028C14 2.7652 13.2243 2 12.3813 2H3.71942C2.89718 2 2.08312 2.74986 2 3.69922ZM0.00246 3.59014C0.13612 1.6893 1.73051 0 3.71942 0H12.3813C14.3584 0 16 1.69045 16 3.66028V19.315C16 19.3384 15.9992 19.3618 15.9975 19.3851C15.843 21.5835 13.0758 22.9175 11.3 21.2775L11.2936 21.2716L7.9496 18.1293L4.59935 21.2775C2.81798 22.9226 0 21.5742 0 19.2127V3.66028C0 3.63688 0.000820003 3.61349 0.00246 3.59014Z" fill="#A8A8A8"/>
</svg>`
const bookmarkpink = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" viewBox="0 0 16 23" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.69922V19.2127C2 19.9194 2.80487 20.2083 3.23991 19.8105L7.2649 16.0283C7.6497 15.6666 8.2495 15.6666 8.6344 16.0283L12.6595 19.8106C12.883 20.0152 13.1805 20.0544 13.4771 19.9289C13.7766 19.8021 13.9696 19.5497 14 19.2723V3.66028C14 2.7652 13.2243 2 12.3813 2H3.71942C2.89718 2 2.08312 2.74986 2 3.69922ZM0.00246 3.59014C0.13612 1.6893 1.73051 0 3.71942 0H12.3813C14.3584 0 16 1.69045 16 3.66028V19.315C16 19.3384 15.9992 19.3618 15.9975 19.3851C15.843 21.5835 13.0758 22.9175 11.3 21.2775L11.2936 21.2716L7.9496 18.1293L4.59935 21.2775C2.81798 22.9226 0 21.5742 0 19.2127V3.66028C0 3.63688 0.000820003 3.61349 0.00246 3.59014Z" fill="url(#paint0_linear_168_2315)"/>
<path d="M2 3.69922V19.2127C2 19.9194 2.80487 20.2083 3.23991 19.8105L7.2649 16.0283C7.6497 15.6666 8.2495 15.6666 8.6344 16.0283L12.6595 19.8106C12.883 20.0152 13.1805 20.0544 13.4771 19.9289C13.7766 19.8021 13.9696 19.5497 14 19.2723V3.66028C14 2.7652 13.2243 2 12.3813 2H3.71942C2.89718 2 2.08312 2.74986 2 3.69922Z" fill="url(#paint1_linear_168_2315)"/>
<defs>
<linearGradient id="paint0_linear_168_2315" x1="8" y1="-3.24996e-07" x2="15.5" y2="13.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F98EC4"/>
<stop offset="1" stop-color="#55387A"/>
</linearGradient>
<linearGradient id="paint1_linear_168_2315" x1="8" y1="-3.24996e-07" x2="15.5" y2="13.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F98EC4"/>
<stop offset="1" stop-color="#55387A"/>
</linearGradient>
</defs>
</svg>`






const Card = (props) => {
    const {darktheme}=useContext(AuthContext);

    const [description, setDescription] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={styles.cardHeaderContent}>
                        <Image source={require('../../../Assets/photos/proficPic3.png')} style={styles.image} />
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.name}>Rock forest</Text>
                                <Text style={styles.time}>.</Text>
                                <Text style={styles.Text}>1d ago</Text>
                            </View>
                            <View style={styles.card1}>
                                <Text style={styles.card1Text}>has Interviewed </Text>
                                <TouchableOpacity>
                                    <Text style={styles.card1Text1}>@Roven harry br cruze</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.Icon}>
                        <SvgXml xml={profile} width="30" height="30" style={{ marginLeft: 10 }} />
                        <Icon name="more-horizontal" size={20} color={colors.PostDescriptionAnswer} style={{ marginLeft: 10 }} />
                    </View>
                </View>
                <View>
                    <Image source={require('../../../Assets/photos/CoolectionPic.png')} style={styles.image1} />
                </View>
                <View style={styles.cardFooter}>
                    <Text style={styles.Footertext}>Do you think that the mountain valley need to be reserved by our Indian Govt?</Text>
                </View>

                <View style={styles.lcsbox}>
                    {/* modification done by passing props */}
                    <LCSbar />
                </View>

                <View style={styles.LikeCommentDiscrip}>      
                {/*  */}
                    {/* <View style={styles.LikeCommentBox}>
                        <TouchableOpacity style={styles.LikeComment}>
                            <SvgXml xml={heart} width="20" height="17" />
                            <Text style={styles.LikeCommentText}>11</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.LikeComment, { marginLeft: 10 }]}>
                            <SvgXml xml={comment} width="20" height="20" style={{ marginLeft: 10 }} />
                            <Text style={styles.LikeCommentText}>12</Text>
                        </TouchableOpacity>
                    </View>  */}
                    <TouchableOpacity style={styles.LikeComment} onPress={() => setDescription(!description)}>
                        <Text style={styles.LikeCommentText}>Read Description</Text>
                        {description ? <SvgXml xml={rightarrow} width="8" height="14" style={{ marginLeft: 10 }}/>:<SvgXml xml={downarrow} width="14" height="8" style={{ marginLeft: 10 }} /> }
                    </TouchableOpacity>
                </View>
                
                    <Text  numberOfLines={!!description ? 2: 1000}
                    style={styles.discription}>Natural phenomena such as earthquakes, mountain formation, and volcanoes occur at plate boundaries. Mountains are usually formed at what are called convergent plate boundaries, meaning a boundary at which two plates are moving towards one another. </Text>
                   
                   {/* <TouchableOpacity style={styles.LikeComment} onPress={() => setDescription(!description)}>
                        <Text style={styles.LikeCommentText}>{description ? 'Read Less' : 'Read More'}</Text>
                        </TouchableOpacity> */}
            </View>

            <InterViewCard activeTab={props.activeTab} />
            {
                props.activeTab ? (
                    <View style={styles.card}>
                        <View style={styles.LikeCommentBox}>
                            <TouchableOpacity style={styles.LikeComment}>
                                <SvgXml xml={heart} width="20" height="17" />
                                <Text style={[styles.LikeCommentText, { marginLeft: 10 }]}>11</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.LikeComment, { marginLeft: 10 }]}>
                                <SvgXml xml={comment} width="20" height="20" style={{ marginLeft: 10 }} />
                                <Text style={[styles.LikeCommentText, { marginLeft: 10 }]}>12</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.LikeComment, { marginLeft: 10 }]}>
                                <SvgXml xml={share} width="20" height="20" style={{ marginLeft: 10 }} />
                                <Text style={[styles.LikeCommentText, { marginLeft: 10 }]}>12</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bookmark}>
                                <SvgXml xml={bookmark} width="20" height="20" style={{ marginLeft: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.cardFooter1}>
                            <Text style={styles.Footertext1}>If you are really interested to answer this Interview, you can request this interviews to the interviewer then if the interviewer wishes, will grant you to answer.</Text>
                            <TouchableOpacity style={styles.readLess}>
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity style={styles.RequestInterviewButton}>
                            <Text style={styles.RequestInterviewButtonText}>Request Interview</Text>
                        </TouchableOpacity>
                    </View>
                ) : null
            }

            <SuggestedInterviews />
        </View >
    )
}



export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
        alignItems: 'center',
        width: '100%',
    },
    card: {
        borderRadius: 10,
        marginVertical: 10,
        width: '95%',
    },
    cardHeader: {
        width: '100%',
        flexDirection: 'row',
    },
    image: {
        width: 36,
        height: 36,
        borderRadius: 25,
    },
    cardHeaderContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        fontFamily: Platform.OS === 'ios' ? fontfamily.ios : fontfamily.fontRegular2,
        fontSize: fontsize.paragraph,
        color: colors.HeadingProfileTitles,
        marginLeft: 10,
    },
    time: {
        fontFamily: fontWeight.fontRegular,
        fontSize: fontsize.paragraph,
        color: colors.PostDescriptionAnswer,
        marginLeft: 5,
        marginBottom: 5,
    },
    Text: {
        fontFamily: fontWeight.fontRegular,
        fontSize: fontsize.numbers,
        color: colors.PostDescriptionAnswer,
        marginLeft: 5,
    },
    image1: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    },
    cardFooter: {
        marginTop: 20,
    },
    Footertext: {
        fontFamily: fontWeight.fontRegular,
        fontSize: fontsize.subheading,
        fontWeight: fontWeight.medium,
        color: colors.HeadingProfileTitles,
        lineHeight: 26,
    },
    LikeCommentDiscrip: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        justifyContent: 'space-between',
    },
    LikeCommentBox: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    LikeComment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    LikeCommentText: {
        fontFamily: fontWeight.fontRegular,
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.medium,
        color: colors.IconStroke,

    },
    discriptionBox: {
        marginTop: 10
    },
    discription: {
        fontFamily: fontfamily.fontRegular1,
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.regular,
        color: colors.PostDescriptionAnswer,
        lineHeight: 26,
    },
    cardFooter1: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        width: '95%',
        marginLeft: 10
    },
    Footertext1: {
        fontFamily: fontWeight.fontRegular,
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.medium,
        color: colors.SubHeading,
        lineHeight: 18,
    },
    RequestInterviewButton: {
        backgroundColor: '#313A49',
        width: '100%',
        height: 40,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    RequestInterviewButtonText: {
        fontFamily: fontWeight.fontRegular,
        fontSize: fontsize.subheading,
        fontWeight: fontWeight.medium,
        color: colors.HeadingProfileTitles,
    },
    card1: {
        marginLeft: 10,
        // backgroundColor: colors.backgroundcolor,
        flexDirection: 'row',
        alignItems: 'center',
    },
    card1Text: {
        fontFamily: fontWeight.fontRegular,
        fontSize: fontsize.numbers,
        fontWeight: fontWeight.regular,
        color: colors.SubHeading,
        letterSpacing: 0.5,
    },
    card1Text1: {
        fontFamily: fontWeight.fontRegular,
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.regular,
        color: colors.primarycolor,
        // marginLeft: 5,
        letterSpacing: 0.5,
    },
    bookmark: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        top: 15,
    },
    Icon: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },
    lcsbox: {
        width: '99%',
        height: 'auto',
        marginTop: 15,
        // marginLeft: 15,
    },


})