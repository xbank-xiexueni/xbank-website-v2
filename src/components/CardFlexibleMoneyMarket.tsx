import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import BackgroundImg from '../images/card-money-market.png'

export default function CardFlexibleMoneyMarket() {
  return (
    <Box className='home-card'>
      <Box>
        <Text className={'home-card-title'}>Flexible Money Market</Text>
      </Box>
      <Box>
        <Text className='home-card-desc'>
          xBank offers tailored lending with favorable terms for borrowers, high
          returns for lenders, and increased liquidity for NFT projects,
          benefiting all users.
        </Text>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}>
        <Image src={BackgroundImg} />
      </Box>
    </Box>
  )
}
