import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';

export default class Page4 extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View sytle={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>welcome page 4</Text>
        <Button
          title={'OpenDrawer'}
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <Button
          title={'Toggle Drawer'}
          onPress={() => {
            navigation.toggleDrawer();
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
