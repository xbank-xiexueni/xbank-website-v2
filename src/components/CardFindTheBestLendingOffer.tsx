import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import BackgroundImg from '../images/svg/redar.svg'
import ImgPseudo from '../images/pseudo.png'

export default function CardFindTheBestLendingOffer() {
  return (
    <Box className='home-card'>
      <Box>
        <Text className={'home-card-title'}>Find the best Lending Offer</Text>
      </Box>
      <Box>
        <Text className='home-card-desc'>
          Peer-to-peer (P2P) lending allows individuals to obtain loans directly
          from other individuals. This streamlined approach can lead to more
          favorable terms for both borrowers and lenders.
        </Text>
      </Box>
      <Box
        position={'relative'}
        width={'514px'}
        height={'514px'}>
        <Image
          src={BackgroundImg}
          position={'absolute'}
        />
        <Image
          className='pseudo'
          src={ImgPseudo}></Image>
      </Box>
    </Box>
  )
}
