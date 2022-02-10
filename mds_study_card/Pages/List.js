import {View, StyleSheet} from 'react-native';
import React from 'react';
import ListTopBar from '../components/ListTopBar';
import WordList from '../components/WordList';

const List = () => {
  return (
    <View style={styles.container}>
      <ListTopBar />
      <WordList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '85%',
  },
});
export default List;
