import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { colors,LightThemeColors, fontWeight, fontfamily, fontsize } from '../../Constant/DesignConstant'
import { SvgXml } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import Card from './components/DiscoverMediaHouse/Card'
import Recent from './components/RecentBox/Recent';
import RecentListCard from './components/RecentBox/RecentListCard';
import PopularHouse from './components/PopularHouse/PopularHouse';
import PopularHouseCard from './components/PopularHouse/PopularHouseCard';
import { useNavigation } from '@react-navigation/native'
import { DiscoverMediaData,CategoryData } from '../../Constant/DataConstant';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext'





const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
<path d="M1 11L6 6L1 1" stroke="#F98EC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const Data = [
  {
      id: 1,
      image: require('../../Assets/photos/PopularHouseCard1.png'),
      title: 'Gold Diggers',
      followers: '1.9M Followers',
  },
  {
      id: 2,
      image: require('../../Assets/photos/PopularHouseCard2.png'),
      title: 'Shrewdbs',
      followers: '1M Followers',
  },
]

const Collections = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState();
  const {darktheme}=useContext(AuthContext);

  const handler = (selected,id)=> {
      const index = DiscoverMediaData.findIndex(object => {
          return object.id === id 
        });
      const newArray = [...DiscoverMediaData]; 
      newArray[index].selected = !selected
      setActive(newArray)
      console.log(newArray)
  }
  const CategoryTitle = ({ title, onPress, icon }) => {
    return (
      <TouchableOpacity style={styles.icon} onPress={onPress}>
        <SvgXml xml={icon} width="15" height="23" />
        <Text style={styles.iconText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.text}>Media</Text>
            <Text style={styles.text1}>House</Text>
          </View>
          <TouchableOpacity style={styles.headerRight}>
            <Text style={styles.text2}>My House</Text>
            <SvgXml xml={leftArrow} width="7" height="12" />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.text3}>Category</Text>
          </View>
          <TouchableOpacity style={styles.headerRight1} onPress={() => navigation.navigate("CategoryPage")}>
            <Text style={styles.text4}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headertext}>
          <Text style={styles.text5}>Pick a house & explore it!</Text>
        </View>
        <View style={styles.Category}>
          {CategoryData.map((item, index) => (
            <CategoryTitle
              key={index}
              title={item.title}
              onPress={() => console.log(item.title)}
              icon={item.icon}
            />
          ))}
          <TouchableOpacity style={styles.ExploreAll} onPress={() =>navigation.navigate("CategoryPage")}>
            <Text style={styles.text6}>Explore All</Text>
            <SvgXml xml={leftArrow} width="7" height="12" style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.gradientBox}>
          <LinearGradient colors={['#F98EC4', '#7350A0',]} style={styles.linearGradient} />
        </View>
        <View style={styles.DiscoverMediaBox}>
          <View style={styles.textbox}>
            <Text style={styles.text7}>Discover Media House</Text>
            <Text style={styles.text8}>500 Plus Media House are there</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("DiscoverPage")}>
            <Text style={styles.text9}> See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.CardBox}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} fadingEdgeLength={100}>
            {DiscoverMediaData.map((item, index) => (
              <TouchableOpacity 
              key={index}
              onPress={() => navigation.navigate('MediaHouseProfile', {item })}>
              <Card
                key={index}
                heading={item.heading}
                followers={item.followers}
                questions={item.interviews}
                image={item.image}
                selected={item.selected}
                width={300}
                height={168}
                onPress={() => handler(item.selected, item.id)}
              />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.RecentBox}>
          <Recent />
          <RecentListCard data = {DiscoverMediaData} />

        </View>
        <View style={styles.PopularHouse}>
          <PopularHouse />
          <PopularHouseCard  data={Data}/>

        </View>
      </ScrollView>
    </View>
  )
}

export default Collections

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
    paddingBottom: 70,
    paddingHorizontal: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#313A4F',
    marginRight: 10,
  },
  headerRight1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: fontsize.bigheading,
    color: colors.HeadingProfileTitles,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
    fontFamily: fontfamily.fontRegular,
  },
  text1: {
    fontSize: fontsize.bigheading,
    color: colors.primarycolor,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
    fontFamily: fontfamily.fontRegular,
    marginLeft: 5,
  },
  text2: {
    fontSize: fontsize.paragraph,
    color: colors.HeadingProfileTitles,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
    marginRight: 5,
  },
  text3: {
    fontSize: fontsize.heading,
    color: colors.HeadingProfileTitles,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.medium,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
  },
  text4: {
    fontSize: fontsize.paragraph,
    color: colors.primarycolor,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.medium,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
    marginRight: 10,
  },
  text5: {
    fontSize: fontsize.paragraph,
    color: colors.SubHeading,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.medium,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
    marginLeft: 10,
  },
  headertext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  Category: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    flexWrap: 'wrap',
  },
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
  ExploreAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 15,
  },
  text6: {
    fontSize: fontsize.paragraph,
    color: colors.IconStroke,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
    marginLeft: 5,
  },
  linearGradient: {
    height: 1,
    width: '100%',
    zIndex: -1,
    opacity: 0.5
  },
  gradientBox: {
    marginTop: 10,
  },
  DiscoverMediaBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  textbox: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  text7: {
    fontSize: fontsize.heading,
    color: colors.HeadingProfileTitles,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
    marginLeft: 10,
    letterSpacing: 0.5,
  },
  text8: {
    fontSize: fontsize.paragraph,
    color: colors.SubHeading,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.medium,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
    marginLeft: 10,
    marginTop: 5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 15,
  },
  text9: {
    fontSize: fontsize.paragraph,
    color: colors.primarycolor,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
    marginRight: 10,
  },
  CardBox: {
    marginTop: 10,
  },
  RecentBox: {
    marginTop: 10,
  },
  text10: {
    fontSize: fontsize.heading,
    color: colors.HeadingProfileTitles,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
    marginLeft: 10,
  },
  PopularHouse: {
    marginTop: 10,
  },
})