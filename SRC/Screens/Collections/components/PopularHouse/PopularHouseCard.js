import { StyleSheet, Text, View, ImageBackground, Platform,TouchableOpacity, FlatList,ScrollView } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { colors,LightThemeColors, fontsize, fontWeight, fontfamily } from '../../../../Constant/DesignConstant';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthContext';
const rightarrow = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
<path d="M10.6667 1.16683L16.5 7.00016M16.5 7.00016L10.6667 12.8335M16.5 7.00016L1.5 7.00016" stroke="#F9F8F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`


const PopularHouseCard = (props) => {
    const navigation = useNavigation();
    const {darktheme}=useContext(AuthContext);

    const  Card = ({ image, title, followers }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DiscoverPage', { item: props.data })}>
            <ImageBackground source={image} style={{ width: '100%', height: '100%', borderRadius: 10, }}>
                <View style={styles.TextBox}>
                    <View style={styles.TextBox1}>
                        <Text style={styles.Text1}>{title}</Text>
                        <Text style={styles.Text2}>{followers}</Text>
                    </View>
                    <TouchableOpacity style={styles.icon}>
                        <SvgXml xml={rightarrow} width="18" height="14" />
                    </TouchableOpacity>
                </View>
            </ImageBackground >
        </TouchableOpacity >
    )
}
    return (
        <ScrollView horizontal  style={styles.container} >
        <View >
            <FlatList
                data={props.data}
                numColumns={2}
                renderItem={({ item }) => <Card image={item.image} title={item.title} followers={item.followers} />}
                keyExtractor={item => item.id}  
            />
        </View>
    </ScrollView>
    )
}


export default PopularHouseCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        overflow: 'hidden',

    },    
    card: {
        width: '45%',
        height: 227,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        marginBottom: 20,
        overflow: 'hidden',
    },
    TextBox: {
        width: '100%',
        height: 65,
        backgroundColor: colors.CardBackground,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
    },
    TextBox1: {
        width: '70%',
        height: '100%',
        marginLeft: 10,
        justifyContent: 'center',
    },
    Text1: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.paragraph,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
    },
    Text2: {
        color: '#f9f8f9a1',
        fontSize: fontsize.numbers,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: fontfamily.fontRegular,
        marginTop: 5,
    },
    icon: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})