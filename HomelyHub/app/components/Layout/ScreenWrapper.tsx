import {Box, ScrollView} from 'native-base';
import * as React from 'react';
import {
  Platform,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = ScrollViewProps & {
  children: React.ReactNode;
  withScrollView?: boolean;
  withKeyboardScroll?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export const ScreenWrapper = ({
  children,
  withScrollView = true,
  style,
  contentContainerStyle,
  ...rest
}: Props) => {
  const insets = useSafeAreaInsets();

  const containerStyle = [
    styles.container,

    {
      // paddingTop: Platform.OS === 'android' ? AppStyles.spacing.m : insets.top,
      // paddingBottom:
      //   Platform.OS === 'android' ? AppStyles.spacing.m : insets.bottom,
    },
  ];

  return (
    <>
      {withScrollView ? (
        <ScrollView
          bg={'white'}
          {...rest}
          contentContainerStyle={contentContainerStyle}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          style={[containerStyle, style]}>
          {children}
        </ScrollView>
      ) : (
        <Box mt={3} bg={'white'} style={[containerStyle, style]}>
          {children}
        </Box>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
