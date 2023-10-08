import { Box, Img } from '@chakra-ui/react'
import React from 'react'
import StarGif1 from '../images/star.gif'
import StarGif2 from '../images/star2.gif'
import LogoSimple from '../images/logo-simple.png'
import PinkUniver from '../images/pink-univer.png'
import PinkUniverse2 from '../images/PinkUniverse.jpeg'
import PinkUniverse3 from '../images/svg/universe-pink.png'
import StarGif3 from '../images/StartGif.gif'
const PinkUniverse = () => {
  return (
    <Box
      position={'relative'}
      width={'1200px'}
      height={'650px'}
      marginTop={'-250px'}
      marginBottom={'-280px'}>
      {/* <Img
        position={'absolute'}
        top={0}
        left={0}
        src={PinkUniver}
      /> */}
      <Box
        position={'absolute'}
        left={'50%'}
        top={'50%'}
        marginLeft={'-213px'}
        marginTop={'-168px'}
        w={'416px'}
        h={'416px'}>
        <Img
          w={'416px'}
          h={'416px'}
          position={'absolute'}
          top={0}
          left={0}
          opacity={0.5}
          src={StarGif1}
        />
        <Img
          w={'416px'}
          h={'416px'}
          position={'absolute'}
          top={0}
          left={0}
          opacity={0.5}
          src={StarGif2}></Img>
        <Img
          src={StarGif3}
          w={'416px'}
          h={'416px'}
          position={'absolute'}
          top={0}
          left={0}></Img>
        <Img
          src={LogoSimple}
          position={'absolute'}
          w={'95px'}
          top={'50%'}
          left={'50%'}
          marginLeft={'-47.5px'}
          marginTop={'-20.5px'}
        />
      </Box>
      <Img
        position={'absolute'}
        top={'7px'}
        left={0}
        src={PinkUniverse3}
      />
    </Box>
  )
}

export default PinkUniverse
