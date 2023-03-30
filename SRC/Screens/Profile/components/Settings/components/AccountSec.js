import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React, { useContext } from 'react'
import { SvgXml } from 'react-native-svg';
import { colors, fontsize, fontWeight, fontfamily } from '../../../../../Constant/DesignConstant'
import { AuthContext } from '../../../../../Context/AuthContext';
const pinkarrow =`<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
<path d="M1 13L7 7L1 1" stroke="#F98EC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const AccountSec = () => {

    const {darktheme,signOutAction}=useContext(AuthContext)
  return (
    <View>
      <Text style={styles.text}>Account</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text1}>Change Password</Text>
            <SvgXml xml={pinkarrow} width="8" height="14" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{signOutAction()}}>
            <Text style={styles.text1}>Log into another account</Text>
            <SvgXml xml={pinkarrow} width="8" height="14" />
        </TouchableOpacity>
    </View>
  )
}

export default AccountSec

const styles = StyleSheet.create({
    text: {
        fontSize: fontsize.subheading,
        color: colors.SubHeading,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegula : fontfamily.fontRegular2,
        marginLeft: 10,
        marginTop: 20,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: colors.CardBackground,
        borderRadius: 10,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
    },
    text1: {
        fontSize: fontsize.subheading,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
    },



})