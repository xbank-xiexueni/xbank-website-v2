import { FlexProps, Flex, Box, Text, chakra } from '@chakra-ui/react';
import React, { FunctionComponent, ReactNode } from 'react';

const IconCard: FunctionComponent<
  FlexProps & {
    data: {
      title: string;
      description: string;
      icon: ReactNode;
    };
  }
> = ({ data: { title, description, icon }, ...rest }) => {
  return (
    <Flex
      key={title}
      flex={1}
      bg='#1D1C20'
      borderRadius={'24px'}
      border={'1px solid rgba(255, 255, 255, 0.08)'}
      h='240px'
      color={'white'}
      direction={'column'}
      alignItems={'center'}
      justify={'space-between'}
      pb='16px'
      pt='32px'
      px='32px'
      {...rest}
    >
      <Flex
        // direction={'column'}
        boxSize={'88px'}
        alignItems={'center'}
        justify={'space-between'}
        w='100%'
      >
        <Flex
          pos={'relative'}
          zIndex={10}
          boxSize={'88px'}
          borderRadius={'12px'}
          alignItems={'center'}
          justify={'center'}
        >
          {icon}
        </Flex>
        <Box
          bg='linear-gradient(90deg, #76EED8 -2.54%, #76EE99 11.76%, #4891FF 32.57%, #CB37FF 51.97%, #EF76B6 74.8%, #FFD159 101.59%)'
          w='54px'
          h='2px'
          borderRadius={'20px'}
        />
      </Flex>

      <Box>
        <Text
          fontSize={'20px'}
          fontWeight={'600'}
          lineHeight={'27px'}
          mb='8px'
          fontFamily={'HarmonyOS Sans SC'}
        >
          {title}
        </Text>
        <Text
          fontSize={'14px'}
          fontWeight={'400'}
          lineHeight={'22px'}
          color={'#A9A9A9'}
          letterSpacing={'1px'}
          fontFamily={'HarmonyOS Sans SC'}
        >
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default IconCard;
