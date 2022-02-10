import {Text, View, StyleSheet, Pressable, Image} from 'react-native';
import React, {Component} from 'react';

export default class BottomNavigation extends Component {
  render() {
    return (
      <View style={styles.navComtainer}>
        <Pressable
          style={styles.navItemContainer}
          onPress={() => alert('Home')}>
          <Image
            style={styles.firstIcon}
            source={require('../assets/Icon-feather-home.png')}
          />
          <Text style={styles.navText}>HOME</Text>
        </Pressable>
        <Pressable
          style={styles.navItemContainer}
          onPress={() => alert('LIST')}>
          <Image
            style={styles.icon}
            source={require('../assets/Icon-open-list.png')}
          />
          <Text style={styles.navText}>LIST</Text>
        </Pressable>
        <Pressable style={styles.navItemContainer} onPress={() => alert('MIX')}>
          <Image
            style={styles.icon}
            source={require('../assets/Icon-simple-mixer.png')}
          />
          <Text style={styles.navText}>MIX</Text>
        </Pressable>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navComtainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#707070',
    padding: '3%',
    borderRadius: 20,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    marginBottom: '2%',
    justifyContent: 'space-between',
  },
  navItemContainer: {
    alignItems: 'center',
  },
  icon: {
    height: 25,
    width: 25,
  },
  navText: {
    color: 'white',
    marginTop: '15%',
  },
  firstIcon: {
    height: 25,
    width: 25,
  },
});
