import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

export default class Login extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View sytle={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>welcome Login Page</Text>
        <Button
          title={'go Main'}
          onPress={() => {
            navigation.navigate('App');
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
