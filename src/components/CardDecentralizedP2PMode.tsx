import { Box, Text, Img } from '@chakra-ui/react'
import React from 'react'
import Bar from '../images/svg/bar.svg'
import CheckOn from '../images/svg/check.svg'

export default function CardDecentralizedP2PMode() {
  return (
    <Box
      className='home-card'
      position={'relative'}
      overflow={'hidden'}>
      <Box>
        <Text className={'home-card-title'}>Decentralized P2P Mode</Text>
      </Box>
      <Box>
        <Text className='home-card-desc'>
          Decentralized P2P mode enables direct interactions between
          participants without intermediaries, ensuring enhanced privacy and
          reduced costs.
        </Text>
      </Box>
      <Box
        border={'1px solid rgba(255, 255, 255, 0.08)'}
        w={'841px'}
        h={'337px'}
        position={'absolute'}
        left={'-190px'}
        top={'170px'}>
        <Box
          display={'flex'}
          flexDirection={'column'}>
          <Box display={'flex'}>
            <Box className='card-decentralized-table-cell'></Box>
            <Box className='card-decentralized-table-cell'>
              <Box
                w={'40px'}
                h={'40px'}></Box>
              <Text className='card-decentralized-table-cell-text'>
                My Collection Pools
              </Text>
            </Box>
            <Box className='card-decentralized-table-cell'>
              <Box
                w={'40px'}
                h={'40px'}></Box>
              <Text className='card-decentralized-table-cell-text'>
                Current Loans as Lender
              </Text>
            </Box>
            <Box className='card-decentralized-table-cell'></Box>
          </Box>
          <Box display={'flex'}>
            <Box className='card-decentralized-table-cell'></Box>
            <Box className='card-decentralized-table-cell'>
              <Box
                w={'40px'}
                h={'40px'}></Box>
              <Text className='card-decentralized-table-cell-text'>
                Create New Pool
              </Text>
            </Box>
            <Box className='card-decentralized-table-cell'>
              <Box
                w={'40px'}
                h={'40px'}></Box>
              <Text className='card-decentralized-table-cell-text'>
                Create line
              </Text>
            </Box>
            <Box className='card-decentralized-table-cell'></Box>
          </Box>
          <Box display={'flex'}>
            <Box className='card-decentralized-table-cell'></Box>
            <Box className='card-decentralized-table-cell'>
              <Box
                w={'40px'}
                h={'40px'}></Box>
              <Text className='card-decentralized-table-cell-text'>
                Previous Loans as Lender
              </Text>
            </Box>
            <Box className='card-decentralized-table-cell'></Box>
            <Box className='card-decentralized-table-cell'></Box>
          </Box>
          <Box display={'flex'}>
            <Box className='card-decentralized-table-cell'></Box>
            <Box className='card-decentralized-table-cell'>
              <Box
                w={'40px'}
                h={'40px'}></Box>
              <Text className='card-decentralized-table-cell-text'>
                Previous Loans as Lender
              </Text>
            </Box>
            <Box className='card-decentralized-table-cell'></Box>
            <Box className='card-decentralized-table-cell'></Box>
          </Box>
          <Box display={'flex'}>
            <Box className='card-decentralized-table-cell'></Box>
            <Box className='card-decentralized-table-cell'></Box>
            <Box className='card-decentralized-table-cell'></Box>
            <Box className='card-decentralized-table-cell'></Box>
          </Box>
        </Box>
      </Box>
      <Box
        width={'242px'}
        height={'386px'}
        position={'absolute'}
        top={'150px'}
        right={'23px'}
        border={'1px solid rgba(0, 0, 0, 0.20)'}
        borderRadius={'8px'}
        background={'linear-gradient(180deg, #242325 40%, #171619 100%);'}
        boxShadow={
          '0px 10px 10px -5px rgba(0, 0, 0, 0.90), 0px 20px 25px -5px rgba(0, 0, 0, 0.80), 0px 1px 2px 1px #525154 inset'
        }>
        <Box
          w={'240px'}
          h={'40px'}
          paddingLeft={'16px'}
          paddingRight={'8px'}
          display={'flex'}
          alignItems={'center'}
          borderBottom={'1.5px solid rgba(255, 255, 255, 0.04)'}>
          <Box
            w={'24px'}
            h={'24px'}>
            <Img src={Bar} />
          </Box>
          <Text
            color={'#FFFFFF'}
            fontSize={'11px'}
            fontFamily={'HarmonyOS Sans SC'}
            fontWeight={700}
            lineHeight={'12px'}
            letterSpacing={'0.3px'}>
            Buy NFTs
          </Text>
        </Box>
        <Box
          w={'240px'}
          h={'40px'}
          paddingLeft={'16px'}
          paddingRight={'8px'}
          display={'flex'}
          alignItems={'center'}
          borderBottom={'1.5px solid rgba(255, 255, 255, 0.04)'}>
          <Box
            w={'24px'}
            h={'24px'}
          />
          <Text
            color={'#FFFFFF'}
            fontSize={'11px'}
            fontFamily={'HarmonyOS Sans SC'}
            fontWeight={700}
            lineHeight={'12px'}
            letterSpacing={'0.3px'}>
            Top Collections
          </Text>
        </Box>
        <Box
          w={'240px'}
          h={'40px'}
          paddingLeft={'16px'}
          paddingRight={'8px'}
          display={'flex'}
          alignItems={'center'}
          borderBottom={'1.5px solid rgba(255, 255, 255, 0.04)'}>
          <Box
            w={'24px'}
            h={'24px'}>
            <Img
              src={CheckOn}
              opacity={0.5}
            />
          </Box>
          <Text
            color={'#FFFFFF'}
            fontSize={'11px'}
            fontFamily={'HarmonyOS Sans SC'}
            fontWeight={700}
            lineHeight={'12px'}
            letterSpacing={'0.3px'}>
            BoredApeYachtClub
          </Text>
        </Box>
        <Box
          w={'240px'}
          h={'40px'}
          paddingLeft={'16px'}
          paddingRight={'8px'}
          display={'flex'}
          alignItems={'center'}
          borderBottom={'1.5px solid rgba(255, 255, 255, 0.04)'}>
          <Box
            w={'24px'}
            h={'24px'}>
            <Img
              src={CheckOn}
              opacity={0.5}
            />
          </Box>
          <Text
            color={'#FFFFFF'}
            fontSize={'11px'}
            fontFamily={'HarmonyOS Sans SC'}
            fontWeight={700}
            lineHeight={'12px'}
            letterSpacing={'0.3px'}>
            MutantApeYachtClub
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
