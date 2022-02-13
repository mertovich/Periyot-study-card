import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import HomeCard from '../components/HomeCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [LastScore, setLastScore] = useState(0);
  const [TotalWord, setTotalWord] = useState(0);
  const [HighScore, setHighScore] = useState(0);

  useEffect(() => {
    getLastScore();
    getTotalWord();
    getHighScore();
  }, []);

  // get last score
  const getLastScore = async () => {
    try {
      const value = await AsyncStorage.getItem('LastScoreData');
      if (value !== null) {
        setLastScore(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  // get  Hight score
  const getHighScore = async () => {
    try {
      const value = await AsyncStorage.getItem('HighScoreData');
      if (value !== null) {
        setHighScore(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  // get total word
  const getTotalWord = async () => {
    let tmpList = [];
    try {
      const jsonValue = await AsyncStorage.getItem('WordList');
      if (jsonValue != null) {
        tmpList = JSON.parse(jsonValue);
      } else {
        tmpList = [];
      }
    } catch (e) {
      // error reading value
    }
    setTotalWord(tmpList.length);
  };

  return (
    <View>
      <ScrollView style={styles.scrollConrainer}>
        <HomeCard
          LastScore={LastScore}
          TotalWord={TotalWord}
          HighScore={HighScore}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollConrainer: {
    height: '85%',
  },
});

export default Home;
