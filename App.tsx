import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Social Media App</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
});