import React, {Component} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';

import styles from './Header.component.style';

export default class Header extends Component{


  onPress() {
  }

  render() {
    return (
        <View style={styles.header}>
            <View style={styles.row}>
                <Text style={styles.title}>Cut The Check</Text>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Image
                        style={styles.hamburger}
                        source={require('../../assets/images/hamburgerMenu.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}