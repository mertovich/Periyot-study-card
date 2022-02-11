import {Text, View, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';

const BottomNavigation = props => {
  return (
    <View style={styles.navComtainer}>
      <Pressable
        style={
          props.NavigationChoice === 0
            ? styles.navItemContainerActive
            : styles.navItemContainer
        }
        onPress={() => props.homePage()}>
        <Image
          style={styles.firstIcon}
          source={require('../assets/Icon-feather-home.png')}
        />
        <Text style={styles.navText}>HOME</Text>
      </Pressable>
      <Pressable
        style={
          props.NavigationChoice === 1
            ? styles.navItemContainerActive
            : styles.navItemContainer
        }
        onPress={() => props.listPage()}>
        <Image
          style={styles.icon}
          source={require('../assets/Icon-open-list.png')}
        />
        <Text style={styles.navText}>LIST</Text>
      </Pressable>
      <Pressable
        style={
          props.NavigationChoice === 2
            ? styles.navItemContainerActive
            : styles.navItemContainer
        }
        onPress={() => props.mixPage()}>
        <Image
          style={styles.icon}
          source={require('../assets/Icon-simple-mixer.png')}
        />
        <Text style={styles.navText}>MIX</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navComtainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#707070',
    padding: '3%',
    paddingLeft: '8%',
    paddingRight: '8%',
    borderRadius: 20,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    marginBottom: '2%',
    justifyContent: 'space-between',
  },
  navItemContainer: {
    alignItems: 'center',
    opacity: 0.5,
  },
  navItemContainerActive: {
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

export default BottomNavigation;
