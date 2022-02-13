import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const HomeCard = props => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.cardItemContainer}>
          <Text style={styles.cardItemText}>{props.LastScore}</Text>
          <Text style={styles.cardItemText}>Last Score</Text>
        </View>
        <View style={styles.cardItemContainer}>
          <Text style={styles.cardItemText}>{props.TotalWord}</Text>
          <Text style={styles.cardItemText}>Total Word</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardItemContainer}>
          <Text style={styles.cardItemText}>{props.HighScore}</Text>
          <Text style={styles.cardItemText}>High Score</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  cardItemContainer: {
    backgroundColor: '#353432',
    padding: '10%',
    marginTop: '20%',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardItemText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default HomeCard;
