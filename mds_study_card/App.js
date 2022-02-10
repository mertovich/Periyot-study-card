import {StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Home from './Pages/Home';
import BottomNavigation from './components/BottomNavigation';

export default function App() {
  const [NavigarionChoice, setNavigarionChoice] = useState(0);

  const navigationController = () => {
    if (NavigarionChoice === 0) {
      return <Home />;
    }
  };

  return (
    <SafeAreaView style={styles.app}>
      {navigationController()}
      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#2B2A26',
    height: '100%',
  },
});
