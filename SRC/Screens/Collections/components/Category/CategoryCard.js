import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { colors,LightThemeColors, fontsize, fontWeight, fontfamily } from '../../../../Constant/DesignConstant';
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthContext';



const CategoryCard = (props) => {
  const {darktheme}=useContext(AuthContext);

    const Card =({ title, onPress, icon }) => {
  return (
       <TouchableOpacity style={styles.icon} onPress={onPress}>
        <SvgXml xml={icon} width="15" height="23" />
        <Text style={styles.iconText}>{title}</Text>
      </TouchableOpacity> 
  )
}
    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {props.data.map((item, index) => {
                        return (
                            <Card 
                            key={index} 
                            title={item.title} 
                            icon={item.icon} 
                            onPress={item.onPress} />
                        )})}
        </View>
    )
}



       

export default CategoryCard

const styles = StyleSheet.create({
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: colors.CardBackground,
        marginRight: 10,
        marginBottom: 10,
      },
      iconText: {
        fontSize: fontsize.paragraph,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
        marginLeft: 5,
      },

})