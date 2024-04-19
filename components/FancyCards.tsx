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
          <Text style={styles.cardFooter}> Sirajul</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#FFFFFF',
  },
  card: {
    height: 'auto',
    width: '90%',
    borderRadius: 6,
    marginVertical: '2%',
    marginHorizontal: '5%',
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  cardDesc: {
    fontSize: 10,
    marginTop: 6,
    marginBottom: 12,
    flexShrink: 1,
    textAlign: 'center',
  },
  cardFooter: {
    fontSize: 6,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
});
