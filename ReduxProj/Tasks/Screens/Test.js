import React, {useState, useContext} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {TasksContext} from '../TasksContext';
import CustomButton from '../Components/CustomButton';
import ImageButton from '../Components/ImageButton';

const TestScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="What's your task?" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    padding: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
    width: '95%',
    margin: 20,
    color: 'red',
  },
});

export default TestScreen;
