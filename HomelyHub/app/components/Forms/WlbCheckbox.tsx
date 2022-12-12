import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';

type WlbCheckBoxProps = {
  children?: ReactNode;
  text?: string;
  onPress?: () => void;
  value?: boolean;
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    marginLeft: 5,
  },
  checkbox: {},
});
export const WlbCheckBox = ({text, children, value}: WlbCheckBoxProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        {children ? (
          children
        ) : (
          <Text
            style={{
              marginLeft: styles.input.marginLeft,
            }}>
            {text}
          </Text>
        )}
      </View>
    </View>
  );
};
