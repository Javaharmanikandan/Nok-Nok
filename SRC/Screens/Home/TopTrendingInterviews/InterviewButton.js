import { StyleSheet, Text, View, TouchableOpacity,Platform } from 'react-native'
import React from 'react'
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'

const InterviewButton = (item) => {
  const {darktheme}=useContext(AuthContext);

  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress = {() => navigation.navigate('ReadInterviews',{item})}>
      <Text style={styles.text}>View Interview</Text>
    </TouchableOpacity>
  )
}

export default InterviewButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ViewInterviewBG,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: fontsize.subheading,
    fontWeight: Platform === 'ios' ? fontWeight.medium : fontWeight.bold, 
    color: colors.Textcolor,
  },

})