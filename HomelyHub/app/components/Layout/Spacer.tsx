import React from 'react';
import {StyleSheet, View} from 'react-native';
export type SpacerProps = {
  width?: number;
  height?: number;
};
export const Spacer = ({width, height}: SpacerProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: !width && !height ? 1 : 0,
      height: height,
      width: width,
    },
  });

  return <View style={styles.container} />;
};
