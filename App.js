import {StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <LinearGradient colors={['#3b021f', '#ddb52f']} style={styles.appContainer}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
