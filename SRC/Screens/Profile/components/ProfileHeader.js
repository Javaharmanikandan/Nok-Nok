import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'
const heart = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
<path d="M14.3 0C12.6 0 11.1 0.68786 10 1.96532C8.9 0.68786 7.4 0 5.7 0C2.6 0 0 2.55491 0 5.60116C0 5.79769 0 5.99422 0 6.19075C0.4 10.8092 5.4 14.6416 8.3 16.5087C8.8 16.8035 9.4 17 10 17C10.6 17 11.2 16.8035 11.7 16.5087C14.6 14.6416 19.6 10.8092 20 6.28902C20 6.09249 20 5.89595 20 5.69942C20 2.55491 17.4 0 14.3 0ZM18 5.99422C17.7 9.9249 12.7 13.4624 10.6 14.7399C10.2 14.9364 9.8 14.9364 9.4 14.7399C7.3 13.3642 2.4 9.8266 2 5.89595C2 5.89595 2 5.69942 2 5.60116C2 3.63584 3.7 1.96532 5.7 1.96532C7.2 1.96532 8.5 2.84971 9.1 4.12717C9.2 4.52023 9.6 4.71676 10 4.71676C10.4 4.71676 10.8 4.52023 10.9 4.12717C11.5 2.84971 12.8 1.96532 14.3 1.96532C16.3 1.96532 18 3.63584 18 5.60116C18 5.69942 18 5.89595 18 5.99422Z" fill="#A8A8A8"/>
</svg>`
const share = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" viewBox="0 0 16 23" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.69922V19.2127C2 19.9194 2.80487 20.2083 3.23991 19.8105L7.2649 16.0283C7.6497 15.6666 8.2495 15.6666 8.6344 16.0283L12.6595 19.8106C12.883 20.0152 13.1805 20.0544 13.4771 19.9289C13.7766 19.8021 13.9696 19.5497 14 19.2723V3.66028C14 2.7652 13.2243 2 12.3813 2H3.71942C2.89718 2 2.08312 2.74986 2 3.69922ZM0.00246 3.59014C0.13612 1.6893 1.73051 0 3.71942 0H12.3813C14.3584 0 16 1.69045 16 3.66028V19.315C16 19.3384 15.9992 19.3618 15.9975 19.3851C15.843 21.5835 13.0758 22.9175 11.3 21.2775L11.2936 21.2716L7.9496 18.1293L4.59935 21.2775C2.81798 22.9226 0 21.5742 0 19.2127V3.66028C0 3.63688 0.000820003 3.61349 0.00246 3.59014Z" fill="#A8A8A8"/>
</svg>`
const pen = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 20H21" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 3.49998C16.8978 3.10216 17.4374 2.87866 18 2.87866C18.2786 2.87866 18.5544 2.93353 18.8118 3.04014C19.0692 3.14674 19.303 3.303 19.5 3.49998C19.697 3.69697 19.8532 3.93082 19.9598 4.18819C20.0665 4.44556 20.1213 4.72141 20.1213 4.99998C20.1213 5.27856 20.0665 5.55441 19.9598 5.81178C19.8532 6.06915 19.697 6.303 19.5 6.49998L7 19L3 20L4 16L16.5 3.49998Z" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const setting = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.7273 13.7273C18.6063 14.0015 18.5702 14.3056 18.6236 14.6005C18.6771 14.8954 18.8177 15.1676 19.0273 15.3818L19.0818 15.4364C19.2509 15.6052 19.385 15.8057 19.4765 16.0265C19.568 16.2472 19.6151 16.4838 19.6151 16.7227C19.6151 16.9617 19.568 17.1983 19.4765 17.419C19.385 17.6397 19.2509 17.8402 19.0818 18.0091C18.913 18.1781 18.7124 18.3122 18.4917 18.4037C18.271 18.4952 18.0344 18.5423 17.7955 18.5423C17.5565 18.5423 17.3199 18.4952 17.0992 18.4037C16.8785 18.3122 16.678 18.1781 16.5091 18.0091L16.4545 17.9545C16.2403 17.745 15.9682 17.6044 15.6733 17.5509C15.3784 17.4974 15.0742 17.5335 14.8 17.6545C14.5311 17.7698 14.3018 17.9611 14.1403 18.205C13.9788 18.4489 13.8921 18.7347 13.8909 19.0273V19.1818C13.8909 19.664 13.6994 20.1265 13.3584 20.4675C13.0174 20.8084 12.5549 21 12.0727 21C11.5905 21 11.1281 20.8084 10.7871 20.4675C10.4461 20.1265 10.2545 19.664 10.2545 19.1818V19.1C10.2475 18.7991 10.1501 18.5073 9.97501 18.2625C9.79991 18.0176 9.55521 17.8312 9.27273 17.7273C8.99853 17.6063 8.69437 17.5702 8.39947 17.6236C8.10456 17.6771 7.83244 17.8177 7.61818 18.0273L7.56364 18.0818C7.39478 18.2509 7.19425 18.385 6.97353 18.4765C6.7528 18.568 6.51621 18.6151 6.27727 18.6151C6.03834 18.6151 5.80174 18.568 5.58102 18.4765C5.36029 18.385 5.15977 18.2509 4.99091 18.0818C4.82186 17.913 4.68775 17.7124 4.59626 17.4917C4.50476 17.271 4.45766 17.0344 4.45766 16.7955C4.45766 16.5565 4.50476 16.3199 4.59626 16.0992C4.68775 15.8785 4.82186 15.678 4.99091 15.5091L5.04545 15.4545C5.25503 15.2403 5.39562 14.9682 5.4491 14.6733C5.50257 14.3784 5.46647 14.0742 5.34545 13.8C5.23022 13.5311 5.03887 13.3018 4.79497 13.1403C4.55107 12.9788 4.26526 12.8921 3.97273 12.8909H3.81818C3.33597 12.8909 2.87351 12.6994 2.53253 12.3584C2.19156 12.0174 2 11.5549 2 11.0727C2 10.5905 2.19156 10.1281 2.53253 9.78708C2.87351 9.4461 3.33597 9.25455 3.81818 9.25455H3.9C4.2009 9.24751 4.49273 9.15011 4.73754 8.97501C4.98236 8.79991 5.16883 8.55521 5.27273 8.27273C5.39374 7.99853 5.42984 7.69437 5.37637 7.39947C5.3229 7.10456 5.18231 6.83244 4.97273 6.61818L4.91818 6.56364C4.74913 6.39478 4.61503 6.19425 4.52353 5.97353C4.43203 5.7528 4.38493 5.51621 4.38493 5.27727C4.38493 5.03834 4.43203 4.80174 4.52353 4.58102C4.61503 4.36029 4.74913 4.15977 4.91818 3.99091C5.08704 3.82186 5.28757 3.68775 5.50829 3.59626C5.72901 3.50476 5.96561 3.45766 6.20455 3.45766C6.44348 3.45766 6.68008 3.50476 6.9008 3.59626C7.12152 3.68775 7.32205 3.82186 7.49091 3.99091L7.54545 4.04545C7.75971 4.25503 8.03183 4.39562 8.32674 4.4491C8.62164 4.50257 8.9258 4.46647 9.2 4.34545H9.27273C9.54161 4.23022 9.77092 4.03887 9.93245 3.79497C10.094 3.55107 10.1807 3.26526 10.1818 2.97273V2.81818C10.1818 2.33597 10.3734 1.87351 10.7144 1.53253C11.0553 1.19156 11.5178 1 12 1C12.4822 1 12.9447 1.19156 13.2856 1.53253C13.6266 1.87351 13.8182 2.33597 13.8182 2.81818V2.9C13.8193 3.19253 13.906 3.47834 14.0676 3.72224C14.2291 3.96614 14.4584 4.15749 14.7273 4.27273C15.0015 4.39374 15.3056 4.42984 15.6005 4.37637C15.8954 4.3229 16.1676 4.18231 16.3818 3.97273L16.4364 3.91818C16.6052 3.74913 16.8057 3.61503 17.0265 3.52353C17.2472 3.43203 17.4838 3.38493 17.7227 3.38493C17.9617 3.38493 18.1983 3.43203 18.419 3.52353C18.6397 3.61503 18.8402 3.74913 19.0091 3.91818C19.1781 4.08704 19.3122 4.28757 19.4037 4.50829C19.4952 4.72901 19.5423 4.96561 19.5423 5.20455C19.5423 5.44348 19.4952 5.68008 19.4037 5.9008C19.3122 6.12152 19.1781 6.32205 19.0091 6.49091L18.9545 6.54545C18.745 6.75971 18.6044 7.03183 18.5509 7.32674C18.4974 7.62164 18.5335 7.9258 18.6545 8.2V8.27273C18.7698 8.54161 18.9611 8.77092 19.205 8.93245C19.4489 9.09397 19.7347 9.18065 20.0273 9.18182H20.1818C20.664 9.18182 21.1265 9.37338 21.4675 9.71435C21.8084 10.0553 22 10.5178 22 11C22 11.4822 21.8084 11.9447 21.4675 12.2856C21.1265 12.6266 20.664 12.8182 20.1818 12.8182H20.1C19.8075 12.8193 19.5217 12.906 19.2778 13.0676C19.0339 13.2291 18.8425 13.4584 18.7273 13.7273V13.7273Z" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const link = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5863 2.58592C11.7708 2.3949 11.9915 2.24254 12.2355 2.13772C12.4795 2.0329 12.742 1.97773 13.0075 1.97542C13.2731 1.97311 13.5364 2.02371 13.7822 2.12428C14.028 2.22484 14.2513 2.37334 14.4391 2.56113C14.6269 2.74892 14.7754 2.97222 14.876 3.21801C14.9765 3.4638 15.0271 3.72716 15.0248 3.99272C15.0225 4.25828 14.9673 4.52072 14.8625 4.76473C14.7577 5.00874 14.6053 5.22943 14.4143 5.41392L11.4143 8.41392C11.0393 8.78886 10.5307 8.99949 10.0003 8.99949C9.47 8.99949 8.96138 8.78886 8.58633 8.41392C8.39772 8.23176 8.14512 8.13097 7.88292 8.13325C7.62073 8.13552 7.36991 8.24069 7.18451 8.4261C6.9991 8.61151 6.89393 8.86232 6.89165 9.12452C6.88937 9.38671 6.99017 9.63932 7.17232 9.82792C7.92244 10.5778 8.93967 10.9991 10.0003 10.9991C11.061 10.9991 12.0782 10.5778 12.8283 9.82792L15.8283 6.82792C16.557 6.07351 16.9601 5.0631 16.951 4.01431C16.9419 2.96553 16.5212 1.96228 15.7796 1.22065C15.038 0.479013 14.0347 0.0583372 12.9859 0.0492235C11.9371 0.0401098 10.9267 0.443287 10.1723 1.17192L8.67232 2.67192C8.57681 2.76417 8.50063 2.87451 8.44822 2.99652C8.39581 3.11852 8.36823 3.24974 8.36707 3.38252C8.36592 3.5153 8.39122 3.64698 8.4415 3.76987C8.49178 3.89277 8.56604 4.00442 8.65993 4.09831C8.75382 4.19221 8.86547 4.26646 8.98837 4.31674C9.11127 4.36702 9.24295 4.39232 9.37573 4.39117C9.5085 4.39002 9.63972 4.36243 9.76173 4.31002C9.88373 4.25761 9.99408 4.18143 10.0863 4.08592L11.5863 2.58592ZM6.58632 7.58592C6.96138 7.21098 7.47 7.00035 8.00032 7.00035C8.53065 7.00035 9.03927 7.21098 9.41432 7.58592C9.50657 7.68143 9.61692 7.75761 9.73892 7.81002C9.86092 7.86243 9.99214 7.89002 10.1249 7.89117C10.2577 7.89232 10.3894 7.86702 10.5123 7.81674C10.6352 7.76646 10.7468 7.69221 10.8407 7.59832C10.9346 7.50442 11.0089 7.39277 11.0591 7.26987C11.1094 7.14698 11.1347 7.0153 11.1336 6.88252C11.1324 6.74974 11.1048 6.61852 11.0524 6.49652C11 6.37451 10.9238 6.26417 10.8283 6.17192C10.0782 5.42204 9.06098 5.00077 8.00032 5.00077C6.93967 5.00077 5.92244 5.42204 5.17232 6.17192L2.17232 9.17192C1.79028 9.54091 1.48556 9.98229 1.27592 10.4703C1.06628 10.9583 0.955938 11.4832 0.951323 12.0143C0.946708 12.5454 1.04791 13.0722 1.24904 13.5637C1.45016 14.0553 1.74717 14.5019 2.12274 14.8775C2.49832 15.2531 2.94492 15.5501 3.43651 15.7512C3.92809 15.9523 4.45481 16.0535 4.98593 16.0489C5.51705 16.0443 6.04193 15.934 6.52994 15.7243C7.01796 15.5147 7.45934 15.21 7.82832 14.8279L9.32832 13.3279C9.42383 13.2357 9.50002 13.1253 9.55243 13.0033C9.60483 12.8813 9.63242 12.7501 9.63357 12.6173C9.63473 12.4845 9.60943 12.3529 9.55915 12.23C9.50887 12.1071 9.43461 11.9954 9.34072 11.9015C9.24683 11.8076 9.13517 11.7334 9.01228 11.6831C8.88938 11.6328 8.7577 11.6075 8.62492 11.6087C8.49214 11.6098 8.36092 11.6374 8.23892 11.6898C8.11692 11.7422 8.00657 11.8184 7.91432 11.9139L6.41432 13.4139C6.22983 13.6049 6.00914 13.7573 5.76513 13.8621C5.52113 13.9669 5.25869 14.0221 4.99313 14.0244C4.72757 14.0267 4.46421 13.9761 4.21842 13.8756C3.97262 13.775 3.74932 13.6265 3.56153 13.4387C3.37375 13.2509 3.22524 13.0276 3.12468 12.7818C3.02412 12.536 2.97352 12.2727 2.97582 12.0071C2.97813 11.7416 3.0333 11.4791 3.13812 11.2351C3.24294 10.9911 3.3953 10.7704 3.58632 10.5859L6.58632 7.58592Z" fill="#D6D6D6"/>
</svg>`
const ProfileHeader = () => {
    const {darktheme}=useContext(AuthContext);

    const navigation = useNavigation();
    return (
        <View style={styles.container(darktheme)}>
            <View style={styles.Header}>
                <View style={styles.imagebox}>
                    <Image source={require('../../../Assets/photos/ProfilePic4.png')} style={styles.image} />
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity>
                        <SvgXml xml={pen} width="20" height="20" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('LikedPage')}>
                        <SvgXml xml={heart} width="20" height="20" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('BookmarkPage')}>
                        <SvgXml xml={share} width="20" height="20" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SettingsPage')}>
                        <SvgXml xml={setting} width="20" height="20" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.textBox}>
                <View style={styles.ProfileName}>
                    <Text style={styles.text}>Emily William’s</Text>
                    <View style={styles.pro}>
                        <Text style={styles.text1}>Pro</Text>
                    </View>
                </View>
                <View style={styles.ProfileDetails}>
                    <View style={styles.ProfileDetails1}>
                        <Text style={styles.text2}> 22 Following</Text>
                        <Text style={styles.text2}>|</Text>
                        <Text style={styles.text2}>14K Followers</Text>
                    </View>
                    <Text style={styles.text3}>Software Lead</Text>
                </View>
                <View style={styles.ProfileDiscription}>
                    <Text style={styles.text4}>no exception. Give visitors clear direction if you want them to click the link in your bio, follow your account or take a different specific action.</Text>
                </View>
                <View style={styles.ProfileLink}>
                    <SvgXml xml={link} width="20" height="20" />
                    <TouchableOpacity style={{ marginLeft: 10 }}>
                        <Text style={styles.text5}>https://bitly.com</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({
    container: darktheme => ({
        
        backgroundColor: darktheme ? colors.backgroundcolor :LightThemeColors.backgroundcolor  ,
      
      }),
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    imagebox: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginTop: 20,
        width: '100%',
        height: '100%',
        borderRadius: 22,
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 120,
    },
    textBox: {
        marginTop: 20,
    },
    ProfileName: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: fontsize.bigheading,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
    },
    pro: {
        backgroundColor: '#464646',
        borderRadius: 15,
        width: 40,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    text1: {
        fontSize: fontsize.subheading,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
    },
    ProfileDetails: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ProfileDetails1: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 170,
        justifyContent: 'space-between',
    },
    text2: {
        fontSize: fontsize.paragraph,
        color: colors.IconStroke,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
    },
    text3: {
        fontSize: fontsize.subheading,
        color: colors.primarycolor,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
    },
    ProfileDiscription: {
        marginTop: 26,
        width: '90%',
    },
    text4: {
        fontSize: fontsize.paragraph,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular1 : fontfamily.fontRegular1,
        lineHeight: 22,
    },
    ProfileLink: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    text5: {
        fontSize: fontsize.paragraph,
        color: '#6FD4FF',
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
    },
})