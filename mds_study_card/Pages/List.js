import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import ListTopBar from '../components/ListTopBar';
import WordList from '../components/WordList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const List = props => {
  const [WordListe, setWordListe] = useState([]);
  const [Search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  useEffect(() => {
    getWordList();
  }, []);

  // Get Word List
  const getWordList = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('WordList');
      if (jsonValue !== null) {
        setWordListe(JSON.parse(jsonValue));
      }
    } catch (e) {
      // error reading value
    }
  };

  // Word List delete
  const deleteItem = async title => {
    let tmpList = WordListe.filter(i => i.word !== title);
    setFilteredDataSource(tmpList);
    try {
      const jsonValue = JSON.stringify(tmpList);
      await AsyncStorage.setItem('WordList', jsonValue);
    } catch (e) {
      // saving error
    }
    setSearch('');
    getWordList();
  };

  // Search Filter
  const searchFilterFunction = text => {
    if (text) {
      const newData = WordListe.filter(function (item) {
        const itemData = item.word ? item.word.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(WordListe);
      setSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <ListTopBar
        listAddPage={props.listAddPage}
        searchFilterFunction={searchFilterFunction}
        Search={Search}
      />
      <WordList
        deleteItem={deleteItem}
        WordListe={WordListe}
        filteredDataSource={filteredDataSource}
        Search={Search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '85%',
  },
});
export default List;
