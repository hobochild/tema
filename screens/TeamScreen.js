import { Ionicons } from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { auth } from '../sdk'
import Button from '../primitives/Button'
import TeamList from '../components/TeamList'
import { Link } from '@react-navigation/native'

export default function TeamScreen({ navigation }) {
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <TeamList userId={auth.currentUser.uid} />
      <Button
        onPress={() => navigation.navigate('root', { screen: 'teamCreate' })}
      >
        Create a Team
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})