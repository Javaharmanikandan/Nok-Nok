import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { colors,LightThemeColors, fontsize, fontWeight, fontfamily } from '../../../../../Constant/DesignConstant';
import ToggleSwitch from 'toggle-switch-react-native'
import { AuthContext } from '../../../../../Context/AuthContext';


const ContentSec = () => {
    const [handler, setHandler] = React.useState(false)
    const [handler1, setHandler1] = React.useState(true)
const {darktheme,themeModeUpdate} =useContext(AuthContext)

const handleDarktheme = ()=>{
    
    setHandler1(!handler1);
    themeModeUpdate(!handler1)
}

    

    return (
        <View>
            <Text style={styles.text}>Content</Text>
            <TouchableOpacity style={styles.button} onPress={() => setHandler(!handler)}>
                <Text style={styles.text1}>Sync all Content</Text>
                <ToggleSwitch
                    isOn={handler}
                    onColor="#7A5AA7"
                    offColor='black'
                    size="small"
                    onToggle={isOn => setHandler(!handler)}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleDarktheme()}>
                <Text style={styles.text1}>Dark Mode</Text>
                <ToggleSwitch
                    isOn={handler1}
                    onColor="#7A5AA7"
                    offColor='black'
                    size="small"
                    onToggle={isOn => handleDarktheme()}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ContentSec

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