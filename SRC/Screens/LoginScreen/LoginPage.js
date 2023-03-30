import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image,ActivityIndicator } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors,LightThemeColors, fontsize, fontWeight, fontfamily } from '../../Constant/DesignConstant'
import { AuthContext } from '../../Context/AuthContext'
import AuthApi from '../../Api/ApiCalls'
import { emailValidator, passwordValidator } from '../../Helper/Helper'
import Icon from "react-native-vector-icons/MaterialIcons";
import Toast from "react-native-simple-toast";

const LoginPage = () => {
    const {darktheme}=useContext(AuthContext);

    const navigation = useNavigation()
    const {signInAction} = useContext(AuthContext);
    const [buttonLoader,setButtonloader] =useState(false)
    //Value Assign
    const[emailAddress,setEmailAddress] = useState("");
    const[password,setPassword] = useState("");
    //Error state Assign
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    

   //Handle Signin Action 
    const handleSignin = async () => {


        var emailValid = false;
        var passwordValid = false;
        //Email Validation
        const EmailValidation = await emailValidator(emailAddress);
    
        if (EmailValidation.status === true) {
          var emailValid = true;
          setEmailError("");
        } else {
          setEmailError(EmailValidation.msg);
        }
          //Password Validation Area
        const passwordValidation = await passwordValidator(password);

        if (passwordValidation.status === true) {
        var passwordValid = true;
        setPasswordError("");
       } else {
        setPasswordError(passwordValidation.msg);
      }

      if(emailValid && passwordValid){
      //to do call login api

      console.log("Yes Working Fine");
      const payload = {
       emailId:emailAddress,
       password: password
    }
      signInAction(payload)
      Toast.show("All Datas Valid", Toast.LONG);

      }
    }

   


    const CalltoAction = async()=>{
        console.log("Yes Im In")
       const Payloaddata ={
        username: 'kminchelle',
        password: '0lelplR',
        }
      const dataRetrun = await AuthApi.SignIn(Payloaddata);
      console.log(dataRetrun.data)
    }


    const handleChange =async (event) => {
        // 👇 Get input value from "event"
        setEmailAddress(event);
        const EmailValidation = await emailValidator(event);
        if (EmailValidation.status === true) {
            setEmailError("");
          }else {
            setEmailError(EmailValidation.msg);
          }
      };


      const handleChangePassword =async (event) => {
        // 👇 Get input value from "event"
        setPassword(event);
        const passwordValidation = await passwordValidator(event);

      if (passwordValidation.status === true) {
        setPasswordError("");
       } else {
        setPasswordError(passwordValidation.msg);
      }
      };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('TabNavigation')}>
                <Text style={styles.headerText}>Skip</Text>
            </TouchableOpacity>
            <View style={styles.boby}>
                <View style={styles.loginText}>
                    <Text style={styles.loginText1}>Sign In to </Text>
                    <Text style={styles.loginText2}>Nok Nok</Text>
                </View>
            </View>
            <View style={styles.input}>
                <TextInput
                    style={emailError.length > 0 ? styles.ErrorInputText:styles.inputText}
                    placeholder="Email Address"
                    placeholderTextColor={'#f9f8f96b'}
                    keyboardType="email-address"
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange}
                    value={emailAddress}
                />
                {emailError.length > 0 && (<View style={styles.errorContainer}>
                <Icon
                        name="error-outline"
                        size={14}
                        style={styles.errorIcon}
                        color={colors.errorcolor}
                      />
                <Text style={styles.errorText}>
                        {emailError}
                      </Text>
                </View>)}
                
                 
                <TextInput
                    style={passwordError.length > 0 ? styles.ErrorInputText:styles.inputText}
                    placeholder="Password"
                    placeholderTextColor={'#f9f8f96b'}
                    keyboardType="default"
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChangePassword}
                    value={password}
                />

                {passwordError.length > 0 && (<View style={styles.errorContainer}>
                <Icon
                        name="error-outline"
                        size={14}
                        style={styles.errorIcon}
                        color={colors.errorcolor}
                      />
                <Text style={styles.errorText}>
                        {passwordError}
                      </Text>
                </View>)}

            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.button1} onPress={()=>{handleSignin()}}>
                    {!buttonLoader ? <Text style={styles.buttonText}>Sign In</Text>:<ActivityIndicator size={"small"} color={colors.CardBackground}/>}
                </TouchableOpacity>
            </View>
            <View style={styles.forgot}>
                <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.signup}>
                <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signupText}>Don't have an account?</Text>
                    <Text style={styles.signupText1}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.social}>
                <View style={styles.socialLine}></View>
                <Text style={styles.socialText}>Or Sign In with</Text>
            </View>
            <View style={styles.socialButton}>
                <TouchableOpacity style={styles.socialButton1}>
                    <Image source={require('../../Assets/photos/Google.png')} style={styles.socialImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton2}>
                    <Image source={require('../../Assets/photos/Facbook.png')} style={styles.socialImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton3}>
                    <Image source={require('../../Assets/photos/Apple.png')} style={styles.socialImage} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
    },
    header: {
        alignItems: 'flex-end',
        marginRight: 20,
        marginTop: 20,
    },
    headerText: {
        color: colors.IconStroke,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular2,
        fontWeight: fontWeight.medium,
        padding: 10,
        backgroundColor: colors.CardBackground,
        borderRadius: 12,
    },
    boby: {
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
        marginLeft: 20,
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
    ErrorInputText: {
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
        borderWidth:1,
        borderColor:colors.errorcolor
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    button1: {
        width: '90%',
        height: 40,
        backgroundColor: colors.HeadingProfileTitles,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: colors.Textcolor,
        fontSize: fontsize.subheading,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
    },
    forgot: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 20,
        marginLeft: 20,
    },
    forgotText: {
        color: colors.SubHeading,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.medium,
        textDecorationLine: 'underline'
    },
    signup: {
        marginTop: 20,
        marginLeft: 20,
    },
    signupButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    signupText: {
        color: colors.SubHeading,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.medium,

    },
    signupText1: {
        color: colors.primarycolor,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.medium,
        marginLeft: 5,
    },
    social: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
    },
    socialLine: {
        width: '100%',
        height: 2,
        backgroundColor: '#313848',
    },
    socialText: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.medium,
        marginTop: -10,
        backgroundColor: colors.backgroundcolor,
        paddingHorizontal: 10,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    socialButton1: {
        width: 50,
        height: 50,
        backgroundColor: colors.HeadingProfileTitles,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    socialButton2: {
        width: 50,
        height: 50,
        backgroundColor: colors.HeadingProfileTitles,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    socialButton3: {
        width: 50,
        height: 50,
        backgroundColor: colors.HeadingProfileTitles,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialImage: {
        width: 26,
        height: 26,
        resizeMode: 'contain',
    },
    errorContainer:{
        flexDirection:'row',
        width:"95%",
        alignItems:"center",
        justifyContent:"flex-end",
        bottom:18,
        right:10
    },
    errorText:{
        color: colors.errorcolor,
        fontSize: 12,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.medium,
    },
    errorIcon:{
        top:1,
        marginRight:4
    }










})