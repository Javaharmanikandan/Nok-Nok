import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { colors,LightThemeColors, fontWeight, fontfamily, fontsize } from '../../../../Constant/DesignConstant'
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthContext';

const Card = ({image,heading,questions,followers,selected,width,height,onPress}) => {

    const {darktheme}=useContext(AuthContext);

    return (
        <View style={[styles.container,{width:width,height:height}]}>
            <LinearGradient colors={['#348f4112', '#348f4130', '#000000']} style={styles.LinearGradient}  zIndex={1} >
                <Image source={image} style={{ width: '100%', height: '100%', borderRadius: 10, zIndex: -1 }} />
                <View style={styles.TextBox}>
                    <Text style={styles.Text}>{heading}</Text>
                    <View style={styles.FooterBox}>
                        <View style={styles.Footer}>
                            <Text style={styles.Text1}>{questions}</Text>
                            <Text style={styles.Text1}>|</Text>
                            <Text style={styles.Text1}>{followers}</Text>
                        </View>
                        <TouchableOpacity style={[styles.Button,{
                            backgroundColor: selected ? colors.CardBackground : colors.FollowBtnBG,
                            width: selected ? 90 : 70,
                        }]} onPress={onPress}>
                            <Text style={[styles.Text2,{
                                color: selected ? colors.IconStroke : colors.HeadingProfileTitles,
                            }]}>{selected ? 'Following' : 'Follow'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 300,
        height: 168,
        backgroundColor: colors.ViewInterviewBG,
        borderWidth: 1,
        borderColor: colors.IconStroke,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    LinearGradient: {
        width: '100%',
        borderRadius: 10,
    },
    TextBox: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        borderRadius: 10,
    },
    Text: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.heading,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
        marginLeft: 10,
    },
    Footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
    },
    Text1: {
        color: colors.PostDescriptionAnswer,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.medium,
        marginRight: 5,
    },
    Button: {
        width: 70,
        height: 28,
        borderRadius: 15,
        backgroundColor: colors.FollowBtnBG,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    Text2: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
    },
    FooterBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 0,
    },
})