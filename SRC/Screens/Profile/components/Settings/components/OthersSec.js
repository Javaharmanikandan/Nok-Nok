import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState,useContext} from 'react'
import { SvgXml } from 'react-native-svg'
import { colors, fontsize, fontWeight, fontfamily } from '../../../../../Constant/DesignConstant';
import ToggleSwitch from 'toggle-switch-react-native'
import { AuthContext } from '../../../../../Context/AuthContext';

const pinkarrow =`<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
<path d="M1 13L7 7L1 1" stroke="#F98EC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const OthersSec = () => {
    const {darktheme} =useContext(AuthContext)

    const [handler, setHandler] = useState(false)
  return (
    <View>
    <Text style={styles.text}>Others</Text>
      <TouchableOpacity style={styles.button} onPress={() => setHandler(!handler)}>
          <Text style={styles.text1}>Notifications</Text>
          <ToggleSwitch
                    isOn={handler}
                    onColor="#7A5AA7"
                    offColor='black'
                    size="small"
                    onToggle={isOn => setHandler(!handler)}
                />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.text1}>Frequently Asked Questions</Text>
            <SvgXml xml={pinkarrow} width="8" height="14" />
      </TouchableOpacity>
  </View>
  )
}

export default OthersSec

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