import {Icon, Pressable, Text, ZStack} from 'native-base';
import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {truncate} from '../../../utils';

type CategoryButtonProps = {
  text?: string;
  icon?: string;
  active?: boolean;
  onPress?: () => void;
};

export const CategoryButton = ({
  text,
  active = true,
  onPress,
}: CategoryButtonProps) => {
  const styles = StyleSheet.create({
    circleButton: {
      borderRadius: 35,
      margin: 5,
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    circleButtonText: {
      fontSize: 14,
    },
    circleButtonIcon: {
      position: 'absolute',
      top: -10,
      shadowOpacity: 1,
      shadowRadius: 3,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },
  });
  return (
    <Pressable onPress={onPress}>
      <ZStack mt={3} reversed={true} style={styles.circleButton}>
        <Icon
          borderColor={'primary.400'}
          style={styles.circleButtonIcon}
          size={'xl'}
          name={renderIcon(text)}
          color="coolGray.800"
          shadow={8}
        />

        <Text style={styles.circleButtonText}> {truncate(text!, 8)} </Text>
      </ZStack>
    </Pressable>
  );
};

const renderIcon = (text: string | undefined) => {
  switch (text) {
    case 'Casa':
      return 'home';
    case 'Famiglia':
      return 'account-multiple';
    case 'Cura':
      return 'heart';
    case 'Svago':
      return 'puzzle';

    default:
      return 'home';
  }
};
