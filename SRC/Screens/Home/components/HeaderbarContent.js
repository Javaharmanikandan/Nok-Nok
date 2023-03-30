import { StyleSheet, Text, View, Image, TouchableOpacity,Platform } from 'react-native'
import React from 'react'
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant'
import { SvgXml } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'



const rightarrow=`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M7.5 15L12.5 10L7.5 5" stroke="#F98EC4" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const HeaderbarContent = (items) => {
    const {darktheme}=useContext(AuthContext);

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* Image part want to be dynamic conent */}
                    <Image source={require('../../../Assets/photos/HeaderImg.png')} style={styles.image} />
                </View>
                <View style={styles.textbox}>
                    {/*  Dynamic content  */}
                    <Text style={styles.text}>Exciting Topics are waiting for you</Text>
                    <TouchableOpacity style={styles.textbox1} onPress={() => navigation.navigate('ProUserCard',{value:'ProUser'})}>
                        <Text style={styles.text1}>Read Interview</Text>
                        {/* Icon part should be change according to correction */}
                        <SvgXml xml={rightarrow} width={20} height={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <LinearGradient colors={['#F98EC4','#7350A0',]} style={styles.linearGradient}/>


        </View>
    )
}

export default HeaderbarContent

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        padding: 10,

    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    textbox: {
        width: '60%',
        marginLeft: 10,
        padding: 10,
        backgroundColor: colors.backgroundcolor,
    },
    textbox1: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    text: {
        fontSize: fontsize.heading,
        fontWeight: fontWeight.regular,
        color: colors.PostDescriptionAnswer,
        fontFamily: fontfamily.fontRegular1,
        lineHeight: 30,
    },
    text1: {
        fontSize: fontsize.paragraph,
        fontWeight: Platform === 'ios' ? fontWeight.medium : fontWeight.medium,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        lineHeight: 30,
        marginBottom: 3,
    },
    linearGradient: {
        height: 1,
        width: '100%',
        zIndex: -1,
        opacity:0.5
    
      },





})