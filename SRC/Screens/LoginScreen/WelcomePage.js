import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'
import { colors,LightThemeColors, fontsize, fontWeight, fontfamily } from '../../Constant/DesignConstant'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const profile = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M18 18.875V17.125C18 16.1967 17.6313 15.3065 16.9749 14.6501C16.3185 13.9937 15.4283 13.625 14.5 13.625H7.5C6.57174 13.625 5.6815 13.9937 5.02513 14.6501C4.36875 15.3065 4 16.1967 4 17.125V18.875" stroke="#CCCCCC" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 10.125C12.933 10.125 14.5 8.558 14.5 6.625C14.5 4.692 12.933 3.125 11 3.125C9.067 3.125 7.5 4.692 7.5 6.625C7.5 8.558 9.067 10.125 11 10.125Z" stroke="#CCCCCC" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const WelcomePage = () => {
    const {darktheme}=useContext(AuthContext);

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Hi </Text>
                <Text style={styles.headerText1}>javahar.</Text>
            </View>
            <View style={styles.headerbox}>
                <Text style={styles.headerText3}>You have successfully created nok nok account</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.bodybox}>
                    <Text style={styles.bodyText}>Share about </Text>
                    <Text style={styles.bodyText1}>you</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabNavigation')}>
                    <Text style={styles.buttonText}>Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.profile}>
                <View style={styles.profilebox}>
                    <TouchableOpacity style={styles.profilebutton}>
                        <SvgXml xml={profile} />
                    </TouchableOpacity>
                    <Text style={styles.profileText}>Upload your Profile Picture</Text>
                </View>
            </View>
            <View style={styles.Designation}>
                <View style={styles.Designationbox}>
                    <Text style={styles.DesignationText}>Designation</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Anything that suits you"
                    placeholderTextColor="#f9f8f96e"
                />
            </View>
            <View style={styles.addbio}>
                <View style={styles.addbiobox}>
                    <Text style={styles.addbioText}>Add Bio</Text>
                    </View>
                <TextInput
                    style={styles.input1}
                    placeholder="Anything about you"
                    placeholderTextColor="#f9f8f96e"
                    height={135} 
                />
                </View>
                <View style={styles.button1}>
                    <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('InterestedPage')}>
                        <Text style={styles.buttonText1}>Continue</Text>
                    </TouchableOpacity>
                 </View>


        </View>
    )
}

export default WelcomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
    },
    header: {
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: 20,
    },
    headerText: {
        fontSize: fontsize.bigheading,
        fontWeight: fontWeight.medium,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular2,
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
        fontSize: fontsize.subheading,
        fontWeight: fontWeight.medium,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
    },
    body: {
        marginTop: 50,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bodybox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bodyText: {
        fontSize: fontsize.heading,
        fontWeight: fontWeight.bold,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
    },
    bodyText1: {
        fontSize: fontsize.heading,
        fontWeight: fontWeight.bold,
        color: colors.primarycolor,
        fontFamily: fontfamily.fontRegular,
    },
    button: {
        backgroundColor: '#40404078',
        padding: 12,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    buttonText: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.medium,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular2,
    },
    profile: {
        marginTop: 20,
        marginLeft: 20,
    },
    profilebox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilebutton: {
        backgroundColor: '#2A2B2F',
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    profileText: {
        fontSize: fontsize.subheading,
        fontWeight: fontWeight.bold,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
    },
    Designation: {
        marginTop: 20,
        marginLeft: 20,
    },
    Designationbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    DesignationText: {
        fontSize: fontsize.subheading,
        fontWeight: fontWeight.bold,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
    },
    input: {
        marginTop: 10,
        width: '95%',
        height: 50,
        backgroundColor: '#2A2B2F',
        borderRadius: 10,
        paddingLeft: 20,
        fontSize: fontsize.subheading,
        fontWeight: fontWeight.medium,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
    },
    addbio: {
        marginTop: 20,
        marginLeft: 20,
    },
    addbiobox: {
    },
    addbioText: {
        fontSize: fontsize.subheading,
        fontWeight: fontWeight.bold,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
    },
    input1: {
        marginTop: 10,
        width: '95%',
        backgroundColor: '#2A2B2F',
        borderRadius: 10,
        fontSize: fontsize.subheading,
        fontWeight: fontWeight.medium,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        paddingLeft: 20,
    },
    button1: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',


    },
    button2: {
        backgroundColor: colors.HeadingProfileTitles,
        width: '95%',
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText1: {
        fontSize: fontsize.subheading,
        fontWeight: fontWeight.bold,
        color: colors.Textcolor,
        fontFamily: fontfamily.fontRegular,
    },









})