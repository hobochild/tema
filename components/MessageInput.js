import * as React from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colorHash } from '../utils'
import { db } from '../firebase'
import { COLLECTIONS } from '../constants/Api'
import { auth } from '../firebase'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    minHeight: 80,
    alignItems: 'stretch'
  },
  input: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputText: {
    width: '100%',
    paddingLeft: 25
  },
  button: {
    maxWidth: 200,
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff'
  }
})

export default function MessageInput({ threadRef }) {
  const [text, setText] = React.useState('')

  const addMessage = () => {
    if (text === '') {
      throw new Error('Invalid Message')
    }
    const currentUser = auth.currentUser

    if (!currentUser) {
      throw new Error('You need to be logged in to send a message')
    }
    db.collection(COLLECTIONS.messages).add({
      userDisplayName: currentUser.displayName || currentUser.email,
      text,
      createdAt: Date.now(),
      userRef: db.collection(COLLECTIONS.users).doc(currentUser.uid),
      threadRef: threadRef
        ? threadRef
        : db.collection(COLLECTIONS.threads).doc()
    })

    setText('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          multiline={true}
          placeholder={threadRef ? 'Reply to thread.' : 'Start a new thread.'}
          onChangeText={setText}
          value={text}
        />
      </View>
      <TouchableOpacity
        style={[
          {
            backgroundColor: threadRef ? colorHash.dark.hex(threadRef.id) : null
          },
          styles.button
        ]}
        onPress={addMessage}
      >
        <View>
          <Ionicons
            style={[
              styles.buttonText,
              {
                color: !threadRef ? 'black' : 'white'
              }
            ]}
            name="md-send"
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}
