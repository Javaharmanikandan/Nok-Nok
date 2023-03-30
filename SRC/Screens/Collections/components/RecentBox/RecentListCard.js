import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fontsize, fontWeight, fontfamily } from '../../../../Constant/DesignConstant'
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthContext';



const data = [
    {
        id: 1,
        image: require('../../../../Assets/photos/RecentListImage1.png'),
        heading: 'Bitcoin Reckless',
        interviews: '56 Interviews',
        followers: '72K Followers',
        selected: false
    },
    {
        id: 2,
        image: require('../../../../Assets/photos/RecentListImage2.png'),
        heading: 'Value Education',
        interviews: '56 Interviews',
        followers: '72K Followers',
        selected: false
    },
    {
        id: 3,
        image: require('../../../../Assets/photos/RecentListImage3.png'),
        heading: 'Predating Books',
        interviews: '56 Interviews',
        followers: '72K Followers',
        selected: false
    },
    {
        id: 4,
        image: require('../../../../Assets/photos/RecentListImage3.png'),
        heading: 'Bitcoin Reckless',
        interviews: '56 Interviews',
        followers: '72K Followers',
        selected: false
    },
]




const RecentListCard = (props) => {
    const navigation = useNavigation()
    const {darktheme}=useContext(AuthContext);

    const [active, setActive] = useState()
    const handler = (selected,id)=> {
        const index = props.data.findIndex(object => {
            return object.id === id 
          });
        const newArray = [...props.data]; 
        newArray[index].selected = !selected
        setActive(newArray)            
    }



    const Card = ({ image,heading, interviews, followers, onPress, selected }) => { 
        return (
            <View>
                <View style={styles.RecentListCard}>
                    <View style={styles.RecentListImageBox}>
                        <Image source={image} style={styles.RecentListImage} />
                    </View>
                    <View style={styles.RecentListTextBox}>
                        <View style={styles.RecentListTextBox}>
                            <Text style={styles.RecentListText1}>{heading}</Text>
                            <View style={styles.RecentListTextBox1}>
                                <Text style={styles.Text1}>{interviews}</Text>
                                <Text style={styles.Text1}>|</Text>
                                <Text style={styles.Text1}>{followers}</Text>
                            </View>
                        </View>
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
            </View >
        )
    }
    return (
        <View style={styles.RecentList}>
            {props.data.map((item, index) => {
                return (
                    <TouchableOpacity  key = {index}  
                    onPress={() => navigation.navigate('MediaHouseProfile', { item })}>
                    <Card
                        key={index}
                        image={item.image}
                        heading={item.heading}
                        interviews={item.interviews}
                        followers={item.followers}
                        onPress={() => handler(item.selected, item.id)}
                        selected={item.selected}
                    />
                 </TouchableOpacity>
                )
            })}
        </View>
     
    )
}

export default RecentListCard

const styles = StyleSheet.create({
    RecentList: {
        width: '100%',
        height: 'auto',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        

    },
    RecentListCard: {
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        borderColor: '#E5E5E5',
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 15,

    },
    RecentListImageBox: {
        width: 50,
        height: 50,
        borderRadius: 22,
        overflow: 'hidden',
    },
    RecentListImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        
    },
    RecentListTextBox: {
        width: '100%',
        height: 'auto',
        marginLeft: 10,
        justifyContent: 'center',
    },
    RecentListText1: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.subheading,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular2 : fontfamily.fontRegular2,
        fontWeight: fontWeight.fontRegular,

    },
    RecentListTextBox1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 5,
    },
    Text1: {
        color: colors.SubHeading,
        fontSize: fontsize.paragraph,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
        fontWeight: fontWeight.fontRegular,
        marginRight: 5,
    },
    Button: {
        width: 80,
        height: 30,
        backgroundColor: colors.FollowBtnBG,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 90,
        top: 10,
    },
    Text2: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
    },






})