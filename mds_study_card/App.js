import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import Home from './Pages/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.app} >
     <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#2B2A26',
    height:'100%',
  }
})
