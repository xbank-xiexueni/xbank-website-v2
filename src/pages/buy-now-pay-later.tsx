import React from 'react'
import DiscoverMore from '../components/discover-more/DiscoverMore'
import { Container, Box, Text, Flex, Img } from '@chakra-ui/react'
import Comparison from '../components/comparison/Comparison'
import WaveCard from '../components/cards/WaveCard'
import ColorShadow from '../components/ColorShadow'
import MarketAndCollections from '../components/market-and-collections/MarketAndCollections'
import StarSky from '../components/StarSky'
import NewVersionHeader from '../components/NewVersionHeader'
import NewVersionFooter from '../components/NewVersionFooter'
import BtnLaunchApp from '../components/BtnLaunchApp'
import StarGif1 from '../images/star.gif'
import StarGif2 from '../images/star2.gif'
import LogoSimple from '../images/logo-simple.png'
import PinkUniver from '../images/pink-univer.png'
import PinkUniverse2 from '../images/PinkUniverse.jpeg'
import PinkUniverse from '../components/PinkUniverse'
import ImgVideo1 from '../images/img-video.png'
const WHY_DATA = [
  {
    title: 'Minimal Downpayment',
    description:
      'With options for as low as 0% down payment, we make top NFTs accessible.',
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
          fill='url(#paint0_linear_1957_26041)'
          fillOpacity='0.24'
        />
        <rect
          x='19'
          y='27.536'
          width='52'
          height='40.4444'
          rx='3'
          stroke='white'
        />
        <line
          x1='19'
          y1='37.6287'
          x2='71'
          y2='37.6287'
          stroke='white'
        />
        <line
          x1='23.8145'
          y1='59.2397'
          x2='35.8145'
          y2='59.2397'
          stroke='white'
          strokeWidth='4'
        />
        <line
          opacity='0.4'
          x1='23.8145'
          y1='52.499'
          x2='50.7774'
          y2='52.499'
          stroke='white'
          strokeWidth='4'
        />
        <path
          d='M21.8887 27.536L55.6446 17.5343C58.616 16.6539 61.769 18.1813 62.92 21.0587L64.7405 25.6101'
          stroke='white'
        />
        <defs>
          <linearGradient
            id='paint0_linear_1957_26041'
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
    title: 'Fixed Interest Rate',
    description:
      'Enjoy stability with a fixed interest rate once the payment plan is matched.',
    icon: (
      <svg
        width='88'
        height='88'
        viewBox='0 0 88 88'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M44.9629 21V63.3704'
          stroke='white'
          strokeLinecap='round'
        />
        <path
          d='M65.4258 24.8518L24.4991 35.8181'
          stroke='white'
          strokeLinecap='round'
        />
        <path
          d='M20 51.8148H38.2963C38.2963 53.9421 36.2484 55.6667 33.7222 55.6667H24.5741C22.0478 55.6667 20 53.9421 20 51.8148Z'
          fill='white'
          fillOpacity='0.5'
          stroke='white'
        />
        <path
          d='M51.7031 43.1482H69.9994C69.9994 45.2755 67.9515 47 65.4253 47H56.2772C53.751 47 51.7031 45.2755 51.7031 43.1482Z'
          fill='white'
          fillOpacity='0.5'
          stroke='white'
        />
        <path
          d='M35.4073 51.8148L28.6665 36.4073L21.9258 51.8148'
          stroke='white'
        />
        <path
          d='M67.1104 43.1481L60.3696 27.7407L53.6289 43.1481'
          stroke='white'
        />
        <rect
          x='19.9258'
          y='63.3704'
          width='50.0741'
          height='3.85185'
          rx='1.92593'
          fill='white'
          fillOpacity='0.5'
          stroke='white'
        />
        <ellipse
          cx='45'
          cy='31'
          rx='3'
          ry='3'
          fill='white'
        />
      </svg>
    ),
  },
  {
    title: 'Flexible Repayment',
    description: `Repay any time to fully take control of the NFT, or list it if you're making a profit.`,
    icon: (
      <svg
        width='88'
        height='89'
        viewBox='0 0 88 89'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M64.2396 25.1804H23.7596C22.1259 25.1804 20.559 25.7986 19.4038 26.8986C18.2486 27.9988 17.5996 29.4911 17.5996 31.0472V65.5137C17.5996 67.0697 18.2486 68.562 19.4038 69.6622C20.559 70.7622 22.1259 71.3804 23.7596 71.3804H64.2396C65.8733 71.3804 67.4402 70.7622 68.5954 69.6622C69.7506 68.562 70.3996 67.0697 70.3996 65.5137V31.0472C70.3996 29.4911 69.7506 27.9988 68.5954 26.8986C67.4402 25.7986 65.8733 25.1804 64.2396 25.1804Z'
          fill='url(#paint0_linear_1957_26080)'
          fillOpacity='0.24'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M17.5996 31.7804C17.5996 30.0301 18.2486 28.3513 19.4038 27.1136C20.559 25.8758 22.1259 25.1804 23.7596 25.1804H64.2396C65.8733 25.1804 67.4402 25.8758 68.5954 27.1136C69.7506 28.3513 70.3996 30.0301 70.3996 31.7804V33.9804H17.5996V31.7804Z'
          fill='white'
          fillOpacity='0.5'
          stroke='white'
        />
        <path
          d='M26.4004 18.5804V25.1804M61.6004 18.5804V25.1804'
          stroke='white'
          strokeLinecap='round'
        />
        <path
          d='M28.5996 47.1805V42.7805H32.9996V47.1805H28.5996ZM28.5996 60.3805V55.9805H32.9996V60.3805H28.5996ZM41.7996 47.1805V42.7805H46.1996V47.1805H41.7996ZM41.7996 60.3805V55.9805H46.1996V60.3805H41.7996Z'
          fill='white'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M53.5 58.5L56.8976 61.5579C57.7625 62.3362 59.1067 62.2149 59.8181 61.2942L67 52'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <path
          opacity='0.4'
          d='M55 47.1805V42.7805H59.4V47.1805H55Z'
          fill='white'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <defs>
          <linearGradient
            id='paint0_linear_1957_26080'
            x1='48.3996'
            y1='25.1804'
            x2='48.3996'
            y2='77.9804'
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
    title: 'Reward Earnings',
    description:
      'Enjoy xBank rewards whenever you finish a purchase or repayment',
    icon: (
      <svg
        width='88'
        height='88'
        viewBox='0 0 88 88'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M28.8 70H25.2C23.2904 70 21.4591 69.2415 20.1088 67.8911C18.7586 66.5409 18 64.7096 18 62.8V23.2C18 21.2904 18.7586 19.4591 20.1088 18.1088C21.4591 16.7586 23.2904 16 25.2 16H64.8C66.7096 16 68.5409 16.7586 69.8911 18.1088C71.2415 19.4591 72 21.2904 72 23.2V62.8C72 64.7096 71.2415 66.5409 69.8911 67.8911C68.5409 69.2415 66.7096 70 64.8 70H61.2'
          fill='url(#paint0_linear_1957_26153)'
          fillOpacity='0.24'
        />
        <path
          opacity='0.4'
          d='M33.1 34H31.4C30.4983 34 29.6335 34.3639 28.9959 35.0118C28.3582 35.6597 28 36.5384 28 37.4545V39.1818M56.9 34H58.6C59.5017 34 60.3665 34.3639 61.0041 35.0118C61.6418 35.6597 62 36.5384 62 37.4545V39.1818M33.1 53H31.4C30.4983 53 29.6335 52.6361 28.9959 51.9882C28.3582 51.3403 28 50.4616 28 49.5455V47.8182M56.9 53H58.6C59.5017 53 60.3665 52.6361 61.0041 51.9882C61.6418 51.3403 62 50.4616 62 49.5455V47.8182'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M28.8 70H25.2C23.2904 70 21.4591 69.2415 20.1088 67.8911C18.7586 66.5409 18 64.7096 18 62.8V23.2C18 21.2904 18.7586 19.4591 20.1088 18.1088C21.4591 16.7586 23.2904 16 25.2 16H64.8C66.7096 16 68.5409 16.7586 69.8911 18.1088C71.2415 19.4591 72 21.2904 72 23.2V62.8C72 64.7096 71.2415 66.5409 69.8911 67.8911C68.5409 69.2415 66.7096 70 64.8 70H61.2'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.4'
          d='M36 70H54'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <g clipPath='url(#clip0_1957_26153)'>
          <path
            d='M44.9469 32.973L44.8203 33.4323V46.7609L44.9469 46.8958L50.7433 43.2387L44.9469 32.973Z'
            fill='white'
          />
          <path
            d='M44.9497 32.973L39.1533 43.2387L44.9497 46.8958V40.4266V32.973Z'
            fill='white'
          />
          <path
            d='M44.9473 48.0673L44.876 48.1601V52.908L44.9473 53.1305L50.7471 44.412L44.9473 48.0673Z'
            fill='white'
          />
          <path
            d='M44.9497 53.1304V48.0673L39.1533 44.412L44.9497 53.1304Z'
            fill='white'
          />
          <path
            d='M44.9473 46.8954L50.7436 43.2384L44.9473 40.4263V46.8954Z'
            fill='white'
          />
          <path
            d='M39.1533 43.2384L44.9496 46.8954V40.4263L39.1533 43.2384Z'
            fill='white'
          />
        </g>
        <defs>
          <linearGradient
            id='paint0_linear_1957_26153'
            x1='45'
            y1='16'
            x2='45'
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
          <clipPath id='clip0_1957_26153'>
            <rect
              width='12'
              height='20.5714'
              fill='white'
              transform='translate(38.999 32.7142)'
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
]

const BuyNowPayLater = () => {
  return (
    <>
      <StarSky />
      <div>
        <NewVersionHeader />
        <Container
          maxW={{
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
            align={'center'}
            pos={'relative'}
            zIndex={2}>
            <Box display={'flex'}>
              <ColorShadow title='Buy' />
              <ColorShadow title='NFTs' />
              <ColorShadow title='Now,' />
              <ColorShadow title='Pay' />
              <ColorShadow title='Later' />
            </Box>
            <Text
              mt={'20px'}
              mb={'32px'}
              fontSize={'20px'}
              color={'#E0E0E0'}
              textAlign={'center'}>
              Your purchase, your pace: Split payments for NFTs over weeks or
              months with ease.
            </Text>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              position={'relative'}
              zIndex={2}
              mb='50px'>
              <BtnLaunchApp />
            </Box>
          </Flex>
          <PinkUniverse />
          <Box
            position={'relative'}
            h={'600px'}
            borderRadius={'24px'}
            border={'1px solid rgba(255, 255, 255, 0.08)'}>
            <Img src={ImgVideo1}></Img>
            <Box className='video-cover'></Box>
          </Box>
          <Box pt='72px'>
            <Text
              fontSize={'56px'}
              fontWeight={'900'}
              textAlign={'center'}
              mb='60px'
              fontFamily={'Orbitron'}>
              Step into the future of NFT ownership with exclusive financial
              flexibility
            </Text>

            <Flex gap={'24px'}>
              {WHY_DATA.map((item) => (
                <WaveCard
                  key={item.title}
                  data={{ ...item }}
                  gap={'36px'}
                />
              ))}
            </Flex>
          </Box>
          <Comparison
            mb='40px'
            data={{
              title: 'Comparision with Full Payment',
              items: [
                'xBank BNPL',
                'Full Payment',
                'Downpayment',
                'Down to 10%',
                '100% payment',
                'Payment Period',
                'Up to 90 days',
                'Pay immediately',
                'Money Efficincey',
                'Up to 10X Leverage',
                'Very Low',
                'Rewards on purchase',
                'supported',
                'Few or no rewards',
                'Rewards on Repayment',
                'supported',
                'N/A',
                'Additional Discounts',
                'may offer additional discounts',
                'no additional discounts',
              ],
            }}
          />
          <MarketAndCollections />
          <DiscoverMore />
        </Container>
        <NewVersionFooter />
      </div>
    </>
  )
}

export default BuyNowPayLater
