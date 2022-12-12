import {Avatar, HStack, View} from 'native-base';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Keyboard, StyleProp, ViewStyle} from 'react-native';
import {
  ActionsProps,
  ComposerProps,
  IMessage,
  Send,
  SendProps,
  StylePropType,
} from 'react-native-gifted-chat';
import {useAuth} from '../../services/hooks/account/useAuth';
import {Composer} from './Composer';

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export interface InputToolbarProps<TMessage extends IMessage> {
  options?: {[key: string]: any};
  optionTintColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  primaryStyle?: StyleProp<ViewStyle>;
  accessoryStyle?: StyleProp<ViewStyle>;
  renderAccessory?(props: InputToolbarProps<TMessage>): React.ReactNode;
  renderActions?(props: ActionsProps): React.ReactNode;
  renderSend?(props: SendProps<TMessage>): React.ReactNode;
  renderComposer?(props: ComposerProps): React.ReactNode;
  onPressActionButton?(): void;
}

export function InputToolbar<TMessage extends IMessage = IMessage>(
  props: InputToolbarProps<TMessage>,
) {
  const {user} = useAuth();
  const [position, setPosition] = useState('absolute');
  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',
      () => setPosition('relative'),
    );
    const keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',
      () => setPosition('absolute'),
    );
    return () => {
      keyboardWillShowListener?.remove();
      keyboardWillHideListener?.remove();
    };
  }, []);

  const {containerStyle, ...rest} = props;
  const {renderComposer, renderSend} = rest;

  return (
    <View
      bgColor={'white'}
      style={[styles.container, {position}, containerStyle] as ViewStyle}>
      <HStack ml={2} space={3} mb={5} style={[props.primaryStyle]}>
        <Avatar source={{uri: user?.imageUrl}} />
        {renderComposer?.(props as ComposerProps) || <Composer {...props} />}
        {renderSend?.(props) || <Send {...props} />}
      </HStack>
    </View>
  );
}

InputToolbar.propTypes = {
  renderAccessory: PropTypes.func,
  renderActions: PropTypes.func,
  renderSend: PropTypes.func,
  renderComposer: PropTypes.func,
  onPressActionButton: PropTypes.func,
  containerStyle: StylePropType,
  primaryStyle: StylePropType,
  accessoryStyle: StylePropType,
};
