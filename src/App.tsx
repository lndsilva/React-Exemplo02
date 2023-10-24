import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import WelcomeScreen from './components/WelcomeScreen';
import OlaMundo from './components/OlaMundo';

function App() {
  return (
        <View style={styles.container}>
            <WelcomeScreen />
            <OlaMundo />

            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
        </View>


  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
