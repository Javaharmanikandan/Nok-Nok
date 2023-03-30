import { StyleSheet, Text, View, TouchableOpacity,Platform} from 'react-native'
import React from 'react'
import { colors, fontsize, fontWeight, fontfamily } from '../../../../Constant/DesignConstant';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthContext';

const Recent = () => {
    const navigation = useNavigation();
    const {darktheme}=useContext(AuthContext);

    return (
        <View style={styles.Recent}>
            <View style={styles.textbox}>
                <Text style={styles.text1}>Recently explored</Text>
                <Text style={styles.text2}>Last browsed house</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RecentlyExploredPage')}>
                <Text style={styles.text3}> See All</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Recent

const styles = StyleSheet.create({
    Recent: {
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
    RecentList: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
    },
    RecentListCard: {
        width: '48%',
        height: 200,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginBottom: 20,
        elevation: 5,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        overflow: 'hidden',
    },
    RecentListImage: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
    },
    RecentListTextBox: {
        padding: 10,
    },
    RecentListText1: {
        fontSize: fontsize.heading,
        fontWeight: fontWeight.bold,
        fontFamily: fontfamily.fontRegular,
        color: colors.HeadingProfileTitles,
    },
})