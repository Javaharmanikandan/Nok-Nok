import { StyleSheet, Text, View, TouchableOpacity,Platform } from 'react-native'
import React from 'react'
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'

const QAsection = () => {
  const {darktheme}=useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={styles.text}>Q&A</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.count}>
        <Text style={styles.text}>.</Text>
      </View>
      <View style={styles.count1}>
        {/* count should be set dynamically from backend */}
        <Text style={styles.text}>4 more questions</Text>
      </View>

    </View>
  )
}

export default QAsection

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.PrimaryTinyBtn,
    width: 60,
    height: 'auto',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: fontsize.paragraph,
    fontWeight: Platform === 'ios' ? fontWeight.medium : fontWeight.bold,
    fontFamily: fontfamily.fontRegular,
    color: colors.primarycolor,
    letterSpacing: 0.5,
  },
  count: {
    marginHorizontal: 5,
    marginBottom: 5,
  },
  count1: {
    // marginBottom: 5,
   

  },


})