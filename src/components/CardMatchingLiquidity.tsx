import { Box, HStack, Img, Text } from '@chakra-ui/react'
import React from 'react'
import Bg from '../images/svg/matching-liquidity-background.png'

export default function CardMatchingLiquidity() {
  return (
    <Box
      position={'relative'}
      className='home-card home-card-one-row'>
      <Box>
        <Text className={'home-card-title'}>Matching Liquidity</Text>
      </Box>
      <Box>
        <Text
          className='home-card-desc'
          w={'517px'}>
          xBank takes a single pool of money and splits it into individual
          offers with different terms. These offers are then matched with
          payment plans from borrowers.
        </Text>
      </Box>
      <Img
        src={Bg}
        position={'absolute'}
        bottom={0}
        left={0}
      />
    </Box>
  )
}
