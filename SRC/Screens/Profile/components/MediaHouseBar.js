import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontWeight, fontfamily, fontsize } from '../../../Constant/DesignConstant'
import { SvgXml } from 'react-native-svg';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'

const collection = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M15.2222 8.11111H2.77778M15.2222 8.11111C15.6937 8.11111 16.1459 8.29841 16.4793 8.63181C16.8127 8.96521 17 9.41739 17 9.88889V15.2222C17 15.6937 16.8127 16.1459 16.4793 16.4793C16.1459 16.8127 15.6937 17 15.2222 17H2.77778C2.30628 17 1.8541 16.8127 1.5207 16.4793C1.1873 16.1459 1 15.6937 1 15.2222V9.88889C1 9.41739 1.1873 8.96521 1.5207 8.63181C1.8541 8.29841 2.30628 8.11111 2.77778 8.11111M15.2222 8.11111V6.33333C15.2222 5.86184 15.0349 5.40965 14.7015 5.07625C14.3681 4.74286 13.9159 4.55556 13.4444 4.55556M2.77778 8.11111V6.33333C2.77778 5.86184 2.96508 5.40965 3.29848 5.07625C3.63187 4.74286 4.08406 4.55556 4.55556 4.55556M4.55556 4.55556V2.77778C4.55556 2.30628 4.74286 1.8541 5.07625 1.5207C5.40965 1.1873 5.86184 1 6.33333 1H11.6667C12.1382 1 12.5903 1.1873 12.9237 1.5207C13.2571 1.8541 13.4444 2.30628 13.4444 2.77778V4.55556M4.55556 4.55556H13.4444" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const MediaHouseBar = () => {
    const {darktheme}=useContext(AuthContext);

    return (
        <View style={styles.card}>
            <View style={styles.content}>
                <View style={styles.left}>
                    <SvgXml xml={collection} width="18" height="18" />
                    <Text style={styles.text}>Media House</Text>
                </View>
                <View style={styles.centre}>
                    <Text style={styles.text}>10</Text>
                    <Text style={styles.text1}>Followers</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.text}>32</Text>
                    <Text style={styles.text1}>Following</Text>
                </View>
            </View>
        </View>
    )
}

export default MediaHouseBar

const styles = StyleSheet.create({
    card: {
        width : '90%',
        backgroundColor: colors.CardBackground,
        borderRadius: 10,
        padding: 20,
        margin: 10,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.bold,
        color: colors.HeadingProfileTitles,
        marginLeft: 10,
    },
    centre: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text1: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.bold,
        color: colors.SubHeading,
        marginLeft: 5,
    },




})