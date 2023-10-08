import { Container, Box, Text, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import DiscoverMore from '../components/discover-more/DiscoverMore'
import Comparison from '../components/comparison/Comparison'
import WaveCard from '../components/cards/WaveCard'
import ColorShadow from '../components/ColorShadow'

import bg from '../images/sub-pages/loans-for-loans.png'
import StarSky from '../components/StarSky'
import NewVersionHeader from '../components/NewVersionHeader'
import NewVersionFooter from '../components/NewVersionFooter'
import BtnLaunchApp from '../components/BtnLaunchApp'
const WHY_DATA = [
  {
    title: 'Apply Anytime',
    description: `With "Loans for Loans", you can adjust and switch according to the NFT market's volatility at any time.`,
    icon: (
      <svg
        width='88'
        height='89'
        viewBox='0 0 88 89'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M50 70H26.3667C24.9434 70 23.5783 69.331 22.5719 68.1405C21.5654 66.9498 21 65.3348 21 63.6507V26.3493C21 24.6652 21.5654 23.0502 22.5719 21.8595C23.5783 20.669 24.9434 20 26.3667 20H61.6333C63.0567 20 64.4217 20.669 65.4281 21.8595C66.4346 23.0502 67 24.6652 67 26.3493V52.5'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M21 27.4805C21 25.4915 21.5654 23.5837 22.5719 22.1772C23.5783 20.7707 24.9434 19.9805 26.3667 19.9805H61.6333C63.0567 19.9805 64.4217 20.7707 65.4281 22.1772C66.4346 23.5837 67 25.4915 67 27.4805V29.9805H21V27.4805Z'
          fill='white'
          fillOpacity='0.5'
          stroke='white'
        />
        <path
          d='M54 51V69L59 62H68L54 51Z'
          fill='white'
          stroke='white'
          strokeLinejoin='round'
        />
        <path
          opacity='0.4'
          d='M26 48.4V44H51.5V48.4H26Z'
          fill='white'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M26 58.4V54H41V58.4H26Z'
          fill='white'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    title: 'Low Cost to Hold',
    description:
      'If you lack the balance to repay existing loans, simply cover the downpayment for the new loan to extend your holding period, preserving your valuable NFTs.',
    icon: (
      <svg
        width='88'
        height='89'
        viewBox='0 0 88 89'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M28.8 70.9805H25.2C23.2904 70.9805 21.4591 70.2219 20.1088 68.8716C18.7586 67.5214 18 65.6901 18 63.7805V24.1805C18 22.2709 18.7586 20.4396 20.1088 19.0893C21.4591 17.739 23.2904 16.9805 25.2 16.9805H64.8C66.7096 16.9805 68.5409 17.739 69.8911 19.0893C71.2415 20.4396 72 22.2709 72 24.1805V63.7805C72 65.6901 71.2415 67.5214 69.8911 68.8716C68.5409 70.2219 66.7096 70.9805 64.8 70.9805H61.2'
          fill='url(#paint0_linear_2039_12829)'
          fillOpacity='0.24'
        />
        <path
          opacity='0.4'
          d='M33.1 34.9805H31.4C30.4983 34.9805 29.6335 35.3444 28.9959 35.9923C28.3582 36.6402 28 37.5189 28 38.435V40.1623M56.9 34.9805H58.6C59.5017 34.9805 60.3665 35.3444 61.0041 35.9923C61.6418 36.6402 62 37.5189 62 38.435V40.1623M33.1 53.9805H31.4C30.4983 53.9805 29.6335 53.6165 28.9959 52.9686C28.3582 52.3207 28 51.4421 28 50.5259V48.7987M56.9 53.9805H58.6C59.5017 53.9805 60.3665 53.6165 61.0041 52.9686C61.6418 52.3207 62 51.4421 62 50.5259V48.7987'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M28.8 70.9805H25.2C23.2904 70.9805 21.4591 70.2219 20.1088 68.8716C18.7586 67.5214 18 65.6901 18 63.7805V24.1805C18 22.2709 18.7586 20.4396 20.1088 19.0893C21.4591 17.739 23.2904 16.9805 25.2 16.9805H64.8C66.7096 16.9805 68.5409 17.739 69.8911 19.0893C71.2415 20.4396 72 22.2709 72 24.1805V63.7805C72 65.6901 71.2415 67.5214 69.8911 68.8716C68.5409 70.2219 66.7096 70.9805 64.8 70.9805H61.2'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.4'
          d='M36 70.9805H54'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <g clipPath='url(#clip0_2039_12829)'>
          <path
            d='M44.9469 33.9535L44.8203 34.4128V47.7414L44.9469 47.8762L50.7433 44.2191L44.9469 33.9535Z'
            fill='white'
          />
          <path
            d='M44.9487 33.9535L39.1523 44.2191L44.9487 47.8763V41.407V33.9535Z'
            fill='white'
          />
          <path
            d='M44.9463 49.0477L44.875 49.1406V53.8885L44.9463 54.1109L50.7462 45.3925L44.9463 49.0477Z'
            fill='white'
          />
          <path
            d='M44.9487 54.1109V49.0477L39.1523 45.3925L44.9487 54.1109Z'
            fill='white'
          />
          <path
            d='M44.9453 47.8759L50.7416 44.2189L44.9453 41.4067V47.8759Z'
            fill='white'
          />
          <path
            d='M39.1523 44.2189L44.9486 47.8759V41.4067L39.1523 44.2189Z'
            fill='white'
          />
        </g>
        <defs>
          <linearGradient
            id='paint0_linear_2039_12829'
            x1='45'
            y1='16.9805'
            x2='45'
            y2='70.9805'
            gradientUnits='userSpaceOnUse'>
            <stop
              stopColor='white'
              stopOpacity='0'
            />
            <stop
              offset='1'
              stopColor='white'
            />
          </linearGradient>
          <clipPath id='clip0_2039_12829'>
            <rect
              width='12'
              height='20.5714'
              fill='white'
              transform='translate(38.998 33.6947)'
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Optimized Interest Rates',
    description:
      'Refinance and potentially benefit from lower rates, optimizing your return on investment by minimizing borrowing costs.',
    icon: (
      <svg
        width='88'
        height='88'
        viewBox='0 0 88 88'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M17 29H71V61C71 67.0751 66.0751 72 60 72H28C21.9249 72 17 67.0751 17 61V29Z'
          fill='url(#paint0_linear_2039_12805)'
          fillOpacity='0.24'
        />
        <path
          d='M27.8 18H24.2C22.2904 18 20.4591 18.7585 19.1088 20.1089C17.7586 21.4591 17 23.2904 17 25.2V64.8C17 66.7096 17.7586 68.5409 19.1088 69.8912C20.4591 71.2414 22.2904 72 24.2 72H63.8C65.7096 72 67.5409 71.2414 68.8911 69.8912C70.2415 68.5409 71 66.7096 71 64.8V25.2C71 23.2904 70.2415 21.4591 68.8911 20.1089C67.5409 18.7585 65.7096 18 63.8 18H60.2'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.4'
          d='M35 18H53'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M30.9992 57.9142L56.4551 32.4584'
          stroke='white'
          strokeWidth='2.69998'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <circle
          cx='50.0508'
          cy='57'
          r='3'
          stroke='white'
          strokeWidth='2.69998'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <circle
          cx='38.0508'
          cy='34'
          r='3'
          stroke='white'
          strokeWidth='2.69998'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <defs>
          <linearGradient
            id='paint0_linear_2039_12805'
            x1='44'
            y1='29'
            x2='44'
            y2='72'
            gradientUnits='userSpaceOnUse'>
            <stop
              stopColor='white'
              stopOpacity='0'
            />
            <stop
              offset='1'
              stopColor='white'
            />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Supports Investment Growth',
    description:
      'By retaining your NFTs through "Loans for Loans", you position yourself to capitalize on their rising value and secure higher returns.',
    icon: (
      <svg
        width='88'
        height='88'
        viewBox='0 0 88 88'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M19 27H73V63C73 66.866 69.866 70 66 70H26C22.134 70 19 66.866 19 63V27Z'
          fill='url(#paint0_linear_2039_12814)'
          fillOpacity='0.24'
        />
        <path
          d='M19 59.2L19 62.8C19 64.7096 19.7585 66.5409 21.1089 67.8912C22.4591 69.2414 24.2904 70 26.2 70L65.8 70C67.7096 70 69.5409 69.2414 70.8912 67.8912C72.2414 66.5409 73 64.7096 73 62.8L73 23.2C73 21.2904 72.2414 19.4591 70.8912 18.1089C69.5409 16.7585 67.7096 16 65.8 16L26.2 16C24.2904 16 22.4591 16.7585 21.1089 18.1089C19.7585 19.4591 19 21.2904 19 23.2L19 26.8'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.4'
          d='M19 52L19 34'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <line
          x1='40'
          y1='59'
          x2='52'
          y2='59'
          stroke='white'
          stroke-opacity='0.4'
          strokeWidth='4'
        />
        <circle
          cx='38'
          cy='37'
          r='2'
          fill='white'
          fillOpacity='0.4'
        />
        <path
          d='M29.9375 51.5C29.9375 52.6046 29.0421 53.5 27.9375 53.5C26.8329 53.5 25.9375 52.6046 25.9375 51.5C25.9375 50.3954 26.8329 49.5 27.9375 49.5C29.0421 49.5 29.9375 50.3954 29.9375 51.5Z'
          fill='white'
          fillOpacity='0.4'
        />
        <path
          d='M56 50C56 51.1046 55.1046 52 54 52C52.8954 52 52 51.1046 52 50C52 48.8954 52.8954 48 54 48C55.1046 48 56 48.8954 56 50Z'
          fill='white'
          fillOpacity='0.4'
        />
        <path
          d='M65.5 35.5C65.5 36.6046 64.6046 37.5 63.5 37.5C62.3954 37.5 61.5 36.6046 61.5 35.5C61.5 34.3954 62.3954 33.5 63.5 33.5C64.6046 33.5 65.5 34.3954 65.5 35.5Z'
          fill='white'
          fillOpacity='0.4'
        />
        <path
          d='M28 51.5L38.5 38L54.0871 49.6715L63.5 35.5'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <defs>
          <linearGradient
            id='paint0_linear_2039_12814'
            x1='46'
            y1='27'
            x2='46'
            y2='70'
            gradientUnits='userSpaceOnUse'>
            <stop
              stopColor='white'
              stopOpacity='0'
            />
            <stop
              offset='1'
              stopColor='white'
            />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
]

const LoansForLoans = () => {
  return (
    <>
      <StarSky />
      <NewVersionHeader />
      <Container
        maxW={{
          // xs: 345,
          sm: 666,
          md: 900,
          lg: 1200,
        }}
        px='0'
        color={'white'}
        position={'relative'}
        zIndex={2}>
        <Flex
          direction={'column'}
          pt='60px'
          align={'center'}
          bg={bg}>
          <Flex
            columnGap={'20px'}
            flexWrap={'wrap'}
            justify={'center'}
            mb='40px'
            zIndex={2}>
            <ColorShadow title='Enjoy' />
            <ColorShadow title='flexible' />
            <ColorShadow title='loans' />
            <ColorShadow title='terms' />
            <ColorShadow title='with' />
            <ColorShadow title='loans' />
            <ColorShadow title='for' />
            <ColorShadow title='loans' />
          </Flex>
          <Text
            fontSize={'20px'}
            mb={'20px'}
            color={'#E0E0E0'}
            textAlign={'center'}
            zIndex={2}>
            Extend and switch your loans, hold your NFTs to capture their rising
            value.
          </Text>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            position={'relative'}
            zIndex={2}>
            <BtnLaunchApp />
          </Box>

          <Box
            zIndex={1}
            mt='-240px'>
            <Image
              src={bg}
              transform={'rotate(4deg)'}
              // animation={'ratate3d 10s linear infinite'}
            />
          </Box>
        </Flex>
        <Box>
          <Text
            fontSize={'56px'}
            fontWeight={'900'}
            color={'white'}
            mb='32px'
            textAlign={'center'}
            fontFamily={'Orbitron'}>
            Why Loan Refinancing Benefits You
          </Text>
          <Flex
            gap={'24px'}
            mt='60px'>
            {WHY_DATA.map((item) => (
              <WaveCard
                key={item.title}
                data={{ ...item }}
              />
            ))}
          </Flex>
        </Box>
        <Comparison
          data={{
            title: 'Comparison with Traditional Lending',
            items: [
              'Loans for Loans',
              'Traditional Lending',
              'Traditional Lending',
              'Supported',
              'Unsupported',
              'Switch Fees',
              'Zero',
              'Fees may occur',
              'Loan Extension',
              'Supported',
              'Mostly Unsupported',
              'Application Time',
              'Anytime',
              'Initial Setup only',
              'Cost of holding NFTs',
              'Low',
              'High',
              'Cost of holding NFTs',
              'High',
              'Low',
            ],
          }}
        />
        <DiscoverMore />
      </Container>
      <NewVersionFooter />
    </>
  )
}

export default LoansForLoans
