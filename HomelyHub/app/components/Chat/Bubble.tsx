import moment from 'moment';
import {Text, View} from 'native-base';
import React from 'react';
import {Bubble as BaseBubble} from 'react-native-gifted-chat';

export const renderBubble = props => {
  return (
    <BaseBubble
      {...props}
      textStyle={{
        left: {
          paddingTop: 6,
          color: '#072108',
          fontSize: 20,
          fontFamily: 'Roboto-Light',
        },
        right: {
          paddingTop: 6,
          color: '#072108',
          fontSize: 20,
          fontFamily: 'Roboto-Light',
        },
      }}
      wrapperStyle={{
        right: {borderTopRightRadius: 15, backgroundColor: '#CBDFCB'},
        left: {borderTopLeftRadius: 15, backgroundColor: '#EFF5EF'},
      }}
      renderTime={props => {
        return (
          <View style={props.containerStyle}>
            <Text px={3} mb={0.5} bold color={'#072108'}>
              {moment(props.currentMessage.createdAt).format('LT')}
            </Text>
          </View>
        );
      }}
      containerToPreviousStyle={{
        right: {
          borderTopRightRadius: 15,
          backgroundColor: '#CBDFCB',
          padding: 4,
        },
        left: {
          borderTopRightRadius: 15,
          backgroundColor: '#EFF5EF',
          padding: 4,
        },
      }}
      containerToNextStyle={{
        right: {borderTopRightRadius: 15, backgroundColor: '#CBDFCB'},
        left: {borderTopRightRadius: 15, backgroundColor: '#EFF5EF'},
      }}
      containerStyle={{
        right: {borderTopRightRadius: 15},
        left: {borderTopLeftRadius: 15},
      }}
    />
  );
};
