import { StyleSheet, Text, View, SafeAreaView,Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../Constant/DesignConstant'
import PublicUserCard from './PublicUser/PublicUserCard'
import ProUserCard from './ProUser/ProUserCard'
import { AuthContext } from '../../Context/AuthContext'
import { useContext } from 'react';


const Interviews = () => {
  const {darktheme}=useContext(AuthContext);
  const [userType, setuserType] = useState(true)
  useEffect(() => {
    Alert.alert(
      "User Type",
      "are you a guest user ?",
      [
        {
          text: "NO",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "yes", onPress:()=> setuserType(false) }
      ]
    ) 
   }, [] )


  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
      {!userType ? <PublicUserCard/> : <ProUserCard/>}     
    </View>
  )
}

export default Interviews

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
    paddingBottom: 70
  },
  
})