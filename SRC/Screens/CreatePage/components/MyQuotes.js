import { StyleSheet, Text, View, Platform, TouchableOpacity,SafeAreaView ,ScrollView} from 'react-native'
import { SvgXml } from 'react-native-svg';
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CreatePost from './CreatePost';
import { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext'

const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const MyQuotes = () => {
    const navigation = useNavigation();
    const {darktheme}=useContext(AuthContext);

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row' }}>
                    <SvgXml xml={leftArrow} width="20" height="16" />
                    <Text style={styles.text}>MyQuotes</Text>
                </TouchableOpacity>
               
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <CreatePost />
            </ScrollView>
        </View>
    )
}

export default MyQuotes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
        paddingBottom: 80

    },
    header: {
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    text: {
        fontSize: fontsize.subheading,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
        marginLeft: 10,
    },
   
})