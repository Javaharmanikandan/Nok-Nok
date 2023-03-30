import { StyleSheet, Text, TouchableOpacity, View, TextInput, LogBox, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors,LightThemeColors, fontWeight, fontfamily, fontsize } from '../../../Constant/DesignConstant';
import { SvgXml } from 'react-native-svg';
import { BlurView } from '@react-native-community/blur';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'


const downarrow = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path d="M13 1L7 7L1 1" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const mic = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.95531 1.81818C6.30373 1.81818 4.9162 3.22935 4.9162 4.90909V8.45455C4.9162 10.1343 6.30373 11.5455 7.95531 11.5455C9.73086 11.5455 11.0623 10.1996 10.9951 8.49091C10.9947 8.47882 10.9944 8.46664 10.9944 8.45455V4.90909C10.9944 3.22935 9.60688 1.81818 7.95531 1.81818ZM3.12849 4.90909C3.12849 2.2252 5.31639 0 7.95531 0C10.5942 0 12.7821 2.2252 12.7821 4.90909V8.43727C12.8829 11.2644 10.643 13.3636 7.95531 13.3636C5.31639 13.3636 3.12849 11.1385 3.12849 8.45455V4.90909ZM0.893855 7.54545C1.38751 7.54545 1.78771 7.95246 1.78771 8.45455C1.78771 11.9566 4.60485 14.8065 8.0244 14.7275L8.04469 14.7273C11.402 14.7273 14.2123 11.945 14.2123 8.45455C14.2123 7.95246 14.6125 7.54545 15.1061 7.54545C15.5998 7.54545 16 7.95246 16 8.45455C16 12.6816 12.8145 16.0932 8.84916 16.504V19.0909C8.84916 19.593 8.44898 20 7.95531 20C7.46163 20 7.06145 19.593 7.06145 19.0909V16.5035C3.08673 16.0785 0 12.6087 0 8.45455C0 7.95246 0.400197 7.54545 0.893855 7.54545Z" fill="#CCCCCC"/>
</svg>`
const cancel = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path d="M12.75 4.25L4.25 12.75" stroke="#CCCCCC" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.25 4.25L12.75 12.75" stroke="#CCCCCC" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const records =`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="72" viewBox="0 0 64 72" fill="none">
<rect width="64" height="72" rx="22" fill="#404040"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.9106 19.6364C28.6075 19.6364 25.8324 22.4587 25.8324 25.8182V32.9091C25.8324 36.2685 28.6075 39.0909 31.9106 39.0909C35.4617 39.0909 38.1247 36.3993 37.9903 32.9818C37.9894 32.9576 37.9888 32.9333 37.9888 32.9091V25.8182C37.9888 22.4587 35.2138 19.6364 31.9106 19.6364ZM22.257 25.8182C22.257 20.4504 26.6328 16 31.9106 16C37.1885 16 41.5642 20.4504 41.5642 25.8182V32.8745C41.7659 38.5287 37.2861 42.7273 31.9106 42.7273C26.6328 42.7273 22.257 38.2769 22.257 32.9091V25.8182ZM17.7877 31.0909C18.775 31.0909 19.5754 31.9049 19.5754 32.9091C19.5754 39.9133 25.2097 45.6131 32.0488 45.4549L32.0894 45.4545C38.804 45.4545 44.4246 39.89 44.4246 32.9091C44.4246 31.9049 45.2249 31.0909 46.2123 31.0909C47.1996 31.0909 48 31.9049 48 32.9091C48 41.3633 41.629 48.1864 33.6983 49.008V54.1818C33.6983 55.186 32.898 56 31.9106 56C30.9233 56 30.1229 55.186 30.1229 54.1818V49.0071C22.1735 48.1571 16 41.2175 16 32.9091C16 31.9049 16.8004 31.0909 17.7877 31.0909Z" fill="#CCCCCC"/>
</svg>`
const CardInput = (props) => {
    const {darktheme}=useContext(AuthContext);

    const [modalVisible, setModalVisible] = useState(false);
    const [results, setResults] = useState([]);
    const [recording, setRecording] = React.useState();
    const [recordings, setRecordings] = React.useState([]);
    const [message, setMessage] = React.useState("");

    async function startRecording() {
        try {
          const permission = await Audio.requestPermissionsAsync();
    
          if (permission.status === "granted") {
            await Audio.setAudioModeAsync({
              allowsRecordingIOS: true,
              playsInSilentModeIOS: true
            });
            
            const { recording } = await Audio.Recording.createAsync(
              Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );
    
            setRecording(recording);
          } else {
            setMessage("Please grant permission to app to access microphone");
          }
        } catch (err) {
          console.error('Failed to start recording', err);
        }
      }
    
      async function stopRecording() {
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
    
        let updatedRecordings = [...recordings];
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        updatedRecordings.push({
          sound: sound,
          duration: getDurationFormatted(status.durationMillis),
          file: recording.getURI()
        });
    
        setRecordings(updatedRecordings);
      }
    
      function getDurationFormatted(millis) {
        const minutes = millis / 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const seconds = Math.round((minutes - minutesDisplay) * 60);
        const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutesDisplay}:${secondsDisplay}`;
      }
    
      function getRecordingLines() {
        return recordings.map((recordingLine, index) => {
          return (
            <View key={index} style={styles.row}>
              <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
              <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
              <Button style={styles.button} onPress={() => Sharing.shareAsync(recordingLine.file)} title="Share"></Button>
            </View>
          );
        });
      }
    
   


    return (
        <View style={styles.card}>
            <View style={styles.QuestionSection}>
                <View style={styles.Question}>
                    <Text style={styles.QuestionText}>{props.question}</Text>
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity>
                        <SvgXml xml={downarrow} width="14" height="8" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.AnswerSection}>
                <TextInput
                    style={styles.input}
                    placeholder="Write your answer"
                    placeholderTextColor={colors.PostDescriptionAnswer}
                    multiline={true}
                    numberOfLines={4}
                    value={results}
                    onChangeText={(text) => setResults(text)}
                />
                <Modal transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible) }} animationType="fade">
                    <View style={styles.centeredView}>
                        <BlurView style={styles.absolute} blurType="dark" reducedTransparencyFallbackColor="black" />
                        <View style={styles.modalView}>
                            <View style={styles.modalHeader}>
                                <View style={styles.textbox}>
                                    <Text style={styles.modalHeaderText}>Recording</Text>
                                    <Text style={styles.modalHeaderSubText}>Record your audio for the below question</Text>
                                </View>
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.icon1}>
                                    <SvgXml xml={cancel} width="16" height="20" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalQuestion}>
                                    <Text style={styles.modalQuestionText}>1. What will the bigger issue is the appalling state of our defense in anything connected to the net?</Text>
                           </View>
                            <View style={styles.modalBody}>
                                </View>
                            <View style={styles.modalFooter}>
                                <View style={styles.modalFootericon}>
                                    <TouchableOpacity onPress={recording ? stopRecording : startRecording}>
                                    {getRecordingLines()}
                                        <SvgXml xml={records} width="64" height="72" />
                                    </TouchableOpacity>
                                    </View>
                                    </View>
                        </View>
                    </View>
                </Modal>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <SvgXml xml={mic} width="16" height="20" style={{ marginRight: 20, marginTop: 10 }} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default CardInput

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        marginVertical: 10,
        width: '100%',
        height: 200,
        borderColor: colors.IconStroke,
        borderWidth: .5,
    },
    QuestionSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        width: '100%',
        //height: '50%',
        backgroundColor: colors.PrimaryTinyBtn,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    Question: {
        flexDirection: 'row',
        padding: 10,
        width: '90%',
        height: '100%',
    },
    QuestionText: {
        flexWrap: 'wrap',
        fontSize: fontsize.paragraph,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        fontWeight: "bold",
        lineHeight: 22,
    },
    icon: {
        marginBottom: 30,
        width: '10%',
    },
    AnswerSection: {
        width: '100%',
        height: '50%',
        padding: 10,
        backgroundColor: '#2A2B2F',
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    input: {
        width: '90%',
        height: '100%',
        fontSize: fontsize.paragraph,
        color: colors.PostDescriptionAnswer,
        fontFamily: fontfamily.fontRegular1,
        fontWeight: fontWeight.regular,
        textAlignVertical: 'top',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -23,
    },
    modalView: {
        width: '90%',
        height: '85%',
        backgroundColor: '#1F1F1F',
        borderRadius: 20,
        paddingVertical: 25,
        paddingHorizontal: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',

    },
    modalHeaderText: {
        fontSize: fontsize.subheading,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
        lineHeight: 20,
    },
    modalHeaderSubText: {
        fontSize: fontsize.paragraph,
        color: colors.SubHeading,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.regular,
        lineHeight: 20,
        marginTop: 10,
    },
    textbox: {
        width: '90%',
    },
    icon1: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 40,
        backgroundColor: colors.FollowBtnBG,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalQuestion: {
        width: '100%',
        height: 'auto',
        marginTop: 20,
        paddingVertical: 20,
    },
    modalQuestionText: {
        fontSize: fontsize.paragraph,
        color: colors.IconStroke,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.regular,
        lineHeight: 22,
    },
    modalBody: {
        width: '100%',
        height: '50%',
        marginTop: 20,
        paddingVertical: 20,
    },
    modalFooter: {
        width: '100%',
        height: 'auto',
        marginTop: 20,
        paddingVertical: 20,
    },
    modalFootericon: {
        alignItems: 'center',
        justifyContent: 'center',
    },









})