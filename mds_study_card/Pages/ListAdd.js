import {View, StyleSheet, TextInput, Pressable, Text} from 'react-native';
import React from 'react';

const ListAdd = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Word"
          placeholderTextColor={'white'}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Meaning of the word"
          placeholderTextColor={'white'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save word</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '85%',
  },
  textInput: {
    backgroundColor: '#707070',
    width: '90%',
    padding: '3%',
    borderRadius: 10,
    fontSize: 18,
    color: 'white',
    marginTop: '10%',
  },
  inputContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },
  saveButton: {
    backgroundColor: '#AC6935',
    width: '80%',
    alignItems: 'center',
    padding: '1%',
    borderRadius: 15,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default ListAdd;
