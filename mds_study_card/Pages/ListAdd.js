import {View, StyleSheet, TextInput, Pressable, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListAdd = () => {
  const [WordList, setWordList] = useState([]);
  const [Word, setword] = useState('');
  const [Word2, setword2] = useState('');

  useEffect(() => {
    getWordList();
  }, []);

  // Get Word List
  const getWordList = async () => {
    let tmpList = [];
    try {
      const jsonValue = await AsyncStorage.getItem('WordList');
      if (jsonValue != null) {
        tmpList = JSON.parse(jsonValue);
        setWordList(tmpList);
      } else {
        tmpList = [];
      }
    } catch (e) {
      // error reading value
    }
  };

  // save word list
  const saveWordList = async () => {
    try {
      if (Word !== '' && Word2 !== '') {
        let tmpWord = {
          word: Word,
          word2: Word2,
        };
        let tmpList = WordList;
        tmpList.push(tmpWord);
        const jsonValue = JSON.stringify(tmpList);
        await AsyncStorage.setItem('WordList', jsonValue);
        setword('');
        setword2('');
        alert('Registration Successful');
      } else {
        alert('Incomplete or incorrect information entry');
      }
    } catch (e) {
      // saving error
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Word"
          placeholderTextColor={'white'}
          onChangeText={text => setword(text)}
          value={Word}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Meaning of the word"
          placeholderTextColor={'white'}
          onChangeText={text => setword2(text)}
          value={Word2}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.saveButton} onPress={() => saveWordList()}>
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
