import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import React from 'react';

const Mix = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreTable}>
          <Text style={styles.scoreText}>0</Text>
          <Text style={styles.scoreText}>Score</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}>Value</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Meaning of the word"
          placeholderTextColor={'white'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.changeButton}>
          <Text style={styles.changeButtonText}>Change Word</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '85%',
  },
  scoreContainer: {
    alignItems: 'center',
  },
  scoreTable: {
    marginTop: '20%',
    backgroundColor: '#353432',
    width: '80%',
    padding: '3%',
    alignItems: 'center',
    borderRadius: 10,
  },
  scoreText: {
    color: 'white',
    fontSize: 24,
  },
  text: {
    backgroundColor: '#707070',
    width: '90%',
    padding: '3%',
    borderRadius: 10,
    fontSize: 18,
    color: 'white',
    marginTop: '10%',
    textAlign: 'center',
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
  changeButton: {
    backgroundColor: '#AC6935',
    width: '80%',
    alignItems: 'center',
    padding: '1%',
    borderRadius: 15,
  },
  changeButtonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default Mix;
