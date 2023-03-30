import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState,useContext } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../Constant/DesignConstant'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../Context/AuthContext';


const data = [
    { label: ' 1', value: '1' }, { label: ' 2', value: '2' }, { label: ' 3', value: '3' }, { label: ' 4', value: '4' }, { label: ' 5', value: '5' }, { label: ' 6', value: '6' }, { label: ' 7', value: '7' }, { label: ' 8', value: '8' }, { label: ' 9', value: '9' }, { label: ' 10', value: '10' }, { label: ' 11', value: '11' }, { label: ' 12', value: '12' }, { label: ' 13', value: '13' }, { label: ' 14', value: '14' }, { label: ' 15', value: '15' }, { label: ' 16', value: '16' }, { label: ' 17', value: '17' }, { label: ' 18', value: '18' }, { label: ' 19', value: '19' }, { label: ' 20', value: '20' }, { label: ' 21', value: '21' }, { label: ' 22', value: '22' }, { label: ' 23', value: '23' }, { label: ' 24', value: '24' }, { label: ' 25', value: '25' }, { label: ' 26', value: '26' }, { label: ' 27', value: '27' }, { label: ' 28', value: '28' }, { label: ' 29', value: '29' }, { label: ' 30', value: '30' }, { label: ' 31', value: '31' },
];
const data1 = [
    { label: ' Jan', value: 'Jan' }, { label: ' Feb', value: 'Feb' }, { label: ' Mar', value: 'Mar' }, { label: ' Apr', value: 'Apr' }, { label: ' May', value: 'May' }, { label: ' Jun', value: 'Jun' }, { label: ' Jul', value: 'Jul' }, { label: ' Aug', value: 'Aug' }, { label: ' Sep', value: 'Sep' }, { label: ' Oct', value: 'Oct' }, { label: ' Nov', value: 'Nov' }, { label: ' Dec', value: 'Dec' },
];
const data2 = [
    { label: ' 1990', value: '1990' }, { label: ' 1991', value: '1991' }, { label: ' 1992', value: '1992' }, { label: ' 1993', value: '1993' }, { label: ' 1994', value: '1994' }, { label: ' 1995', value: '1995' }, { label: ' 1996', value: '1996' }, { label: ' 1997', value: '1997' }, { label: ' 1998', value: '1998' }, { label: ' 1999', value: '1999' }, { label: ' 2000', value: '2000' }, { label: ' 2001', value: '2001' }, { label: ' 2002', value: '2002' }, { label: ' 2003', value: '2003' }, { label: ' 2004', value: '2004' }, { label: ' 2005', value: '2005' }, { label: ' 2006', value: '2006' }, { label: ' 2007', value: '2007' }, { label: ' 2008', value: '2008' }, { label: ' 2009', value: '2009' }, { label: ' 2010', value: '2010' }, { label: ' 2011', value: '2011' }, { label: ' 2012', value: '2012' }, { label: ' 2013', value: '2013' }, { label: ' 2014', value: '2014' }, { label: ' 2015', value: '2015' }, { label: ' 2016', value: '2016' }, { label: ' 2017', value: '2017' }, { label: ' 2018', value: '2018' }, { label: ' 2019', value: '2019' }, { label: ' 2020', value: '2020' }, { label: '2021', value: '2021' }, { label: '2022', value: '2022' }, { label: '2023', value: '2023' },
];
const SignUp = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    const {darktheme}=useContext(AuthContext);

    const {test} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <View style={styles.loginText}>
                    <Text style={styles.loginText1}>Sign Up to </Text>
                    <Text style={styles.loginText2}>{test}</Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Profile Name"
                        placeholderTextColor={'#f9f8f96b'}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email Id"
                        placeholderTextColor={'#f9f8f96b'}
                    />
                </View>
                <View style={styles.dateofbirth}>
                    <Text style={styles.dateofbirthText}>Date of Birth</Text>
                    <View style={styles.dateofbirthInput}>
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: colors.TabColor }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Day' : '...'}
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                        />
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: colors.TabColor }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data1}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus1 ? 'Month' : '...'}
                            value={value1}
                            onFocus={() => setIsFocus1(true)}
                            onBlur={() => setIsFocus1(false)}
                            onChange={item => {
                                setValue1(item.value);
                                setIsFocus1(false);
                            }}
                        />
                        <Dropdown
                            style={[styles.dropdown]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data2}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus2 ? 'Year' : '...'}
                            value={value2}
                            onFocus={() => setIsFocus2(true)}
                            onBlur={() => setIsFocus2(false)}
                            onChange={item => {
                                setValue2(item.value);
                                setIsFocus2(false);
                            }}
                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('WelcomePage')}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.alreadyaccount}>
                    <Text style={styles.alreadyaccountText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
                        <Text style={styles.alreadyaccountText1}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
    },
    Header: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 100,
        marginLeft: 20,
    },
    loginText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText1: {
        fontSize: fontsize.bigheading,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
        lineHeight: 30,
        marginTop: 30,
    },
    loginText2: {
        fontSize: fontsize.bigheading,
        color: colors.primarycolor,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
        lineHeight: 30,
        marginTop: 30,
    },
    input: {
        marginTop: 40,
        width: '100%',
    },
    inputText: {
        width: '95%',
        height: 50,
        backgroundColor: '#2A2B2F',
        borderRadius: 10,
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.subheading,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.medium,
        paddingLeft: 20,
        marginBottom: 30,
    },
    dateofbirth: {
        marginTop: -20,
        width: '100%',
    },
    dateofbirthText: {
        fontSize: fontsize.subheading,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
        lineHeight: 30,
        marginTop: 30,
        marginBottom: 10,
    },
    dropdown: {
        width: '30%',
        height: 40,
        backgroundColor: '#313A49',
        borderRadius: 10,
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.subheading,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.medium,
        paddingLeft: 20,
        marginBottom: 30,
        marginRight: 10,
    },
    placeholderStyle: {
        color: colors.HeadingProfileTitles,
        fontSize: 16,
    },
    selectedTextStyle: {
        color: colors.HeadingProfileTitles,
        fontSize: 16,
    },
    inputSearchStyle: {
        fontSize: 16,
    },
    dateofbirthInput: {
        flexDirection: 'row',
    },
    button: {
        width: '100%',
        marginTop: 10,
    },
    button1: {
        width: '95%',
        height: 40,
        backgroundColor: colors.HeadingProfileTitles,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: fontsize.subheading,
        color: colors.Textcolor,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
        lineHeight: 30,
    },
    alreadyaccount: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    alreadyaccountText: {
        fontSize: fontsize.subheading,
        color: colors.SubHeading,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
        fontWeight: fontWeight.regular,
        lineHeight: 30,
    },
    alreadyaccountText1: {
        fontSize: fontsize.subheading,
        color: colors.primarycolor,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
        fontWeight: fontWeight.regular,
        lineHeight: 30,
        marginLeft: 5,
    },







})