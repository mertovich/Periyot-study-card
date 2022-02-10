import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import BottomNavigation from '../components/BottomNavigation';
import HomeCard from '../components/HomeCard';

const Home = () => {
  return (
    <View>
      <ScrollView style={styles.scrollConrainer}>
        <HomeCard />
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollConrainer: {
    height: '85%',
  },
});

export default Home;
