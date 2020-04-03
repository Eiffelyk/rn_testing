import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

export default class Page2 extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerBackTitle: 'H',
    headerBackTitleVisible: true,
    headerTruncatedBackTitle: 'title',
  };
  render() {
    const {navigation} = this.props;
    return (
      <View sytle={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>welcome page two</Text>
        <Button
          title={'Go Back'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Button
          title={'go Page1'}
          onPress={() => {
            navigation.navigate('Page1');
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
