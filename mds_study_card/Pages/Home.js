import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import BottomNavigation from '../components/BottomNavigation';

export default function Home() {
  return (
    <View>
        <ScrollView style={styles.scrollConrainer} >
            <Text>Home</Text>
        </ScrollView>
        <BottomNavigation/>
    </View>
  );
}
const styles = StyleSheet.create({
    scrollConrainer:{
        height: '85%',
    },
})
