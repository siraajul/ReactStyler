import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Action Cards</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            How I Structure My React Project
          </Text>
          <Image
            source={{
              uri: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F082fnuaaulxqn71xwpb1.png',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
              Ever dreamt of a React app that chuckles at bugs and scoffs at
              spaghetti code? Let’s embark on a journey to create a React app so
              robust it could survive an apocalypse of bad coding practices.
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://dev.to/phukon/how-i-structure-my-react-projects-1lk?ref=dailydev',
                )
              }>
              <Text style={styles.textColor}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  card: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage: {
    height: 180,
  },
  bodyContainer: {},
  footerContainer: {},
  textColor: {
    color: '#FFFFFF',
  },
});
