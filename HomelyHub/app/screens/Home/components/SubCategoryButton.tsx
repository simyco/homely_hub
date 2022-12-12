import {Button, HStack, Icon, Text} from 'native-base';
import React, {useState} from 'react';

type SubCategoryButtonProps = {
  text?: string;
  icon?: string;
  onPress?: () => void;
};

export const SubCategoryButton = ({text, onPress}: SubCategoryButtonProps) => {
  const [active, setActive] = useState(true);
  return (
    <Button
      my={1}
      size={'md'}
      shadow={3}
      onPress={() => {
        setActive(!active);
        onPress && onPress();
      }}
      bgColor={!active ? 'white' : 'primary.400'}
      rounded="3xl">
      <HStack space={1}>
        <Icon
          size={'md'}
          name={'home-outline'}
          color={!active ? 'primary.400' : 'white'}
        />
        <Text color={!active ? 'primary.400' : 'white'} fontSize={'sm'}>
          {text}
        </Text>
      </HStack>
    </Button>
  );
};
