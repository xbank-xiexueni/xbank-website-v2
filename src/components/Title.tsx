import { TextProps, chakra } from '@chakra-ui/react';
import React from 'react';

const Title: React.FunctionComponent<TextProps> = ({ children, ...rest }) => {
  return (
    <chakra.h2
      mb={{ sm: 50, sx: 8 }}
      fontSize={{
        lg: 60,
        md: 52,
        sm: 38,
        xs: 28,
      }}
      fontWeight={700}
      textAlign={'center'}
      fontFamily='HarmonyOS-medium'
      {...rest}
    >
      {children}
    </chakra.h2>
  );
};

export default Title;
