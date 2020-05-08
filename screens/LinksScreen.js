import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { fetcher } from '../utils'
import useSWR from 'swr';

export default function LinksScreen() {
  const { loading, data, error } = useSWR('/api', fetcher)

  console.log({ loading,  data, error })

  if (loading) {
    return <Text>Loading</Text>
  }

  if (error) {
    return <Text>Error</Text>
  }

  return (
    <View style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text>Notifications will go here</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
