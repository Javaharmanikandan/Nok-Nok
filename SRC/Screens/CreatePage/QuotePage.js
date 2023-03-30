import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,Alert} from 'react-native'
import React,{useState,useContext} from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors,LightThemeColors, fontfamily, fontWeight, fontsize } from '../../Constant/DesignConstant';
import CardInput from './components/CardInput';
import ChooseBackGround from './components/ChooseBackGround';
import { useDispatch, useSelector } from 'react-redux'
import { addPostlist } from '../../../Redux/Reducer/AddPost';
import { AuthContext } from '../../Context/AuthContext';


const QuotePage = () => {
    const [selected, setSelected] = useState(1)
    const [text, setText] = useState('')
    const navigation = useNavigation();
    const {darktheme}=useContext(AuthContext);

    // const dispatch = useDispatch()
    // const Type = useSelector(state => state.AddPost)
    const Type =[];
    console.log(Type)
    console.log(selected)
    let image = ''
    if (selected === 1) {
        image = require('../../Assets/photos/Quotes1.png')
    }
    else if (selected === 2) {
        image = require('../../Assets/photos/Quotes2.png')
    }
    else if (selected === 3) {
        image = require('../../Assets/photos/Quotes3.png')
    }
    else if (selected === 4) {
        image = require('../../Assets/photos/Quotes4.png')
    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
            <View style={styles.textbox}>
                <Text style={styles.text}>Create </Text>
                <Text style={styles.text1}>Quotes</Text>
            </View>
            <Text style={styles.text2}>Share your own thoughts</Text>
            <View style={styles.card}>
                <CardInput text = {text} setText = {setText}  />
               
            </View>
            <View style={styles.card}>
                <ChooseBackGround selected={selected} setSelected={setSelected} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(addPostlist({post:text,background:image})) &&  Alert.alert('Quote Published Successfully') ||
                navigation.goBack()
              
            }>
                <Text style={styles.text3}>Publish Quote</Text>
            </TouchableOpacity>
        </View>
    )
}

export default QuotePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
    },

    textbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 20,

    },
    text: {
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
        fontSize: fontsize.heading,
        color: colors.HeadingProfileTitles,
        fontWeight: fontWeight.medium,
    },
    text1: {
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
        fontSize: fontsize.heading,
        color: colors.primarycolor,
        fontWeight: fontWeight.medium,
        marginLeft: 5,
    },
    text2: {
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
        fontSize: fontsize.paragraph,
        color: colors.SubHeading,
        fontWeight: fontWeight.fontBold,
        marginTop: 5,
        marginHorizontal: 20,
    },
    card: {
        alignItems: 'center',
        marginTop: 30,
    },
    button: {
        backgroundColor: colors.ViewInterviewBG,
        borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: 20,
        marginTop: 30,
    },
    text3: {
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
        fontSize: fontsize.paragraph,
        color: colors.Textcolor,
        fontWeight: fontWeight.bold,
        textAlign: 'center',
    },



})