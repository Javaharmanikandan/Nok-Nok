import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { TopTrendingInterviewsData } from '../../../Constant/DataConstant';
import { colors,LightThemeColors, fontWeight, fontfamily, fontsize } from '../../../Constant/DesignConstant';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'


const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const TopTrendingPage = () => {
    const {darktheme}=useContext(AuthContext);

    const navigation = useNavigation();
    const Card = (props) => {
        return (
            <TouchableOpacity style={styles.Card} onPress={() => navigation.navigate('ReadInterviews', { item: props })}>
                <View style={styles.imagebox}>
                    <Image source={props.image} style={styles.image} />
                </View>
                <View style={styles.textbox}>
                    <Text style={styles.heading}>{props.heading}</Text>
                    <View style={styles.textcontent}>
                        <Text style={styles.text1}>{props.question}</Text>
                        <View style={styles.QAbox}>
                            <TouchableOpacity style={styles.textbox1} >
                                <Text style={styles.text2}>Q&A</Text>
                            </TouchableOpacity>
                            <Text style={styles.text3}> .</Text>
                            <Text style={styles.text3}>{props.number}</Text>
                            <Text style={styles.text3}> questions </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row' }}>
                    <SvgXml xml={leftArrow} width="20" height="16" />
                    <Text style={styles.text}>Top Trending Interviews</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.listView}>
                {TopTrendingInterviewsData.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            image={item.image}
                            heading={item.heading}
                            question={item.question}
                            number={item.number}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default TopTrendingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
        paddingBottom: 70,
    },
    header: {
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    text: {
        fontSize: fontsize.subheading,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
        marginLeft: 10,
    },
    listView: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,

    },
    Card: {
        width: 359,
        height: 296,
        backgroundColor: colors.CardBackground,
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: colors.CardBackgroundStroke,
        overflow: 'hidden',
        alignItems: 'center',
        marginBottom: 20,
    },
    imagebox: {
        width: '90%',
        height: 140,
        marginTop: 16,
        borderRadius: 15,
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        overflow: 'hidden',
    },
    textbox: {
        width: '90%',
        height: 'auto',
        overflow: 'hidden',
    },
    heading: {
        fontSize: fontsize.small,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        marginTop: 20,
        letterSpacing: 2,
    },
    textcontent: {
        width: '90%',
        height: '100%',
        paddingVertical: 10,
        overflow: 'hidden',
    },
    text1: {
        fontSize: fontsize.paragraph,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        color: colors.PostTitleQuestion,
        fontFamily: fontfamily.fontRegular,
        lineHeight: 20,
    },
    textcontent1: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 'auto',
        overflow: 'hidden',
        marginTop: 10,
    },
    textbox1: {
        width: 50,
        height: 30,
        backgroundColor: colors.PrimaryTinyBtn,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    text2: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.medium,
        color: colors.primarycolor,
        fontFamily: fontfamily.fontRegular,
    },
    text3: {
        fontSize: fontsize.paragraph,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        color: colors.primarycolor,
        fontFamily: fontfamily.fontRegular,
    },
    QAbox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 'auto',
        overflow: 'hidden',
        marginTop: 10,





    },



})