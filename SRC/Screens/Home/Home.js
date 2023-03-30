import { StyleSheet, Text, View, SafeAreaView, ScrollView,ActivityIndicator} from 'react-native'
import React, { useContext } from 'react'
import { colors,LightThemeColors, fontWeight, fontfamily } from '../../Constant/DesignConstant'
import Headerbar from './components/Headerbar'
import HeaderbarContent from './components/HeaderbarContent'
import TopTrendingInterviews from './TopTrendingInterviews/TopTrendingInterviews'
import DiscoverMediaHouse from './DiscoverMediaHouse/DiscoverMediaHouse'
import PopularInterviews from './PopularInterviews/PopularInterviews'
import CreatePost from '../CreatePage/components/CreatePost'
import { AuthContext } from '../../Context/AuthContext'

const Home = () => {

  const {darktheme}=useContext(AuthContext);
  
  
  return (
    <View style={styles.container(darktheme)}>
      <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header bar  search and bell icon wants to change */}
        <Headerbar />
        {/* arrow icon wants to be change */}
        <HeaderbarContent />
        {/* top trending interviews corrections in process */}
        <TopTrendingInterviews />
        {/* discover media house corrections in process */}
        <DiscoverMediaHouse />
       {/* Popular interviews corrections in process */}
        <PopularInterviews/>
        {/* create post */}
        <CreatePost/>
        <View>
          <Text style={styles.loader}>Load More interview</Text>
          <ActivityIndicator size="large" color={colors.primarycolor} />
        </View>
      </ScrollView>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({

    container: darktheme => ({
    flex: 1,
    backgroundColor: darktheme ? colors.backgroundcolor :LightThemeColors.backgroundcolor  ,
    paddingBottom: 70,
  }),
  loader: {
    fontSize: 20,
    fontWeight: fontWeight.medium,
    color: colors.HeadingProfileTitles,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
    textAlign: 'center',
    marginTop: 20,
  },
})