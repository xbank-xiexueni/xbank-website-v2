import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  chakra,
} from '@chakra-ui/react';
import React from 'react';
function ColorShadow(props: { title: string }) {
  return (
    <Text marginX={'5px'} className='home-large-font'>
      {props.title}
      <chakra.span marginX={'5px'} className='home-large-font-shadow'>
        {props.title}
      </chakra.span>
      <chakra.span marginX={'5px'} className='home-large-font-shadow'>
        {props.title}
      </chakra.span>
    </Text>
  );
}

export default ColorShadow;
