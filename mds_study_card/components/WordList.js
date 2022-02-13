import {View, Text, StyleSheet, FlatList, Image, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';

const Item = ({item, deleteItem}) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      {item.word} = {item.word2}
    </Text>
    <Pressable onPress={() => deleteItem(item.word)}>
      <Image
        style={styles.image}
        source={require('../assets/Icon-material-delete.png')}
      />
    </Pressable>
  </View>
);

const WordList = props => {
  const renderItem = ({item}) => (
    <Item item={item} deleteItem={props.deleteItem} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={props.Search !== '' ? props.filteredDataSource : props.WordListe}
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
    flex: 1,
    fontSize: 18,
    color: 'white',
    marginRight: '2%',
  },
  image: {
    height: 30,
    width: 20,
  },
});

export default WordList;
