import React, { useState } from 'react';

import { View, StyleSheet, Modal, Alert, I18nManager } from 'react-native';

import Card from './Card';
import MyTextInput from './MyTextInput'
const ObjectModal = (props) => {

  // const [date, setDate] = useState(new Date());
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);


  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };


  return (
    <View style={styles.centeredView}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
          props.onClose();
        }}
      >
        <View style={styles.centeredView}>
          <Card style={props.modalView}>
            {props.children}
          </Card>
        </View>
      </Modal>

    </View >
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: 'center',
  }
});
export default ObjectModal;

