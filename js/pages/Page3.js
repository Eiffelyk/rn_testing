import React from 'react';
import {Button, TextInput, View, Text, StyleSheet} from 'react-native';

export default class Page3 extends React.Component {
  render() {
    const {navigation} = this.props;
    const {state, setParams} = navigation;
    const {params} = state;
    const showText = params && params.mode === 'edit' ? '正在编辑' : '编辑完成';
    return (
      <View sytle={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>welcome page three</Text>
        <Text style={styles.showText}>{showText}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setParams({name: text});
          }}
        />
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
          title={'go Page2'}
          onPress={() => {
            navigation.navigate('Page2');
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
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
  },
  showText: {
    margin: 20,
    color: 'blue',
    fontSize: 30,
    backgroundColor: 'red',
  },
});
