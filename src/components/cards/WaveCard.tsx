import { FlexProps, Flex, Box, Text, chakra } from '@chakra-ui/react';
import React, { FunctionComponent, ReactNode } from 'react';

const WaveCard: FunctionComponent<
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
      h='400px'
      color={'white'}
      direction={'column'}
      alignItems={'center'}
      {...rest}
    >
      <Flex
        // direction={'column'}
        boxSize={'220px'}
        alignItems={'center'}
        justify={'center'}
        pos={'relative'}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <chakra.span
            key={i}
            position='absolute'
            boxSizing='border-box'
            border='1px solid rgba(255, 255, 255, 0.10)'
            borderRadius='50%'
            animation='wave 4s linear infinite'
            style={{
              animationDelay: `calc(0.8s * ${i})`,
            }}
            opacity={0.3}
          />
        ))}

        <Flex
          pos={'relative'}
          zIndex={10}
          boxSize={'120px'}
          bg={'linear-gradient(180deg, #242325 0%, #171619 100%)'}
          border={'2px solid #181818'}
          borderRadius={'12px'}
          alignItems={'center'}
          justify={'center'}
        >
          {icon}
        </Flex>
      </Flex>

      <Box px='32px'>
        <Text
          fontSize={'20px'}
          fontWeight={'600'}
          lineHeight={'27px'}
          mb='4px'
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

export default WaveCard;
