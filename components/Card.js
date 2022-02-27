import React, { useCallback } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

import { Colors } from '../config';

export const FlatList = ({
    data,
    keyExtractor,
    renderItem,
    ...otherProps,
  }) => {
    const _style = useCallback(({ pressed }) => [
        style,
        { opacity: pressed ? activeOpacity : 1 }
      ]);

    return (
        <Pressable onPress={onPress} style={_style}>
          {children}
        </Pressable>
      );
  };