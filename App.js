import {StyleSheet, View} from 'react-native';
import React from 'react';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <StartGameScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
});
