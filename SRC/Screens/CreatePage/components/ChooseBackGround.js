import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SvgXml } from 'react-native-svg';
import { colors, fontWeight, fontsize, fontfamily } from '../../../Constant/DesignConstant';
import { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext'


const plus =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#F9F8F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8V16" stroke="#F9F8F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12H16" stroke="#F9F8F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const Data = [
    {
        id: 1,
        title: 'Cloud',
        image: require('../../../Assets/photos/Quotes1.png'),
    },
    {
        id: 2,
        title: 'Ink',
        image: require('../../../Assets/photos/Quotes2.png'),
    },
    {
        id: 3,
        title: 'Flowers',
        image: require('../../../Assets/photos/Quotes3.png'),
    },
    {
        id: 4,
        title: 'Galaxy',
        image: require('../../../Assets/photos/Quotes4.png'),
    },
]



const ChooseBackGround = (props) => {
    const [selected, setSelected] = useState(1);
    const {darktheme}=useContext(AuthContext);

    return (
        <View style={styles.Card}>
            <View style={styles.header}>
                <Text style={styles.text}>Choose Background</Text>
                <Text style={styles.text1}>Make your quote unique!</Text>
            </View>
            <View style={styles.CardBackground}>
                {Data.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.imageBox} onPress={() => props.setSelected(item.id)}>
                        <Image source={item.image} style={[styles.image, { borderColor: props.selected === item.id ? colors.primarycolor : colors.CardBackground ,borderWidth:1}]} /> 
                        <Text style={styles.text2}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.footerbox}>
                <SvgXml xml={plus} />
                <Text style={styles.text3}>Add Custom Background</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChooseBackGround

const styles = StyleSheet.create({
    Card: {
        width: '90%',
        height: 268,
        backgroundColor: colors.CardBackground,
        borderRadius: 22,
        padding: 10,
        marginTop: 10,
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: colors.CardBackground,
        borderRadius: 22,
        padding: 10,
        marginTop: 10,

    },
    text: {
        fontSize: fontsize.heading,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
    },
    text1: {
        fontSize: fontsize.subheading,
        color: colors.SubHeading,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.regular,
    },
    CardBackground: {
        borderRadius: 22,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text2: {
        fontSize: fontsize.paragraph,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
        marginTop: 5,
    },
    imageBox: {
        width: 60,
        height: 100,
        borderRadius: 30,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 10,   
    },
    footerbox: {
        width: '100%',
        height: 50,
        backgroundColor: colors.CardBackground,
        borderRadius: 22,
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text3: {
        fontSize: fontsize.paragraph,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.regular,
        marginLeft: 10,
    },



})