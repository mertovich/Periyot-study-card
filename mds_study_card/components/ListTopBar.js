import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListTopBar = props => {
  const [WordList, setWordList] = useState([]);

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
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Search..."
          placeholderTextColor={'white'}
        />
        <Pressable style={styles.addButton} onPress={() => props.listAddPage()}>
          <Image
            style={styles.image}
            source={require('../assets/Icon-ionic-add-circle-outline.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '5%',
    justifyContent: 'space-evenly',
  },
  textInput: {
    backgroundColor: '#707070',
    width: '70%',
    padding: '3%',
    borderRadius: 10,
    fontSize: 18,
    color: 'white',
  },
  image: {
    height: 40,
    width: 40,
  },
  addButton: {
    marginTop: '1.5%',
  },
});

export default ListTopBar;
