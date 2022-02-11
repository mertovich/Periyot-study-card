import {StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Home from './Pages/Home';
import BottomNavigation from './components/BottomNavigation';
import List from './Pages/List';
import ListAdd from './Pages/ListAdd';

export default function App() {
  const [NavigationChoice, setNavigationChoice] = useState(1);

  const navigationController = () => {
    if (NavigationChoice === 0) {
      return <Home />;
    }
    if (NavigationChoice === 1) {
      return <List />;
    }
    if (NavigationChoice === 3) {
      return <ListAdd />;
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
