import {Center, Heading, Image} from 'native-base';
import React from 'react';
import {ImageSourcePropType, ViewStyle} from 'react-native';

type EmptyContentProps = {
  image: ImageSourcePropType;
  style?: ViewStyle;
  text: string;
};

function EmptyContent({image, text, style}: EmptyContentProps) {
  return (
    <Center flex={1} style={[style]}>
      <Image alt="image" size={'2xl'} resizeMode="contain" source={image} />
      <Heading textAlign={'center'} fontWeight={'normal'} size={'md'} mt={'5'}>
        {text}
      </Heading>
    </Center>
  );
}

export default EmptyContent;
