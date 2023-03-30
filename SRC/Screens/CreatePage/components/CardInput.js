import { StyleSheet, Text, View, TextInput } from 'react-native'
import React,{useState} from 'react'
import { colors,LightThemeColors, fontWeight, fontfamily, fontsize } from '../../../Constant/DesignConstant'
import { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext'

const CardInput = (props) => {
    const [text, setText] = useState('');
    const {darktheme}=useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TextInput
                    placeholder="Write your quote here"
                    placeholderTextColor={colors.SubHeading}
                    style={styles.textinput}
                    value={props.text}
                    onChangeText={text => props.setText(text)}
                />
            </View>
        </View>
    )
}

export default CardInput

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 230,
        backgroundColor: colors.CardBackground,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '90%',
        height: 190,
        backgroundColor: '#2A2B2F',
        borderRadius: 22,
        borderWidth: .5,
        borderColor: '#4D5466',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: .5,
        shadowRadius: 5,
    },
    textinput: {
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
        fontSize: fontsize.paragraph,
        color: colors.SubHeading,
        fontWeight: fontWeight.fontBold,
        opacity: .5,
        marginTop: 15,
        marginHorizontal: 20,
    },
})