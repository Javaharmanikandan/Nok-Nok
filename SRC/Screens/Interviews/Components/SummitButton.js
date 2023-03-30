import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { colors,LightThemeColors,fontWeight,fontsize,fontfamily } from '../../../Constant/DesignConstant'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'
const SummitButton = () => {
  const {darktheme}=useContext(AuthContext);

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Submit</Text>
    </TouchableOpacity>
  )
}

export default SummitButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.ViewInterviewBG,
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
    },
    text: {
        color: colors.Textcolor,
        fontSize: fontsize.subheading,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.medium,
    },
})