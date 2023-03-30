import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { colors,LightThemeColors, fontsize, fontWeight, fontfamily } from '../../../Constant/DesignConstant';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'



const downarrow = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path d="M13 1L7 7L1 1" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const CardAnswerView = (props) => {
    const {darktheme}=useContext(AuthContext);

    return (
        <View style={styles.card}>
            <View style={styles.QuestionSection}>
                <View style={styles.Question}>
                    <Text style={styles.QuestionText}>{props.question}</Text>
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity>
                        <SvgXml xml={downarrow} width="14" height="8" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.AnswerSection}>
                <ScrollView style={{ width: '100%' }}>
                    <Text style={styles.AnswerText}>{props.answer}</Text>
                </ScrollView>
            </View>
        </View>
    )
}

export default CardAnswerView

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        marginVertical: 10,
        width: '100%',
        height: 200,
        borderColor: colors.IconStroke,
        borderWidth: .5,
    },
    QuestionSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        width: '100%',
        height: '50%',
        backgroundColor: colors.PrimaryTinyBtn,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    Question: {
        flexDirection: 'row',
        padding: 10,
        width: '90%',
        height: '100%',
    },
    QuestionText: {
        flexWrap: 'wrap',
        fontSize: fontsize.paragraph,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        fontWeight: "bold",
        lineHeight: 20,
    },
    icon: {
        marginBottom: 30,
        width: '10%',
    },
    AnswerSection: {
        width: '100%',
        height: '50%',
        padding: 10,
        backgroundColor: '#2A2B2F',
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    AnswerText: {
        width: '90%',
        height: '100%',
        fontSize: fontsize.paragraph,
        color: colors.PostDescriptionAnswer,
        fontFamily: fontfamily.fontRegular1,
        fontWeight: fontWeight.regular,
        textAlignVertical: 'top',
        lineHeight: 20,
    },
})