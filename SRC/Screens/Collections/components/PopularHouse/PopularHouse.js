import { StyleSheet, Text, View,TouchableOpacity,Platform } from 'react-native'
import React from 'react'
import { colors,LightThemeColors, fontsize, fontWeight, fontfamily } from '../../../../Constant/DesignConstant';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthContext';

const PopularHouse = () => {
    const navigation = useNavigation();
    const {darktheme}=useContext(AuthContext);

  return (
    <View style={styles.PopularHouse}>
            <View style={styles.textbox}>
                <Text style={styles.text1}>Popular House</Text>
                <Text style={styles.text2}>Nok Nok everyone’s favorite house</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PopularHousePage')}>
                <Text style={styles.text3}> See All</Text>
            </TouchableOpacity>
        </View>
  )
}

export default PopularHouse

const styles = StyleSheet.create({
    PopularHouse: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,   
    },
    text1: {
        fontSize: fontsize.heading,
        fontWeight: Platform === 'ios' ? fontWeight.regular : fontWeight.bold,
        fontFamily: fontfamily.fontRegular,
        color: colors.HeadingProfileTitles,
        letterSpacing: 0.5,
        marginLeft: 10,
    },
    text2: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.regular,
        fontFamily: fontfamily.fontRegular,
        color: colors.SubHeading,
        marginTop: 5,
        letterSpacing: 0.5,
        marginLeft: 10,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 15,
        
    },
    text3: {
        fontSize: fontsize.paragraph,
        color: colors.primarycolor,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
        marginRight: 10,
    },
 
})