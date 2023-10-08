import { Container, Box, Text, Flex, Image, Img } from '@chakra-ui/react'
import React from 'react'
import DiscoverMore from '../components/discover-more/DiscoverMore'
import Comparison from '../components/comparison/Comparison'
import WaveCard from '../components/cards/WaveCard'
import ColorShadow from '../components/ColorShadow'
import img1 from '../images/sub-pages/opensea-market.png'
import img2 from '../images/sub-pages/xbank-market.png'
import img21 from '../images/sub-pages/xbank-market-logo.png'
import img3 from '../images/sub-pages/blur-market.png'
import StarSky from '../components/StarSky'
import NewVersionHeader from '../components/NewVersionHeader'
import NewVersionFooter from '../components/NewVersionFooter'
import BtnLaunchApp from '../components/BtnLaunchApp'
import PinkUniverse from '../components/PinkUniverse'
import VideoImg from '../images/img-video-2.png'

const WHY_DATA = [
  {
    title: 'Supported multi marketplace',
    description:
      'Your NFTs can be listed in different marketplaces, allowing you to reach a wider group of buyers.',
    icon: (
      <svg
        width='88'
        height='88'
        viewBox='0 0 88 88'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M26 29.4619H64L71 67.9804H19L26 29.4619Z'
          fill='url(#paint0_linear_2028_10206)'
          fillOpacity='0.24'
        />
        <path
          d='M26.5677 24.486C26.8176 23.049 28.0648 22 29.5233 22H60.4767C61.9352 22 63.1824 23.049 63.4323 24.486L70.3889 64.486C70.708 66.3208 69.2956 68 67.4332 68H22.5668C20.7044 68 19.292 66.3208 19.6111 64.486L26.5677 24.486Z'
          stroke='white'
        />
        <line
          x1='39'
          y1='59.2397'
          x2='51'
          y2='59.2397'
          stroke='white'
          strokeWidth='4'
        />
        <path
          d='M55 32C55 37.5228 50.5228 42 45 42C39.4772 42 35 37.5228 35 32'
          stroke='white'
          strokeLinecap='round'
        />
        <defs>
          <linearGradient
            id='paint0_linear_2028_10206'
            x1='45'
            y1='29.4619'
            x2='45'
            y2='67.9804'
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
    title: 'Sell Anytime',
    description:
      'Your NFTs, your decisions. Sell, hold, or trade with ease and confidence.',
    icon: (
      <svg
        width='88'
        height='88'
        viewBox='0 0 88 88'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M17 29H71V61C71 67.0751 66.0751 72 60 72H28C21.9249 72 17 67.0751 17 61V29Z'
          fill='url(#paint0_linear_2030_12010)'
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
        <line
          opacity='0.4'
          x1='31'
          y1='60'
          x2='57.963'
          y2='60'
          stroke='white'
          strokeWidth='4'
        />
        <path
          d='M44 51.7V24.7'
          stroke='white'
          strokeWidth='2.69998'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M44.0002 22L35.9004 32.8H52.1001L44.0002 22Z'
          fill='white'
          stroke='white'
          strokeWidth='2.69998'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <defs>
          <linearGradient
            id='paint0_linear_2030_12010'
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
    title: 'Maximized Earnings',
    description:
      'Choose the perfect moment to sell, capitalizing on market trends to achieve the highest return.',
    icon: (
      <svg
        width='88'
        height='88'
        viewBox='0 0 88 88'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M19 27H73V63C73 66.866 69.866 70 66 70H26C22.134 70 19 66.866 19 63V27Z'
          fill='url(#paint0_linear_2030_12039)'
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
          x1='23.8145'
          y1='59'
          x2='35.8145'
          y2='59'
          stroke='white'
          strokeWidth='4'
        />
        <path
          d='M29.1822 50.9245C28.8644 51.3762 28.9728 52 29.4245 52.3178C29.8762 52.6356 30.5 52.5272 30.8178 52.0755L29.1822 50.9245ZM39.5 38L40.271 37.3631C40.0724 37.1227 39.773 36.9887 39.4614 37.0007C39.1498 37.0128 38.8616 37.1695 38.6822 37.4245L39.5 38ZM49 49.5L48.229 50.1369C48.4173 50.3647 48.6966 50.4976 48.9921 50.5C49.2876 50.5023 49.5691 50.3738 49.7608 50.1489L49 49.5ZM64.4969 32.4209C64.4532 31.8703 63.9714 31.4594 63.4209 31.5031L54.4491 32.2152C53.8985 32.2589 53.4877 32.7406 53.5313 33.2912C53.575 33.8417 54.0568 34.2526 54.6073 34.2089L62.5823 33.576L63.2152 41.5509C63.2589 42.1015 63.7406 42.5123 64.2912 42.4687C64.8417 42.425 65.2526 41.9432 65.2089 41.3927L64.4969 32.4209ZM30.8178 52.0755L40.3178 38.5755L38.6822 37.4245L29.1822 50.9245L30.8178 52.0755ZM38.729 38.6369L48.229 50.1369L49.771 48.8631L40.271 37.3631L38.729 38.6369ZM49.7608 50.1489L64.2608 33.1489L62.7392 31.8511L48.2392 48.8511L49.7608 50.1489Z'
          fill='white'
        />
        <defs>
          <linearGradient
            id='paint0_linear_2030_12039'
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
  {
    title: 'Immediate Liquidity',
    description:
      'Sell your NFTs whenever you wish, turning your digital assets into cash on your terms.',
    icon: (
      <svg
        width='88'
        height='88'
        viewBox='0 0 88 88'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='19'
          y='29.4619'
          width='52'
          height='38.5185'
          fill='url(#paint0_linear_2030_12068)'
          fillOpacity='0.24'
        />
        <path
          d='M71.3536 27.8896C71.5488 27.6943 71.5488 27.3777 71.3536 27.1825L68.1716 24.0005C67.9763 23.8052 67.6597 23.8052 67.4645 24.0005C67.2692 24.1957 67.2692 24.5123 67.4645 24.7076L70.2929 27.536L67.4645 30.3644C67.2692 30.5597 67.2692 30.8763 67.4645 31.0715C67.6597 31.2668 67.9763 31.2668 68.1716 31.0715L71.3536 27.8896ZM22 28.036H71V27.036H22V28.036ZM19.5 45V30.536H18.5V45H19.5ZM22 27.036C20.067 27.036 18.5 28.603 18.5 30.536H19.5C19.5 29.1553 20.6193 28.036 22 28.036V27.036Z'
          fill='white'
        />
        <path
          d='M18.6464 67.1104C18.4512 67.3057 18.4512 67.6223 18.6464 67.8175L21.8284 70.9995C22.0237 71.1948 22.3403 71.1948 22.5355 70.9995C22.7308 70.8043 22.7308 70.4877 22.5355 70.2924L19.7071 67.464L22.5355 64.6356C22.7308 64.4403 22.7308 64.1237 22.5355 63.9285C22.3403 63.7332 22.0237 63.7332 21.8284 63.9285L18.6464 67.1104ZM68 66.964H19V67.964H68V66.964ZM70.5 50V64.464H71.5V50H70.5ZM68 67.964C69.933 67.964 71.5 66.397 71.5 64.464H70.5C70.5 65.8447 69.3807 66.964 68 66.964V67.964Z'
          fill='white'
        />
        <path
          d='M53.9987 42C52.1555 42 50.4152 42.7344 49.0978 44.0675L39.9249 53.3549C38.8704 54.4226 37.4759 55.0095 36.0013 55.0095C32.9322 55.0095 30.4318 52.4524 30.3975 49.2937C30.3604 46.1556 32.7922 43.5337 35.8328 43.4422C37.3701 43.395 38.8304 43.9878 39.9249 45.0939L42.2624 47.4621C42.3881 47.589 42.591 47.5861 42.7139 47.4563L43.2454 46.8988C43.3683 46.7691 43.3655 46.5597 43.2397 46.4328L40.9022 44.0645C39.5848 42.7344 37.8445 42 35.9985 42C32.0721 42 28.8887 45.3563 29.003 49.4382C29.1087 53.1662 31.9892 56.2276 35.5955 56.437C37.5873 56.552 39.4876 55.8117 40.8993 54.3813L50.0723 45.0939C51.1268 44.0262 52.5213 43.4393 53.9958 43.4393C57.0649 43.4393 59.5625 45.9963 59.5996 49.1551C59.6397 52.2932 57.205 54.9151 54.1673 55.0066C52.6299 55.0537 51.1696 54.4609 50.0752 53.3549L47.7376 50.9866C47.6119 50.8598 47.409 50.8628 47.2861 50.9925L46.7546 51.5499C46.6317 51.6797 46.6346 51.8891 46.7603 52.0159L49.0978 54.3842C50.5095 55.8147 52.4098 56.555 54.4016 56.44C58.0108 56.2335 60.8913 53.1691 60.997 49.4412C61.1113 45.3563 57.9279 42 53.9987 42Z'
          fill='white'
        />
        <path
          opacity='0.4'
          d='M19 65L19 47'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.4'
          d='M71 49L71 31'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <defs>
          <linearGradient
            id='paint0_linear_2030_12068'
            x1='45'
            y1='29.4619'
            x2='45'
            y2='67.9804'
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

const CollateralSell = () => {
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
        pos={'relative'}
        zIndex={2}>
        {/* title */}
        <Flex
          direction={'column'}
          pt='60px'
          align={'center'}>
          <Flex
            columnGap={'20px'}
            flexWrap={'wrap'}
            justify={'center'}
            px='100px'>
            <ColorShadow title='Harvest' />
            <ColorShadow title='the' />
            <ColorShadow title='price' />
            <ColorShadow title='application' />
            <ColorShadow title='of' />
            <ColorShadow title='NFTs' />
          </Flex>
          <Box
            // bg='blue'
            pt='40px'
            pb='60px'>
            <Text
              fontSize={'20px'}
              color={'#E0E0E0'}
              textAlign={'center'}>
              Sell your NFTs whenever you want to maximize your earnings.
            </Text>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              position={'relative'}
              zIndex={2}
              pt={'32px'}>
              <BtnLaunchApp />
            </Box>
          </Box>
        </Flex>
        <PinkUniverse />
        <Box
          position={'relative'}
          bg='rgba(0, 0, 0, 0.2)'
          h={'600px'}
          borderRadius={'24px'}
          border={'1px solid rgba(255, 255, 255, 0.08)'}
          mb='50px'
          overflow={'hidden'}>
          <Img
            position={'relative'}
            src={VideoImg}
          />
          <Box className='video-cover'></Box>
          {/* <video
            style={{
              width: '100%',
              height: '100%',
            }}
            src='https://placehold.co/1920x1080.mp4'></video> */}
        </Box>
        <Box
          pt='72px'
          pb='50px'>
          <Text
            fontSize={'56px'}
            fontWeight={'900'}
            textAlign={'center'}
            mb='60px'
            fontFamily={'Orbitron'}>
            Unlock the investment potentials of your NFTs
          </Text>
          <Flex gap={'24px'}>
            {WHY_DATA.map((item) => (
              <WaveCard
                key={item.title}
                data={{ ...item }}
              />
            ))}
          </Flex>
        </Box>
        <Comparison
          mb='50px'
          data={{
            title: 'Comparision with Normal Selling',
            items: [
              'Colletral Selling',
              'Normal Way to Sell',
              'Earnings potential',
              'Very High potentail',
              'Low potential',
              'Loss Potential',
              'Much lower',
              'High risk',
              'Loans for Loans',
              'Supported',
              'Unsupported',
              'Flexibility',
              'Sell Anytime',
              'Rigid',
              'Buyer Reach',
              'Broader',
              'Limited',
            ],
          }}
        />
        {/* marketplace */}
        <Box
          mt='104px'
          mb='140px'>
          <Text
            fontSize={'56px'}
            fontWeight={'900'}
            textAlign={'center'}
            mb='92px'
            fontFamily={'Orbitron'}>
            Collateral selling with these Marketplaces
          </Text>

          <Flex gap={'24px'}>
            <Image src={img1} />
            <Flex
              justify={'center'}
              direction={'column'}
              pos={'relative'}>
              <Image
                src={img21}
                w='206px'
                position={'absolute'}
                top={'-44px'}
                left={'50%'}
                transform={'translateX(-50%)'}
              />
              <Image src={img2} />
            </Flex>
            <Image src={img3} />
          </Flex>
        </Box>
        <DiscoverMore />
      </Container>
      <NewVersionFooter />
    </>
  )
}

export default CollateralSell
