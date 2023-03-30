import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React,{useState} from 'react'
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant';
import Card from './Card';
import Card1 from './Card1';
import { useNavigation } from '@react-navigation/native';
import { PopularInterviewCardData } from '../../../Constant/DataConstant'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'
const PopularInterviews = (item) => {
    const {darktheme}=useContext(AuthContext);

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textbox}>
                    <Text style={styles.text}>Popular Interviews</Text>
                    <Text style={styles.text1}>The Most popular interviews for you!</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PopularPage')}>
                    <Text style={styles.text2}> See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginLeft: 10 }} fadingEdgeLength={100}>
                {PopularInterviewCardData.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={()=>navigation.navigate('ReadInterviews',{item})}>
                        <Card key={index}
                            profilePic={item.profilePic}
                            profileName={item.profileName}
                            tag={item.tag}
                            statement1={item.statement1}
                            statement2={item.statement2}
                            width={270}  
                            onPress={()=>navigation.navigate('ReadInterviews',{item})} 
                        />
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
            <TouchableOpacity onPress={()=>navigation.navigate('ReadInterviews',{item})}>
            <Card1 width={'95%'} />
        </TouchableOpacity>
        </View>
    )
}

export default PopularInterviews

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 15,
    },
    text: {
        fontSize: fontsize.heading,
        fontWeight: Platform === 'ios' ? fontWeight.regular : fontWeight.bold,
        fontFamily: fontfamily.fontRegular,
        color: colors.HeadingProfileTitles,
        letterSpacing: 0.5,
    },
    text1: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.regular,
        fontFamily: fontfamily.fontRegular,
        color: colors.SubHeading,
        marginTop: 5,
        letterSpacing: 0.5,
    },
    button: {
        borderRadius: 10,
        paddingVertical: 5,
    },
    text2: {
        fontSize: fontsize.paragraph,
        fontWeight: Platform === 'ios' ? fontWeight.regular : fontWeight.bold,
        fontFamily: fontfamily.fontRegular,
        color: colors.primarycolor,
        letterSpacing: 0.5,
    },

})