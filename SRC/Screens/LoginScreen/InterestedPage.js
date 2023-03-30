import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react';
import { SvgXml } from 'react-native-svg';
import { colors,LightThemeColors, fontsize, fontWeight, fontfamily } from '../../Constant/DesignConstant';
import { InterestedData } from '../../Constant/DataConstant';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext'
const InterestedPage = () => {
    const {darktheme}=useContext(AuthContext);
    const [selected, setSelected] = useState('')
    const navigation = useNavigation()
    const handler = (item) => {
       item.active = !item.active
           setSelected(item)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.headerText}>What are you  </Text>
                    <Text style={styles.headerText1}>Interested</Text>
                    <Text style={styles.headerText}> in?</Text>
                </View>
                <Text style={styles.headerText3}>Choose three or more</Text>
            </View>
            <View style={styles.card} >
            {InterestedData.map((item,index) => {
                return (
                <TouchableOpacity style={[styles.card1 , item.active ? {borderColor: colors.primarycolor} : {borderColor: colors.backgroundcolor}]}
                onPress={() => handler(item)}
                key={index}>
                    <SvgXml xml={item.icon} />
                    <Text style={styles.cardText}>{item.value}</Text> 
                </TouchableOpacity>
                
                )
            })}
                </View>
                <View style={styles.button1}>
                    <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('TabNavigation')}>
                        <Text style={styles.buttonText1}>Proceed</Text>
                    </TouchableOpacity>
                        </View>

        </View>
    )
}

export default InterestedPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginLeft: 20,
    },
    headerText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: fontsize.heading,
        fontWeight: fontWeight.bold,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        
    },
    headerText1: {
        fontSize: fontsize.bigheading,
        fontWeight: fontWeight.medium,
        color: colors.primarycolor,
        fontFamily: fontfamily.fontRegular2,
    },
    headerbox: {
        marginTop: 20,
        marginLeft: 20,
        width: 230,
    },
    headerText3: {
        marginTop: 9,
        fontSize: fontsize.subheading,
        fontWeight: fontWeight.medium,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
    },
   card : {
        paddingHorizontal: 10,
        marginTop: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card1: {
        width: 'auto',
        height: 'auto',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#4d546647',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 6,
        marginTop: 22,
        flexDirection: 'row',
        borderWidth: .5,

    },
    cardText: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.medium,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        marginLeft: 5,
    },
    button1: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,

    },
    button2: {
        width: '90%',
        height: 40,
        backgroundColor: colors.HeadingProfileTitles,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText1: {
        fontSize: fontsize.subheading,
        fontWeight: fontWeight.bold,
        color: colors.Textcolor,
        fontFamily: fontfamily.fontRegular,
    },




})