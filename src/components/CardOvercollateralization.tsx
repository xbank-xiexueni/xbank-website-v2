import { Box, Image, Img, Text } from '@chakra-ui/react'
import React from 'react'
import BackgroundImg from '../images/card-money-market.png'
import LightCircle from '../images/svg/light-circle.svg'
import Lock from '../images/svg/lock.svg'
// import LogoX from '../images/svg/x.svg'
import LogoX from '../images/x.png'
export default function CardOvercollateralization() {
  return (
    <Box className='home-card'>
      <Box>
        <Text className={'home-card-title'}>Overcollateralization</Text>
      </Box>
      <Box>
        <Text className='home-card-desc'>
          collateral's market value is higher than borrowing amount.
        </Text>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}>
        <Box
          mt={'-170px'}
          w={'541px'}
          h={'541px'}
          position={'relative'}>
          <Image
            className='x-light'
            position={'absolute'}
            top={'90px'}
            left={'45px'}
            src={LogoX}
          />
          <Image
            position={'absolute'}
            top={0}
            left={0}
            w={'541px'}
            h={'541px'}
            src={LightCircle}
          />
          <Img
            src={Lock}
            w={'64px'}
            h={'64px'}
            position={'absolute'}
            top={'50%'}
            left={'50%'}
            marginLeft={'-32px'}
            marginTop={'12px'}
          />
        </Box>
      </Box>
    </Box>
  )
}
