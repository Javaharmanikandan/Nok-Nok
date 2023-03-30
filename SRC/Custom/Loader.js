import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors } from '../Constant/DesignConstant'
import Lottie from 'lottie-react-native';

const Loader = () => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      {/* <ActivityIndicator size={"large"} color={colors.primarycolor}/> */}

      <Lottie source={require('../Assets/animations/loader.json')} loader
            autoPlay
            loop
            style={{ width: 150, height: 150 }} />
    </View>
  )
}

export default Loader