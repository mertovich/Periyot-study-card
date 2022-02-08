import { Text, View, StyleSheet, Pressable, Image, BackHandler } from 'react-native';
import React, { Component } from 'react';

export default class BottomNavigation extends Component {
    render() {
        return (
            <View style={styles.navigationComtainer} >
                <Pressable onPress={()=> alert('Home')}>
                    <Image
                        style={styles.firstIcon}
                        source={require('../assets/Icon-feather-home.png')}
                    />
                    <Text style={styles.navText} >HOME</Text>
                </Pressable>
                <Pressable onPress={()=> alert('LIST')}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/Icon-open-list.png')}
                    />
                    <Text style={styles.navText} >LIST</Text>
                </Pressable>
                <Pressable onPress={()=> alert('MIX')}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/Icon-simple-mixer.png')}
                    />
                    <Text style={styles.navText} >MIX</Text>
                </Pressable>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    navigationComtainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: '#707070',
        padding: '5%',
        borderRadius: 20,
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '2%',
        marginBottom: '2%',
        justifyContent: 'space-between'
    },
    icon: {
        height: 25,
        width: 25,
        marginRight: '5%',
    },
    navText: {
        color: 'white',
        marginTop: '10%',
    },
    firstIcon: {
        height: 25,
        width: 25,
        marginLeft: '11%',
        marginRight: '1%',
    },
})
