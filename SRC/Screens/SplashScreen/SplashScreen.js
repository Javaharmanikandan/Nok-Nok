import { StyleSheet, Text, View,Image,Dimensions,SafeAreaView ,TouchableOpacity,FlatList} from 'react-native'
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { colors,LightThemeColors, fontsize, fontWeight, fontfamily } from '../../Constant/DesignConstant';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';


const done = ({ ...props }) => (
    <TouchableOpacity
        style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: colors.TabColor,
            borderRadius: 10,
            marginHorizontal: 10,
            marginBottom: 10,
        }}
        {...props}
    >
        <Text style={{ fontSize: 16, color: colors.HeadingProfileTitles, fontFamily:fontfamily.fontRegular2}}>Get Started</Text>
    </TouchableOpacity>
);
const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: colors.CardBackground,
            borderRadius: 10,
            marginHorizontal: 10,
            marginBottom: 10,

        }}
        {...props}
    >
        <Text style={{ fontSize: 16, color: colors.HeadingProfileTitles,opacity:.5, fontFamily:fontfamily.fontRegular2}}>Skip</Text>
    </TouchableOpacity>
);

const next = ({ ...props }) => (
    <TouchableOpacity
        style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: colors.TabColor,
            borderRadius: 10,
            marginHorizontal: 10,
            marginBottom: 10,
        }}
        {...props}
    >
        <Text style={{ fontSize: 16, color: colors.HeadingProfileTitles, fontFamily:fontfamily.fontRegular2}}>Next</Text>
    </TouchableOpacity>
);

const Square = ({ isLight, selected }) => {
    const width = Dimensions.get('window').width;
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? colors.primarycolor : 'rgba(0, 0, 0, 0.3)';
    } else {
      backgroundColor = selected ? colors.primarycolor : 'rgba(255, 255, 255, 0.5)';
    }
    return (
      <View
        style={{
          width: 9,
          height: 9,
          borderRadius: 4,
          marginHorizontal: 3,
         backgroundColor,
          marginBottom: width /1,
        }}
      />
    );
  };
const SplashScreen = () => {
    const {darktheme}=useContext(AuthContext);

    const width = Dimensions.get('window').width;
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={next}
            DoneButtonComponent={done}
            DotComponent={Square}
            onSkip={() => navigation.navigate('LoginPage')}
            onDone={() => navigation.navigate('LoginPage')}
            pages={[
                {
                    backgroundColor: colors.backgroundcolor,
                    image: <Image source={require('../../Assets/photos/onboarding1.png')} style={styles.image} />,
                    title: <Text style={styles.text}>Read & Give Interviews</Text>,
                    subtitle: <View style={styles.subView}>
                        <Text style={styles.subText}>Learning new things from our </Text>
                        <Text style={styles.subText1}>interviews</Text>
                    </View>,
                },
                {
                    backgroundColor: colors.backgroundcolor,
                    image: <Image source={require('../../Assets/photos/onboarding10.png')} style={styles.image} />,
                     
                    title: <View style={styles.titleView}>
                        <Text style={styles.titleText}>Media </Text>
                        <Text style={styles.titleText1}>House</Text>
                        </View>,
                    subtitle: <View style={styles.subView}>
                        <Text style={styles.subText}>Get all the latest news and </Text>
                        <Text style={styles.subText1}>updates</Text>
                        </View>,
                },
                {
                    backgroundColor: colors.backgroundcolor,
                    image: <Image source={require('../../Assets/photos/onboarding9.png')} style={styles.image} />,
                    title: <View style={styles.titleView}>
                        <Text style={styles.titleText}>Create </Text>
                        <Text style={styles.titleText1}>& Publish Quotes</Text>
                        </View>,
                    subtitle: <View style={styles.subView}>
                        <Text style={styles.subText}>Share you thoughts on  </Text>
                        <Text style={styles.subText1}>Nok Nok</Text>
                        </View>,
                },
            ]}
             containerStyles={{ backgroundColor: colors.backgroundcolor }}  
            imageContainerStyles={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />

      
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginTop: -15,
    },
    text: {
        fontSize: fontsize.bigheading,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular1 : fontfamily.fontRegular1,
        fontWeight: fontWeight.medium,
        marginLeft: 10,
        lineHeight: 30,
        marginTop: 30,
    },
    subView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    subText: {
        fontSize: fontsize.subheading,
        color: colors.SubHeading,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular1 : fontfamily.fontRegular1,
        fontWeight: fontWeight.medium,
        marginLeft: 10,
        lineHeight: 30,
    },
    subText1: {
        fontSize: fontsize.subheading,
        color: colors.primarycolor,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular1 : fontfamily.fontRegular1,
        fontWeight: fontWeight.medium,
        
        lineHeight: 30,
        textDecorationLine: 'underline',
    },
    text1: {
        fontSize: fontsize.subheading,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular1 : fontfamily.fontRegular1,
        fontWeight: fontWeight.medium,
        marginLeft: 10,
        lineHeight: 30,
    },
    image1: {
        width: 95,
        height: 120,
        resizeMode: 'contain',
        marginTop: 20,

    },
    imageBox: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 10,
    },
    imageBox1: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 10,
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      
    },
    titleText: {
        fontSize: fontsize.bigheading,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular1 : fontfamily.fontRegular1,
        fontWeight: fontWeight.medium,
        marginLeft: 10,
        lineHeight: 30,
    },
    titleText1: {
        fontSize: fontsize.bigheading,
        color: colors.primarycolor,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular1 : fontfamily.fontRegular1,
        fontWeight: fontWeight.medium,
        lineHeight: 30,
    },





})