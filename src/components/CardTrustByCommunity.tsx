import { Box, Text, Image, Img } from '@chakra-ui/react'
import React from 'react'
import Light from '../images/light.png'
import TrustBy from '../images/trust-by.png'
export default function CardTrustByCommunity() {
  return (
    <Box
      className='home-card'
      position={'relative'}
      overflow={'hidden'}>
      <Box>
        <Text className={'home-card-title'}>Trust By community</Text>
      </Box>
      <Box>
        <Text className='home-card-desc'>
          xBank is trusted in the NFT landscape, partnering with media, artists,
          GameFi enterprises, and the broader community.
        </Text>
      </Box>
      <Image
        src={Light}
        position={'absolute'}
        top={'0px'}
        left={'0px'}
      />
      <Img
        src={TrustBy}
        position={'absolute'}
        top={'0px'}
        left={'0px'}
      />
    </Box>
  )
}
