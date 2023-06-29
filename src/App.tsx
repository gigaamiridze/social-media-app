import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Title } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.headerContainer}>
          <Title title="Let's Explore" />
          <FontAwesomeIcon icon={faEnvelope} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;

const style = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingRight: 17,
    paddingLeft: 26,
  }
});