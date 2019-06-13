import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './Main.component.style';

class Main extends Component{
    
    
    onPress() {
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>Form1</Text>
                <Text style={styles.text}>Form2</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Form3</Text>
                <Text style={styles.text}>Form4</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Form5</Text>
                <Text style={styles.text}>Form6</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Form7</Text>
                <Text style={styles.text}>Form8</Text>
            </View>
        </View>
    );
  }
}

export default Main;