import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { colors,LightThemeColors, fontsize, fontWeight, fontfamily } from '../../../Constant/DesignConstant';
import CardInput from './CardInput';
import CardAnswerView from './CardAnswerView';
import SummitButton from './SummitButton';
import * as Progress from 'react-native-progress';
import {questionsData } from '../../../Constant/DataConstant'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'
const downarrow = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path d="M13 1L7 7L1 1" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const InterViewCard = (props) => {
    const {darktheme}=useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.cardHeader}>
                <Text style={styles.name}>Questions</Text>
                <Progress.Bar progress={1/4} width={150} height={8} color={colors.primarycolor} unfilledColor={colors.TabColor} borderWidth={0}  />
                <Text style={styles.percentage}>1/4</Text>
                <View style={styles.icon}>
                    <TouchableOpacity>
                        <SvgXml xml={downarrow} width="14" height="8" />
                    </TouchableOpacity>
                </View>
            </View>
            {props.activeTab ? (
                <View>
                   {questionsData.map((item, index) => {
                          return (
                                <CardAnswerView
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            )
                        })}
                </View>
            ) : (
                <View>
                    {questionsData.map((item, index) => {
                        return (
                            <CardInput
                                key={index}
                                question={item.question}  
                            />
                        )
                    })}
                    <SummitButton />
                </View>
            )}


        </View>
    )
}

export default InterViewCard

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 'auto',
        backgroundColor: colors.CardBackground1,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        borderWidth: .5,
        borderColor: colors.IconStroke,


    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        height: 'auto',
    },
    name: {
        fontSize: fontsize.subheading,
        color: colors.PostDescriptionAnswer,
        fontFamily: fontfamily.fontRegular1,
        fontWeight: fontWeight.regular,
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.FollowBtnBG,
        borderRadius: 15,
        padding: 5,
    },
    percentage: {
        fontSize: fontsize.subheading,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular2,
        fontWeight: fontWeight.medium,
    },

})