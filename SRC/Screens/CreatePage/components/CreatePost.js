import { StyleSheet, Text, View ,ImageBackground,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { colors,LightThemeColors,fontWeight,fontfamily,fontsize } from '../../../Constant/DesignConstant'
import { useSelector,useDispatch } from 'react-redux'
import LCSbar from '../../Home/components/LCSbar';
import { deletePostlist } from '../../../../Redux/Reducer/AddPost';
import { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext'

const more = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="18" viewBox="0 0 32 18" fill="none">
<path d="M10 11C11.1046 11 12 10.1046 12 9C12 7.8955 11.1046 7 10 7C8.89544 7 8 7.8955 8 9C8 10.1046 8.89544 11 10 11Z" fill="#CCCCCC"/>
<path d="M16 11C17.1046 11 18 10.1046 18 9C18 7.8955 17.1046 7 16 7C14.8955 7 14 7.8955 14 9C14 10.1046 14.8955 11 16 11Z" fill="#CCCCCC"/>
<path d="M22 11C23.1045 11 24 10.1046 24 9C24 7.8955 23.1045 7 22 7C20.8954 7 20 7.8955 20 9C20 10.1046 20.8954 11 22 11Z" fill="#CCCCCC"/>
</svg>`
const CreatePost = () => {
  // const dispatch = useDispatch()
  // const Type = useSelector(state => state.AddPost)
  const {darktheme}=useContext(AuthContext);

  const Type=[];
  console.log(Type)
  const Card = (props) => {
  return (
    <View style={styles.container}>
    <View style={styles.card}>
      <ImageBackground source={props.image} style={styles.image}>
      <View style={styles.footer}>
          <View style={styles.footer1}>
          <Image source={require('../../../Assets/photos/profilePic.png')} style={styles.image1} />
          <Text style={styles.text1}>Malbert_milof</Text>
          <Text style={styles.text2}>1hr ago</Text>
          </View>
          <TouchableOpacity onPress={() => dispatch(deletePostlist(props.name))}>
          <SvgXml xml={more} width="32" height="18" />
          </TouchableOpacity>
        </View>
        <View style={styles.Quotes}>
        <Text style={styles.text}>" {props.name} "</Text>
        <Text style={styles.text}>"Share your thoughts with the world"</Text>
        </View>
        <View style={styles.footer2}>
          <LCSbar />
        </View>
        </ImageBackground>
    </View>
    </View>
  )
}
  return (
    <View style={styles.container}>
      {Type ? Type.map((item,index) => {
        return (
          <Card key={index}
          name={item.post} image={item.background} />
        )
      }):null}
    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundcolor, 
        marginTop: 10, 
        alignItems: 'center', 
        
    },
    card: {
        width:358,
        height: 353,
        backgroundColor: colors.CardBackground1,
        borderRadius: 22,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.heading,
        fontWeight: fontWeight.medium,
        fontFamily: fontfamily.fontRegular2,
        textAlign: 'center',
        },
    image: {
        width: 358,
        height: 353,
        borderRadius: 22,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        height:50,
        width: 358,
        backgroundColor: '#1f1f1f73',
        
    },
    image1: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    text1: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.heading,
        fontWeight: fontWeight.medium,
        fontFamily: fontfamily.fontRegular2,
        textAlign: 'center',
    },
    footer1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start',
        marginLeft: 10,
    },
    footer2: {
        position: 'absolute',
        bottom: 0,
        height:50,
        width: 358,
        backgroundColor: '#1f1f1f73',
    },
    text2: {
        color: colors.PostDescriptionAnswer,
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.medium,
        fontFamily: fontfamily.fontRegular,
        textAlign: 'center',
        marginLeft: 10,
    },
    Quotes: {
        position: 'absolute',
        marginTop:'50%',
        alignSelf: 'center',
    },


})