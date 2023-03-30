import { StyleSheet, Text, View, TouchableOpacity,ScrollView,Platform, Animated } from 'react-native'
import React from 'react'
import Card from './Card'
import Card1 from './Card1'
import { useNavigation } from '@react-navigation/native'
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant'
import {TopTrendingInterviewsData} from '../../../Constant/DataConstant'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'

const TopTrendingInterviews = () => {
    const {darktheme}=useContext(AuthContext);

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textbox}>
                    <Text style={styles.text}>Top Trending Interviews</Text>
                </View>
                {/* Button navigation wants to set... */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TopTrendingPage')}>
                    <Text style={styles.text1}> See All</Text>
                </TouchableOpacity>
            </View>
             {/* card scrollview left to right  */}
            {/* <Animated.ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft:16,marginTop:10}} fadingEdgeLength={60}>
               {TopTrendingInterviewsData.map((item,index)=>{
                     return(
                        <TouchableOpacity onPress={()=>navigation.navigate('ReadInterviews',{item})}
                        key={index}>
                          <Card
                          key={index}
                          question={item.question}
                          image = {item.image}
                          heading = {item.heading}
                          width={193}
                          height={284}
                          />
                        </TouchableOpacity>
                     )
                })

               }
                
            </Animated.ScrollView> */}
            {/* second card view */}
            <View>
                <Card1 />
            </View>
            
        </View>
    )
}

export default TopTrendingInterviews

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    text: {
        fontSize: fontsize.heading,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        fontFamily: fontfamily.fontRegular,
        color: colors.HeadingProfileTitles,
    },
    button: {
        borderRadius: 10,
        paddingVertical: 5,
    },
    text1: {
        fontSize: fontsize.paragraph,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        fontFamily: fontfamily.fontRegular,
        color: colors.primarycolor,
        letterSpacing: 0.5,
    },


})