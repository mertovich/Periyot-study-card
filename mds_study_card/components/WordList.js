import {View, Text, StyleSheet, FlatList, Image, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Item = ({title, deleteItem}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Pressable onPress={() => deleteItem(title)}>
      <Image
        style={styles.image}
        source={require('../assets/Icon-material-delete.png')}
      />
    </Pressable>
  </View>
);

const WordList = () => {
  const [WordList, setWordList] = useState([]);

  useEffect(() => {
    getWordList();
  }, []);

  // Get Word List
  const getWordList = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('WordList');
      if (jsonValue !== null) {
        setWordList(JSON.parse(jsonValue));
      }
    } catch (e) {
      // error reading value
    }
  };

  // Word List delete
  const deleteItem = async title => {
    let tmpList = WordList.filter(i => i.word !== title);
    try {
      const jsonValue = JSON.stringify(tmpList);
      await AsyncStorage.setItem('WordList', jsonValue);
    } catch (e) {
      // saving error
    }
    setWordList(tmpList);
  };


  const renderItem = ({item}) => (
    <Item title={item.word} deleteItem={deleteItem} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={WordList}
        renderItem={renderItem}
        keyExtractor={item => item.word}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    marginBottom: '15%',
  },
  item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#353432',
    padding: '5%',
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  image: {
    height: 30,
    width: 20,
  },
});

export default WordList;
