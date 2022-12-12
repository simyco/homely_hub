import {Box} from 'native-base';
import React, {ReactNode} from 'react';

type ToastBoxProps = {
  children: ReactNode;
};

export const ToastBox = ({children}: ToastBoxProps) => {
  return (
    <Box
      p="5"
      bg={'white'}
      rounded="sm"
      m={2}
      borderLeftWidth={10}
      borderLeftColor="primary.400">
      {children}
    </Box>
  );
};
