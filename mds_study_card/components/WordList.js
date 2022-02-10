import {View, Text, StyleSheet, FlatList, Image, Pressable} from 'react-native';
import React from 'react';

const DATA = [
  {
    id: '1',
    title: 'Start',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'First Item',
  },
  {
    id: '5',
    title: 'Second Item',
  },
  {
    id: '6',
    title: 'Third Item',
  },
  {
    id: '7',
    title: 'First Item',
  },
  {
    id: '8',
    title: 'Second Item',
  },
  {
    id: '9',
    title: 'end',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Pressable onPress={() => alert('delete')}>
      <Image
        style={styles.image}
        source={require('../assets/Icon-material-delete.png')}
      />
    </Pressable>
  </View>
);

const WordList = () => {
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
