import React from 'react';
import { Text } from 'react-native';
import styles from './TextStyles';

function TextWrap({ type, children }) {
  return (
    <Text style={styles[type]}>
      {children}
    </Text>
  );
}

TextWrap.defaultProps = {
  type: 'normal'
};

export default TextWrap;
