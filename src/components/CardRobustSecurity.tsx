import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'
import BackgroundImg1 from '../images/svg/robust-img1.svg'
import BackgroundImg2 from '../images/shield.svg'

export default function CardRobustSecurity() {
  return (
    <Box
      className='home-card'
      position={'relative'}>
      <Box>
        <Text className={'home-card-title'}>Robust Security</Text>
      </Box>
      <Box>
        <Text className='home-card-desc'>implemented with smart contracts</Text>
      </Box>
      <Image
        src={BackgroundImg1}
        marginLeft={'-12px'}
        position={'absolute'}
        bottom={0}
      />
      <Image
        src={BackgroundImg2}
        position={'absolute'}
        bottom={0}
        right={'45px'}
      />
    </Box>
  )
}
