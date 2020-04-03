import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigation} = this.props;
    return (
      <View sytle={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>HomePage</Text>
        <Button
          title={'Go Page1'}
          onPress={() => {
            navigation.navigate('Page1');
          }}
        />
        <Button
          title={'go Page2'}
          onPress={() => {
            navigation.navigate('Page2');
          }}
        />
        <Button
          title={'go Page3'}
          onPress={() => {
            navigation.navigate('Page3');
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
});
