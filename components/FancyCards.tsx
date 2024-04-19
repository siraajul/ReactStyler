import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Technology</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}> React Native</Text>
          <Text style={styles.cardLabel}> Developed By Facebook</Text>
          <Text style={styles.cardDesc}> Based On JavaScript.</Text>
          <Text style={styles.cardFooter}> Based On JavaScript.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  cardElevated: {},
  cardImage: {
    height: 300,
  },
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardDesc: {},
  cardFooter: {},
});
