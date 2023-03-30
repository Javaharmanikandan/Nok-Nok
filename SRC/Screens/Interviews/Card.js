import { StyleSheet, Text, View, Image, Platform, TouchableOpacity } from 'react-native';
import React from 'react'
import { colors,LightThemeColors, fontfamily, fontWeight, fontsize } from '../../Constant/DesignConstant';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import QAsection from '../Home/components/QAsection';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext'
import { useContext } from 'react';


const profile = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<rect width="30" height="30" rx="15" fill="white" fill-opacity="0.12"/>
<path d="M14.1847 20.6H10.3695C10.0348 20.6 9.70013 20.39 9.56626 20.11C9.36546 19.83 9.36546 19.55 9.49933 19.2C10.3025 17.24 12.1098 15.91 14.1847 15.91C16.2597 15.91 18 14.09 18 11.92C18 9.75 16.2597 8 14.1178 8C12.0428 8 10.3025 9.82 10.3025 11.99C10.3025 13.25 10.838 14.37 11.7082 15.07C10.1687 15.7 8.82998 17.03 8.16064 18.71C7.89291 19.41 7.95984 20.25 8.36144 20.88C8.82998 21.58 9.49933 22 10.3025 22H14.1178C14.5194 22 14.7872 21.72 14.7872 21.3C14.7872 20.88 14.5194 20.6 14.1847 20.6ZM11.6412 11.99C11.6412 10.59 12.7791 9.4 14.1178 9.4C15.4565 9.4 16.5944 10.59 16.5944 11.99C16.5944 13.39 15.4565 14.58 14.1178 14.58C12.7791 14.58 11.6412 13.39 11.6412 11.99Z" fill="#C1C1C1"/>
<path d="M21.3478 17.7391H19.6522V15.7609C19.6522 15.3043 19.3913 15 19 15C18.6087 15 18.3478 15.3043 18.3478 15.7609V17.7391H16.6522C16.2609 17.7391 16 18.0435 16 18.5C16 18.9565 16.2609 19.2609 16.6522 19.2609H18.3478V21.2391C18.3478 21.6957 18.6087 22 19 22C19.3913 22 19.6522 21.6957 19.6522 21.2391V19.2609H21.3478C21.7391 19.2609 22 18.9565 22 18.5C22 18.0435 21.7391 17.7391 21.3478 17.7391Z" fill="#C1C1C1"/>
</svg>`
const heart = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
<path d="M14.3 0C12.6 0 11.1 0.68786 10 1.96532C8.9 0.68786 7.4 0 5.7 0C2.6 0 0 2.55491 0 5.60116C0 5.79769 0 5.99422 0 6.19075C0.4 10.8092 5.4 14.6416 8.3 16.5087C8.8 16.8035 9.4 17 10 17C10.6 17 11.2 16.8035 11.7 16.5087C14.6 14.6416 19.6 10.8092 20 6.28902C20 6.09249 20 5.89595 20 5.69942C20 2.55491 17.4 0 14.3 0ZM18 5.99422C17.7 9.9249 12.7 13.4624 10.6 14.7399C10.2 14.9364 9.8 14.9364 9.4 14.7399C7.3 13.3642 2.4 9.8266 2 5.89595C2 5.89595 2 5.69942 2 5.60116C2 3.63584 3.7 1.96532 5.7 1.96532C7.2 1.96532 8.5 2.84971 9.1 4.12717C9.2 4.52023 9.6 4.71676 10 4.71676C10.4 4.71676 10.8 4.52023 10.9 4.12717C11.5 2.84971 12.8 1.96532 14.3 1.96532C16.3 1.96532 18 3.63584 18 5.60116C18 5.69942 18 5.89595 18 5.99422Z" fill="#A8A8A8"/>
</svg>`
const comment = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M1.8 20C1.3 20 0.9 19.8 0.5 19.5C0 19 -0.1 18.3 0.0999999 17.7L1.1 14.6C0.4 13.2 0 11.6 0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C8.4 20 6.8 19.6 5.4 18.9L2.3 19.9C2.2 20 2 20 1.8 20ZM6 16.9C7.2 17.6 8.6 18 10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2C5.6 2 2 5.6 2 10C2 11.4 2.4 12.8 3.1 14C3.2 14.2 3.3 14.5 3.2 14.8L2.2 17.9L5.3 16.9C5.3 16.9 5.90219 16.8511 6 16.9Z" fill="#A8A8A8"/>
</svg>`
const Card = (props) => {
  
  const {darktheme}=useContext(AuthContext);
  const navigation = useNavigation();

  const ReadMore = () => {
    return (
      <Text  style={{color:'#CDA8FF',fontWeight:'bold',lineHeight:22 }}>
         ...more
      </Text>
    )
}


  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.Type && (
        <View style={styles.cardHeader}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.headerbox}>
              <Text style={styles.headerText}>Interview</Text>
            </View>
            <Text style={styles.headerText1}>ENVIRONMENT</Text>
          </View>
          <Icon name="more-horizontal" size={20} color={colors.PostDescriptionAnswer} />
        </View>
      )}
      <View style={[styles.profileDetails, !props.Type && { marginTop: 20 }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.imagebox}>
            <TouchableOpacity>
              <Image source={require('../../Assets/photos/proficPic3.png')} style={styles.image} />
            </TouchableOpacity>
          </View>
          <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.name}>{props.profileName}</Text>
              <Text style={styles.name1}>.</Text>
              <Text style={styles.name2}>5d ago</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[styles.name2,{fontSize:12,marginLeft:10}]}>Answered by </Text>
          <Text style={[styles.answerby,{fontSize:12,marginLeft:3}]}>@Dr_mahendren </Text>
          </View>
          </View>
              </View>
          
        <TouchableOpacity>
          <SvgXml xml={profile} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardBody}>
        <View style={[styles.textContent, !props.Type && { marginTop: 10 }]}>
          <Text style={[styles.text, !props.Type && { fontSize: fontsize.paragraph }]}>{props.question}</Text>
          <Image source={require('../../Assets/photos/InterviewImg.png')} style={styles.image1} />
        </View>
        <View style={[styles.textContent1, !props.Type && { marginTop: 0 }]}>
          <Text  ellipsizeMode='tail' numberOfLines={2} style={[styles.text1, !props.Type && { marginTop: 5 }]}>{props.answer}{<ReadMore />}</Text>
        </View>
      </View>
      {props.Type && (
        <View style={{marginTop:10}}>
          {/* <View style={styles.textbox}>
            <Text style={styles.text3}>1. What will the bigger issue is the appalling state of our defense in anything connected to the net?</Text>
          </View> */}
          <View style={styles.qaSection}>
            <QAsection />
          </View>
          <LinearGradient colors={['#F98EC4', '#7350A0',]} style={styles.linearGradient} />
          <View style={styles.cardFooter}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SvgXml xml={heart} style={styles.icon} />
              <Text style={styles.text2}>1.2k</Text>
              <SvgXml xml={comment} style={styles.icon} />
              <Text style={styles.text2}>1.2k</Text>
            </View>
            {props.activeTab ? (
              <TouchableOpacity onPress={() => navigation.navigate("ReadInterviews", { item: props.active })}>
                <View style={styles.button}>
                  <Text style={styles.text4}>Read Interview</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => navigation.navigate('GiveInterViews', { item: props.active })}>
                <View style={styles.button}>
                  <Text style={styles.text4}>Give Interview</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </TouchableOpacity>
  )
}


export default Card

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.CardBackground,
    height: 'auto',
    alignSelf: 'center',
    borderRadius: 22,
    marginTop: 20,
    paddingBottom: 10,
    borderRadius: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerbox: {
    borderWidth: 1,
    borderColor: colors.HeadingProfileTitles,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headerText: {
    color: colors.HeadingProfileTitles,
    fontFamily: fontfamily.fontRegular,
    fontSize: fontsize.paragraph,
    fontWeight: fontWeight.bold,
  },
  headerText1: {
    color: colors.HeadingProfileTitles,
    fontFamily: fontfamily.fontRegular,
    fontSize: fontsize.small,
    fontWeight: fontWeight.bold,
    marginLeft: 10,
    letterSpacing: 1.5,
  },
  profileDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imagebox: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.CardBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 36,
    width: 36,
    borderRadius: 45,
  },
  name: {
    color: colors.HeadingProfileTitles,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
    marginLeft: 10,
    fontSize: fontsize.paragraph,
    fontWeight: Platform.OS === 'ios' ? fontWeight.bold : fontWeight.regular,
    marginLeft: 10,
  },
  name1: {
    color: colors.SubHeading,
    fontFamily: fontfamily.fontRegular,
    fontSize: fontsize.paragraph,
    fontWeight: fontWeight.bold,
    marginLeft: 5,
    marginBottom: 10,
  },
  name2: {
    color: colors.SubHeading,
    fontFamily: fontfamily.fontRegular,
    fontSize: fontsize.numbers,
    fontWeight: fontWeight.medium,
    marginLeft: 3,
  },
  cardBody: {
    justifyContent: 'space-between',
  },
  textContent: {
    width: 250,
    marginLeft: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
  textContent1: {
   
    // flexDirection: 'row',
  },
  text: {
    color: colors.PostTitleQuestion,
    fontFamily: fontfamily.fontRegular,
    fontSize: fontsize.subheading,
    fontWeight: fontWeight.bold,
    lineHeight: 25,
    marginLeft: 10,
  },
  image1: {
    height: 64,
    width: 64,
    marginLeft: 10,
  },
  text1: {
    width: 322,
    color: colors.PostDescriptionAnswer,
    fontFamily: fontfamily.fontRegular1,
    fontSize: fontsize.paragraph,
    fontWeight: fontWeight.medium,
    lineHeight: 25,
    marginLeft: 20,
    marginTop: 20,
    marginRight:20,
  },
  qaSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#2F3138'
  },
  textbox: {
    backgroundColor: '#1A1B1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text3: {
    width: 322,
    height: 44,
    color: colors.PostDescriptionAnswer,
    fontFamily: fontfamily.fontRegular,
    fontSize: fontsize.paragraph,
    fontWeight: fontWeight.medium,
    lineHeight: 22,
    marginLeft: 20,
    marginTop: 12,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  text2: {
    color: colors.IconStroke,
    fontFamily: fontfamily.fontRegular,
    fontSize: fontsize.paragraph,
    fontWeight: fontWeight.bold,
    marginLeft: 5,
  },
  icon: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  button: {
    backgroundColor: colors.TabSelectedColor,
    height: 37,
    width: 134,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text4: {
    color: colors.HeadingProfileTitles,
    fontFamily: fontfamily.fontRegular,
    fontSize: fontsize.paragraph,
    fontWeight: fontWeight.bold,
  },
  tex: {
    color: colors.textwhite2,
    fontFamily: fontfamily.fontRegular,
    fontSize: fontsize.paragraph,
    fontWeight: fontWeight.bold,
    marginLeft: 10,
  },
  linearGradient: {
    height: 1,
    width: '100%',
    zIndex: -1,
    opacity: 0.5
  },
  
  answerby: {
    fontSize: fontsize.paragraph,
    fontWeight: fontWeight.regular,
    color: colors.primarycolor,
    fontFamily: fontfamily.fontRegular,
},
})