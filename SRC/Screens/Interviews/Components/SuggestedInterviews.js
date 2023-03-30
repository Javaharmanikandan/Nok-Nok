import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'

const chat=`<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.75C0 14.9522 0.70664 17.0078 1.92937 18.7471L0.700539 23.0481C0.395206 24.1167 1.38322 25.1047 2.45188 24.7994L7.91272 23.2392C8.59538 23.4882 9.30773 23.6861 10.0437 23.8274C10.0438 23.8276 10.0437 23.8274 10.0437 23.8274C10.9158 23.995 11.8212 24.0834 12.7496 24.0834C12.9873 24.0834 13.2235 24.0776 13.458 24.0662C13.4577 24.0662 13.4582 24.0662 13.458 24.0662C20.1706 23.74 25.5 18.7983 25.5 12.75C25.5 6.49073 19.7917 1.41663 12.75 1.41663C5.70837 1.41663 0 6.49073 0 12.75ZM4.65369 19.5256C4.88876 18.7028 4.73942 17.8178 4.24732 17.1178C3.33684 15.8226 2.83333 14.33 2.83333 12.75C2.83333 8.36005 6.95022 4.24996 12.75 4.24996C18.5498 4.24996 22.6667 8.36005 22.6667 12.75C22.6667 17.1399 18.5498 21.25 12.75 21.25C11.3694 21.25 10.0646 21.0081 8.88365 20.5775C8.32177 20.3725 7.70943 20.3505 7.13435 20.5149L4.12539 21.3746L4.65369 19.5256Z" fill="#F98EC4"/>
<path d="M27.6728 8.62451C28.0737 9.8358 28.3026 11.1249 28.3301 12.4735C30.1164 14.0544 31.1663 16.1999 31.1663 18.4168C31.1663 19.9968 30.6628 21.4894 29.7523 22.7845C29.2603 23.4847 29.1108 24.3696 29.346 25.1923L29.8743 27.0413L26.8653 26.1817C26.2903 26.0174 25.6778 26.0392 25.116 26.2442C23.9351 26.675 22.6302 26.9168 21.2496 26.9168C19.863 26.9168 18.5727 26.6818 17.4117 26.2643C15.9458 26.6839 14.3992 26.9104 12.8159 26.9167C15.0636 28.6801 18.0161 29.7501 21.2496 29.7501C22.9618 29.7501 24.5952 29.4501 26.087 28.906L31.5478 30.4663C32.6164 30.7716 33.6045 29.7836 33.2991 28.7148L32.0703 24.414C33.293 22.6745 33.9996 20.619 33.9996 18.4168C33.9996 14.2395 31.4573 10.5901 27.6728 8.62451Z" fill="#7A5AA7"/>
</svg>`
const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
<path d="M1 11L6 6L1 1" stroke="#F98EC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const Data = [
    {
        id: 1,
        image: require('../../../Assets/photos/profilePic.png'),
    },
    {
        id: 2,
        image: require('../../../Assets/photos/profilePic2.png'),
    },
    {
        id: 3,
        image: require('../../../Assets/photos/profilePic.png'),
    },
    {
        id: 4,
        image: require('../../../Assets/photos/profilePic2.png'),
    },
]

const SuggestedInterviews = () => {
    const {darktheme}=useContext(AuthContext);

    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgXml xml={chat} width="34" height="34" />
        <View style={styles.TextBox}>
            <Text style={styles.Text}>Suggested Interviews</Text>
            <Text style={styles.Text2}>Related to your picks</Text>
            </View>
            <View style={styles.CountBox}>
            <Text style={styles.Count}>12</Text>
            </View>
        </View>
        <View style={styles.footer}>
        <View style={styles.imageBox}>
            {Data.map((item,i) => {return (<Image style={styles.image} source={item.image} key={i} />)})}
        </View>
        <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SuggestedInterviews')}>
                <Text style={styles.buttonText}>Interviews</Text>
                <View style={styles.arrowBox}>
                <SvgXml xml={leftArrow} width="6" height="20"  />
                <SvgXml xml={leftArrow} width="6" height="20"  />
                </View>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default SuggestedInterviews

const styles = StyleSheet.create({
    container : {
       width: '90%',
        height: 160,
        borderRadius: 15,
        marginVertical: 36,
        backgroundColor: colors.CardBackground1,
        shadowColor: colors.CardBackground1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    header : {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    TextBox : {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    Text : {
        fontSize: fontsize.subheading,
        fontFamily: fontfamily.fontRegular4,
        color: colors.HeadingProfileTitles,
        fontWeight: fontWeight.bold,
    },
    Text2 : {
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular4,
        color: colors.PostDescriptionAnswer,
    },
    CountBox : {
        backgroundColor: '#313A49',
        borderRadius: 22,
        width: 38,
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
    },
    Count : {
        fontSize: fontsize.subheading,
        fontFamily: fontfamily.fontRegular3,
        color: colors.HeadingProfileTitles,
    },
    imageBox : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 30,
        marginVertical: 20,
    },
    image : {
        width: 32,
        height: 32,
        borderRadius: 25,
        marginLeft: -5,
    },
    buttonBox : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        marginVertical: 20,
    },
    button : {
        backgroundColor: colors.LikeButton,
        borderRadius: 25,
        width: 142,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText : {
        fontSize: fontsize.subheading,
        fontFamily: fontfamily.fontRegular3,
        color: colors.HeadingProfileTitles,
    },
    footer : {
        flexDirection: 'row',    
    },
    arrowBox : {
        marginLeft: 10,
        marginTop: 2,
        flexDirection: 'row',       
    },





})