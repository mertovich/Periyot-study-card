import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';

const ListTopBar = () => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Search..."
          placeholderTextColor={'white'}
        />
        <Pressable style={styles.addButton} onPress={() => alert('Add')}>
          <Image
            style={styles.image}
            source={require('../assets/Icon-ionic-add-circle-outline.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '5%',
    justifyContent: 'space-evenly',
  },
  textInput: {
    backgroundColor: '#707070',
    width: '70%',
    padding: '3%',
    borderRadius: 10,
    fontSize: 18,
    color: 'white',
  },
  image: {
    height: 40,
    width: 40,
  },
  addButton: {
    marginTop: '1.5%',
  },
});

export default ListTopBar;
