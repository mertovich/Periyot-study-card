import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ListTopBar from '../components/ListTopBar';

const List = () => {
  return (
    <View>
      <ScrollView style={styles.scrollContainer}>
        <ListTopBar />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    height: '85%',
  },
});
export default List;
