import { StyleSheet, Text, View, Image,TouchableOpacity,Platform } from 'react-native'
import React from 'react'
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'

const Card = () => {
    const {darktheme}=useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.imagebox}>
                <Image source={require('../../../Assets/photos/deerPic.png')} style={styles.image} />
            </View>
            <View style={styles.proficimg}>
                <Image source={require('../../../Assets/photos/HeaderImg.png')} style={styles.image} />
                </View>
                <View style={styles.textbox}>
                    <View style={styles.textcontent}>
                        <Text style={styles.text}>Nature</Text>
                        <Text style={styles.text1}>513k Followers</Text>
                    </View>
                    <TouchableOpacity style={styles.textbox1}>
                        <Text style={styles.text}>Follow</Text>
                    </TouchableOpacity>

                    </View>


        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        width: 264,
        height: 241,
        backgroundColor: colors.CardBackground,
        borderRadius: 12,
        marginHorizontal: 10,
        marginVertical: 15,
        overflow: 'hidden',
    },
    imagebox: {
        width: '100%',
        height: 154,
        backgroundColor: 'white',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    proficimg: {
        width: 70,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'absolute',
        top: 120,
        left: 10,
    },
    textbox: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
       
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 30,
    },
    textcontent: {
        width: '50%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        fontSize: fontsize.paragraph,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        fontWeight: Platform === 'ios' ? fontWeight.regular: fontWeight.bold,

    },
    textbox1: {
        width: 70,
        height: 30,
        backgroundColor: colors.FollowBtnBG,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,

    },
    text1: {
        fontSize: fontsize.paragraph,
        color:colors.SubHeading,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.regular,
        marginTop: 5,

    },

    


})