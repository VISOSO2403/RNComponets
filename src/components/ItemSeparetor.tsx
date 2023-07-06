import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/theme/ThemeContext';

const ItemSeparetor = () => {
  const {
    theme: {dividerColor},
  } = useContext(ThemeContext);

  return (
    <View
      style={{
        borderBottomWidth: 1,
        // opacity: 0.4,
        borderBottomColor: dividerColor,
        marginVertical: 8,
      }}
    />
  );
};

export default ItemSeparetor;
