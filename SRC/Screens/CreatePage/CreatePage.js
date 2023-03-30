import { StyleSheet, Text, View, Platform, TouchableOpacity,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import QuotesCard from './components/QuotesCard'
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { colors,LightThemeColors, fontfamily, fontWeight, fontsize } from '../../Constant/DesignConstant'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';


const pinkarrow = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
<path d="M1 13.5L7 7.5L1 1.5" stroke="#F98EC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const CreatePage = () => {
    const {darktheme}=useContext(AuthContext);

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <SafeAreaView  style={{backgroundColor:colors.TabColor}}/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
                <QuotesCard />
            </View>
            <TouchableOpacity style={styles.Myquotes} onPress={() => navigation.navigate('MyQuotes')}>
                <View style={styles.textbox}>
                    <Text style={styles.text}>My Quotes</Text>
                </View>
                <TouchableOpacity style={styles.arrow}>
                    <SvgXml xml={pinkarrow} width="8" height="15" />
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Myquotes}onPress={() => navigation.navigate('DraftsPage')}>
                <View style={styles.textbox}>
                    <Text style={styles.text}>Drafts</Text>
                </View>
                <TouchableOpacity>
                    <SvgXml xml={pinkarrow} width="8" height="15" />
                </TouchableOpacity>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default CreatePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
    },
    card: {
        alignItems: 'center',
        marginTop: 30,
    },
    Myquotes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: colors.CardBackground,
        width: '90%',
        height: 65,
        borderRadius: 22,
        paddingHorizontal: 20,
    },
    textbox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
        fontSize: fontsize.heading,
        color: colors.HeadingProfileTitles,
        fontWeight: fontWeight.fontBold,
    },    
})