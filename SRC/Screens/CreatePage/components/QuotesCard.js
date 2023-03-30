import { StyleSheet, Text, View, TouchableOpacity,Platform } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { colors,LightThemeColors, fontfamily, fontWeight, fontsize } from '../../../Constant/DesignConstant'
import { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext'

const plus = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M16 10.6667V21.3333" stroke="#F9F8F9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6665 16H21.3332" stroke="#F9F8F9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const QuotesCard = () => {
    const navigation = useNavigation();
    const {darktheme}=useContext(AuthContext);

    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('QuotePage')}>
                <SvgXml xml={plus} width="32" height="32" />
            </TouchableOpacity>
            <View style={styles.textbox}>
                <Text style={styles.text}>Create Quotes</Text>
                <Text style={styles.text1}>Share your own thoughts</Text>
            </View>
        </View>
    )
}

export default QuotesCard

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 490,
        backgroundColor: colors.CardBackground,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 56,
        height: 56,
        backgroundColor: colors.IconPressed,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textbox: {
        marginTop: 30,
        alignItems: 'center',
    },
    text: {
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
        fontSize: fontsize.bigheading,
        color: colors.HeadingProfileTitles,
        fontWeight: fontWeight.fontBold,
    },
    text1: {
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
        fontSize: fontsize.paragraph,
        color: colors.SubHeading,
        fontWeight: fontWeight.fontRegular,
        marginTop: 10,
    },



})