import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors,LightThemeColors, fontfamily, fontWeight, fontsize } from '../../../Constant/DesignConstant'
import { SvgXml } from 'react-native-svg';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'


const search = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#A8A8A8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 17.5L13.875 13.875" stroke="#A8A8A8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const bell = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15 6.66666C15 5.34057 14.4732 4.0688 13.5355 3.13112C12.5979 2.19344 11.3261 1.66666 10 1.66666C8.67392 1.66666 7.40215 2.19344 6.46447 3.13112C5.52678 4.0688 5 5.34057 5 6.66666C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66666Z" stroke="#A8A8A8" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5788 18.2537 10.292 18.3304 10 18.3304C9.70802 18.3304 9.42116 18.2537 9.16815 18.1079C8.91513 17.9622 8.70484 17.7526 8.55833 17.5" stroke="#A8A8A8" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const Headerbar = () => {
    const {darktheme}=useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row',marginLeft:10 }}>
                    {/* Brand name */}
                    <Text style={styles.text}>NOK</Text>
                    <Text style={styles.text1}>NOK</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {/* Icon wants to be change according to the corrections */}
                    <TouchableOpacity style={{ marginRight: 20 }}>
                        <SvgXml xml={search} width="20" height="20" />
                    </TouchableOpacity>
                    {/* Icon wants to be change according to the corrections */}
                    <TouchableOpacity style={{ marginRight: 10 }}>
                        <SvgXml xml={bell} width="20" height="20" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Headerbar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        padding: 10
    },
    text: {
        fontSize: fontsize.subheading,
        fontWeight: fontWeight.bold,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        letterSpacing: 2,
    },
    text1: {
        fontSize: fontsize.subheading,
        fontWeight: fontWeight.bold,
        color: colors.primarycolor,
        fontFamily: fontfamily.fontRegular,
        marginLeft: 5,
        letterSpacing: 2,
    },

})