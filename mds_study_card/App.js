import {StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Home from './Pages/Home';
import BottomNavigation from './components/BottomNavigation';
import List from './Pages/List';
import ListAdd from './Pages/ListAdd';
import Mix from './Pages/Mix';

export default function App() {
  const [NavigationChoice, setNavigationChoice] = useState(0);

  const homePage = () => {
    setNavigationChoice(0);
  };

  const listPage = () => {
    setNavigationChoice(1);
  };

  const mixPage = () => {
    setNavigationChoice(2);
  };

  const listAddPage = () => {
    setNavigationChoice(3);
  };

  return (
    <SafeAreaView style={styles.app}>
      {NavigationChoice === 0 ? <Home /> : null}
      {NavigationChoice === 1 ? <List listAddPage={listAddPage} /> : null}
      {NavigationChoice === 2 ? <Mix /> : null}
      {NavigationChoice === 3 ? <ListAdd /> : null}
      <BottomNavigation
        homePage={homePage}
        listPage={listPage}
        mixPage={mixPage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#2B2A26',
    height: '100%',
  },
});
