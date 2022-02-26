import React, {useState, useCallback, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { View, Button, DropDownPicker, Logo } from "../components";
import { GiftedChat } from 'react-native-gifted-chat';

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { theme } from "../utils/theme";

export const MessagesScreen = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
    }, [])
  
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <GiftedChat 
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
            _id: 1,}}
         />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  