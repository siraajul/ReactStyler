import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView horizontal={true}>
        <FlatCards />
      </ScrollView>
      <ScrollView horizontal={true}>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
