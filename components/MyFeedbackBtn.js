import React from 'react'
import { StyleSheet,  View, TouchableOpacity, I18nManager, Platform, TouchableNativeFeedback, Dimensions } from 'react-native';
import Colors from '../constants/Colors';


const MyFeedbackBtn = (props) => {

    let TouchableType = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableType = TouchableNativeFeedback
    }

    return (
            <TouchableType style={{ flex: 1 }}
                onPress={
                    props.onSelect
                }>
                <View style={{ ...styles.gridStyle, backgroundColor: Colors.backGroundGray }}>         
                    {props.children}
                </View>
            </TouchableType>
       );

};

const styles = StyleSheet.create({
  
    gridStyle:
    {
        flex: 1,
        borderRadius: 5,       
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end',
        justifyContent: 'center',
        maxWidth: Dimensions.get('window').width/2 - 10*2,
        overflow:'hidden'
    },
    textStyle:
    {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        padding: 10,
        textAlign:'right'
    },
    image:
    {
        width: '100%',
        height: '100%'
        
    },
});
export default MyFeedbackBtn;