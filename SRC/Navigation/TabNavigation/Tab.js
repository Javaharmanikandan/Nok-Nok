import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { SvgXml } from 'react-native-svg';


const user =`<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
<path d="M3.828 20.7387C6.62589 19.1572 9.78611 18.3285 13 18.3333C16.3333 18.3333 19.4627 19.2067 22.172 20.7387M17 10.3333C17 11.3942 16.5786 12.4116 15.8284 13.1618C15.0783 13.9119 14.0609 14.3333 13 14.3333C11.9391 14.3333 10.9217 13.9119 10.1716 13.1618C9.42143 12.4116 9 11.3942 9 10.3333C9 9.27247 9.42143 8.25505 10.1716 7.50491C10.9217 6.75476 11.9391 6.33333 13 6.33333C14.0609 6.33333 15.0783 6.75476 15.8284 7.50491C16.5786 8.25505 17 9.27247 17 10.3333V10.3333ZM25 13C25 14.5759 24.6896 16.1363 24.0866 17.5922C23.4835 19.0481 22.5996 20.371 21.4853 21.4853C20.371 22.5996 19.0481 23.4835 17.5922 24.0866C16.1363 24.6896 14.5759 25 13 25C11.4241 25 9.86371 24.6896 8.4078 24.0866C6.95189 23.4835 5.62902 22.5996 4.51472 21.4853C3.40042 20.371 2.5165 19.0481 1.91345 17.5922C1.31039 16.1363 1 14.5759 1 13C1 9.8174 2.26428 6.76516 4.51472 4.51472C6.76516 2.26428 9.8174 1 13 1C16.1826 1 19.2348 2.26428 21.4853 4.51472C23.7357 6.76516 25 9.8174 25 13Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const collections =`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M17 9H3M17 9C17.5304 9 18.0391 9.21071 18.4142 9.58579C18.7893 9.96086 19 10.4696 19 11V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V11C1 10.4696 1.21071 9.96086 1.58579 9.58579C1.96086 9.21071 2.46957 9 3 9M17 9V7C17 6.46957 16.7893 5.96086 16.4142 5.58579C16.0391 5.21071 15.5304 5 15 5M3 9V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5M5 5V3C5 2.46957 5.21071 1.96086 5.58579 1.58579C5.96086 1.21071 6.46957 1 7 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V5M5 5H15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const home=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 22V12H15V22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const chat =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.49999C0 9.79541 0.415671 11.0046 1.13492 12.0277L0.412082 14.5577C0.232474 15.1863 0.813661 15.7675 1.44228 15.5879L4.65454 14.6702C5.05611 14.8166 5.47513 14.933 5.90808 15.0162C5.9081 15.0162 5.90805 15.0162 5.90808 15.0162C6.42105 15.1147 6.95362 15.1667 7.49977 15.1667C7.63958 15.1667 7.77851 15.1633 7.91644 15.1566C7.91628 15.1566 7.91659 15.1566 7.91644 15.1566C11.8651 14.9647 15 12.0578 15 8.49999C15 4.81809 11.6422 1.83333 7.5 1.83333C3.35787 1.83333 0 4.81809 0 8.49999ZM2.73747 12.4857C2.87574 12.0017 2.78789 11.4811 2.49842 11.0693C1.96285 10.3074 1.66667 9.42941 1.66667 8.49999C1.66667 5.91769 4.08837 3.49999 7.5 3.49999C10.9117 3.49999 13.3333 5.91769 13.3333 8.49999C13.3333 11.0823 10.9117 13.5 7.5 13.5C6.68791 13.5 5.92037 13.3577 5.22567 13.1044C4.89516 12.9838 4.53496 12.9709 4.19667 13.0676L2.4267 13.5733L2.73747 12.4857Z" fill="white"/>
<path d="M16.2781 6.07324C16.5139 6.78577 16.6486 7.54408 16.6647 8.33737C17.7155 9.2673 18.3331 10.5293 18.3331 11.8334C18.3331 12.7628 18.0369 13.6408 17.5013 14.4027C17.2119 14.8145 17.124 15.3351 17.2623 15.819L17.5731 16.9067L15.8031 16.401C15.4648 16.3043 15.1046 16.3172 14.7741 16.4377C14.0794 16.6912 13.3118 16.8334 12.4997 16.8334C11.6841 16.8334 10.9251 16.6952 10.2422 16.4496C9.37983 16.6964 8.47008 16.8297 7.53875 16.8333C8.86092 17.8707 10.5977 18.5001 12.4997 18.5001C13.5069 18.5001 14.4678 18.3236 15.3453 18.0035L18.5575 18.9213C19.1861 19.1009 19.7673 18.5198 19.5877 17.8911L18.8648 15.3612C19.5841 14.3379 19.9998 13.1288 19.9998 11.8334C19.9998 9.37617 18.5043 7.22948 16.2781 6.07324Z" fill="white"/>
</svg>`
const plus=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 5V19" stroke="#F9F8F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12H19" stroke="#F9F8F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const Tab = ({ color, tab, Handler, icon ,color1,radius}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={Handler}>
            <View style={{ alignItems: 'center', justifyContent: 'center',backgroundColor:color1, borderRadius: radius, width: 64, height: 48,  }}>
            <SvgXml xml={(icon === 'home') ? home : null || icon === 'message-circle' ? chat : null ||icon === 'plus-circle' ? plus : null || icon === 'align-center' ? collections : null || icon === 'user' ? user: null } style={styles.Icon1} />
            </View>   
        </TouchableOpacity>

    )
}

export default Tab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 64,
        elevation: 2,
       
    },
    Icon1: {
        width: 24,
        height: 24,
        color: 'white',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

})