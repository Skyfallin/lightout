import React from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export const Icon = ({ library, name, size, color, style }) => {
  
  if (library == 'MaterialIcons') {
    return (
      <MaterialIcons
        name={name}
        size={size}
        color={color}
        style={style}
      />
    );
  }
  else {
    return (
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={color}
        style={style}
      />
    );
  }
};
