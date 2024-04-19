import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ActionCards() {
  return (
    <View>
      <Text style={styles.headingText}>ActionCards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: '#FFFFFF',
    paddingHorizontal: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
