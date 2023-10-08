import * as React from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Img,
  Spacer,
  Text,
  useToast,
} from '@chakra-ui/react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../style/global.scss'
import Slider from 'react-slick'
import Logo from '../images/svg/logo.svg'
import Logo2 from '../images/svg/Logo2.png'
import Binance from '../images/svg/binance.svg'
import Universe from '../images/circle.jpeg'
import Plane1 from '../images/universe/plane-1.png'
import Plane2 from '../images/universe/plane-2.png'
import Plane3 from '../images/universe/plane-3.png'
import Plane4 from '../images/universe/plane-4.png'
import Plane5 from '../images/universe/plane-5.png'
import Plane6 from '../images/universe/plane-6.svg'
import Plane7 from '../images/universe/plane-7.png'
import Plane8 from '../images/universe/plane-8.png'
import ColorShadow from '../components/ColorShadow'
import UniverseLogo from '../images/universe/universe-logo.svg'
import SunRaise from '../images/universe/sun-raise.png'
import BinanceWhite from '../images/brand/binance.svg'
import InfinityLogo from '../images/brand/infinity.svg'
import IosgLogo from '../images/brand/iosg.svg'
import DigitalLogo from '../images/brand/digital.png'
import HashKeyLogo from '../images/brand/hashkey.png'
import HeadlineLogo from '../images/brand/Headline.svg'
import AbaciLogo from '../images/brand/abaci.svg'
import BanxaLogo from '../images/brand/banxa.svg'
import SimplexLogo from '../images/brand/simplex.svg'
import LegendLogo from '../images/brand/legend.svg'
import Egg from '../images/svg/egg.svg'
import CardFlexibleMoneyMarket from '../components/CardFlexibleMoneyMarket'
import CardRobustSecurity from '../components/CardRobustSecurity'
import CardDecentralizedP2PMode from '../components/CardDecentralizedP2PMode'
import CardTrustByCommunity from '../components/CardTrustByCommunity'
import Light2 from '../images/light2.png'
import Egg2 from '../images/svg/egg2.svg'
import CardMatchingLiquidity from '../components/CardMatchingLiquidity'
import CardFindTheBestLendingOffer from '../components/CardFindTheBestLendingOffer'
import CardOvercollateralization from '../components/CardOvercollateralization'

import Logo3 from '../images/svg/Logo3.png'
import Twitter from '../images/svg/twitter.svg'
import Discord from '../images/svg/discord.svg'
import LogoM from '../images/svg/m.svg'
import LinkIn from '../images/svg/in.svg'
import Footer from '../images/footer.png'
import StarSky from '../components/StarSky'
import NewVersionHeader from '../components/NewVersionHeader'
import NewVersionFooter from '../components/NewVersionFooter'
import {
  DISCORD_URL,
  IOS_URL,
  LINKEDIN_URL,
  MEDIUM_URL,
  TWITTER_URL,
} from '../constants/URL'
import img1 from '../images/scoop/1.png'
import img2 from '../images/scoop/2.png'
import img3 from '../images/scoop/3.png'
import img4 from '../images/scoop/4.png'
import BtnLaunchApp from '../components/BtnLaunchApp'
// import HeadlineLogo from '../images/brand/Headline.svg'
// import HeadlineLogo from '../images/brand/Headline.svg'
// import HeadlineLogo from '../images/brand/Headline.svg'
// const settings = {
//   dots: false,
//   arrows: false,
//   infinite: true,
//   // slidesToShow: 3,
//   // slidesToScroll: 1,
//   autoplay: true,
//   speed: 5000,
//   autoplaySpeed: 0,
//   cssEase: 'linear',
//   pauseOnHover: true,
//   variableWidth: true,
//   rows: 2,
//   slidesPerRow: 2,
// }

const DATA = [
  {
    id: 1,
    title: 'Power of NFT unleashed: xBank and its “onboarding leverage”',
    url: 'https://medium.com/@xBankCrypto/power-of-nft-unleashed-xbank-and-its-onboarding-leverage-664058669182',
    img: img1,
  },
  {
    id: 2,
    title: 'What Does An Open Money Market for NFT Looks Like?',
    url: 'https://medium.com/@xBankCrypto/what-does-an-open-money-market-for-nft-looks-like-9ac65bc5b0',
    img: img2,
  },
  {
    id: 3,
    title:
      'Making the Best, xBank Joining Binance’s Most Valuable Builder Accelerator Season 6',
    url: 'https://medium.com/@xBankCrypto/making-the-best-xbank-joining-binances-most-valuable-builder-accelerator-season-6-acaf77c97a51',
    img: img3,
  },
  {
    id: 4,
    title: 'Better Way to Invest in NFT You Must Know',
    url: 'https://medium.com/@xBankCrypto/better-way-to-invest-in-nft-you-must-know-37d1a3cea3c8',
    img: img4,
  },
]

const IndexPage = () => {
  const toast = useToast()

  return (
    <>
      <StarSky />
      <div className='home-page'>
        <NewVersionHeader />
        <Container
          padding={0}
          centerContent
          maxW={{
            sm: 666,
            md: 900,
            lg: 1200,
          }}>
          <Box
            display={'flex'}
            justifyContent={'center'}
            mt={'92px'}>
            <Image src={Binance}></Image>
          </Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            marginBottom={'-25px'}>
            <ColorShadow title='xBank' />
            <ColorShadow title='Permissionless' />
          </Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            position={'relative'}
            zIndex={1}>
            <ColorShadow title='Consumer' />
            <ColorShadow title='Liquidity' />
          </Box>
          <Box
            className='home-sub-slogen'
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            marginBottom={'30px'}
            position={'relative'}
            zIndex={1}>
            Buy Now Pay Later, Earn Interest and Monetize Your Sales
          </Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            position={'relative'}
            zIndex={1}>
            <BtnLaunchApp />
            <Box
              // as='button'
              className='home-btn-launch'
              marginX={'10px'}>
              <Box className='home-btn-bg'></Box>
              <Box
                className='home-btn-launch-inner'
                as='button'
                onClick={() => {
                  toast({
                    title: 'Coming soon!',
                    position: 'top',
                    status: 'info',
                    duration: 3000,
                    isClosable: true,
                  })
                }}>
                Join Our Ecosystem
              </Box>
            </Box>
          </Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}>
            <Box className='universe-container'>
              <Image
                className='sun-raise'
                w='1030px'
                src={SunRaise}></Image>
              <Box className='universe-wrapper'>
                <Box className='track-line'></Box>
                <Box className='track-line'></Box>
                <Box className='track-line'></Box>
                <Box className='track-line'></Box>
                <Box className='track-line'></Box>
                <Box className='track-line'></Box>
                <Box className='track-line'></Box>
                <Box className='track-line'></Box>
              </Box>
              <Box className='universe-wrapper'>
                <Box className='track'>
                  <Image
                    className='track-plane'
                    src={Plane1}
                  />
                </Box>
                <Box className='track'>
                  <Image
                    className='track-plane'
                    src={Plane3}
                  />
                </Box>
                <Box className='track'>
                  <Image
                    className='track-plane'
                    src={Plane2}
                  />
                </Box>
                <Box className='track'>
                  <Image
                    className='track-plane'
                    src={Plane4}
                  />
                </Box>
                <Box className='track'>
                  <Image
                    className='track-plane'
                    src={Plane8}
                  />
                </Box>
                <Box className='track'>
                  <Image
                    className='track-plane'
                    src={Plane6}
                  />
                </Box>
                <Box className='track'>
                  <Image
                    className='track-plane'
                    src={Plane5}
                  />
                </Box>
                <Box className='track'>
                  <Image
                    className='track-plane'
                    src={Plane7}
                  />
                </Box>
              </Box>
              <Image
                className='universe-logo'
                src={UniverseLogo}></Image>
              <Box className='brand-wrapper'>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-around'}
                  w={'992px'}
                  marginBottom={'20px'}>
                  <Box
                    className='brand-card'
                    style={{ width: '160px', height: '80px' }}>
                    <Image src={BinanceWhite} />
                  </Box>
                  <Box
                    className='brand-card'
                    style={{ width: '160px', height: '80px' }}>
                    <Image src={InfinityLogo} />
                  </Box>
                  <Box
                    className='brand-card'
                    style={{ width: '160px', height: '80px' }}>
                    <Image src={IosgLogo} />
                  </Box>
                  <Box
                    className='brand-card'
                    style={{ width: '160px', height: '80px' }}>
                    <Image src={DigitalLogo} />
                  </Box>
                  <Box
                    className='brand-card'
                    style={{ width: '160px', height: '80px' }}>
                    <Image src={HashKeyLogo} />
                  </Box>
                </Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-around'}
                  w={'896px'}>
                  <Box
                    className='brand-card'
                    style={{ width: '160px', height: '80px' }}>
                    <Image src={HeadlineLogo} />
                  </Box>
                  <Box
                    className='brand-card'
                    style={{ width: '160px', height: '80px' }}>
                    <Image src={AbaciLogo} />
                  </Box>
                  <Box
                    className='brand-card'
                    style={{ width: '160px', height: '80px' }}>
                    <Image src={BanxaLogo} />
                  </Box>
                  <Box
                    className='brand-card'
                    style={{ width: '160px', height: '80px' }}>
                    <Image src={SimplexLogo} />
                  </Box>
                  <Box
                    className='brand-card'
                    style={{ width: '160px', height: '80px' }}>
                    <Image src={LegendLogo} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}>
            <Box
              className='btn-color-radius'
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}>
              <ColorShadow title={'WHY'} />
              <ColorShadow title={'US'} />
            </Box>
          </Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            marginBottom={'48px'}>
            <Box
              as='button'
              className='btn-website-enter zIndex2'
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              flexWrap={'nowrap'}>
              <Image
                src={Egg}
                mr={'4px'}
              />
              <Text>xBank.plus</Text>
            </Box>
          </Box>
          <Box
            w={'1200px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            marginBottom={'15px'}>
            <CardFlexibleMoneyMarket />
            <CardRobustSecurity />
          </Box>
          <Box
            w={'1200px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <CardDecentralizedP2PMode />
            <CardTrustByCommunity />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}>
            <Box className='light-how-it-work'></Box>
            <Img
              className='zIndex2'
              src={Egg2}
              mb={'-50px'}
            />
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}>
              <Box
                className='btn-color-radius'
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}>
                <ColorShadow title='How' />
                <ColorShadow title='it' />
                <ColorShadow title='works' />
              </Box>
            </Box>
            <Box
              as='button'
              className='btn-website-enter zIndex2'
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              flexWrap={'nowrap'}
              marginBottom={'80px'}>
              <Image
                src={Egg}
                mr={'4px'}
              />
              <Text>xBank.plus</Text>
            </Box>
          </Box>
          <Box
            w={'1200px'}
            marginBottom={'15px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <CardMatchingLiquidity />
          </Box>
          <Box
            w={'1200px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <CardFindTheBestLendingOffer />
            <CardOvercollateralization />
          </Box>
          <Box
            paddingTop={'250px'}
            className='zIndex2'>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}>
              <Img src={Logo2} />
            </Box>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}>
              <Box
                className='btn-color-radius'
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}>
                <ColorShadow title='Get' />
                <ColorShadow title='The' />
                <ColorShadow title='Scoop!' />
              </Box>
            </Box>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}>
              <Box
                as='button'
                className='btn-website-enter zIndex2'
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                flexWrap={'nowrap'}
                marginBottom={'80px'}>
                <Image
                  src={Egg}
                  mr={'4px'}
                />
                <Text>xBank.plus</Text>
              </Box>
            </Box>
          </Box>
          <Box
            display={'flex'}
            width={'1200px'}
            justifyContent={'space-between'}
            mb={'200px'}>
            {DATA.map((item) => (
              <NftCard
                {...item}
                key={item.id}
              />
            ))}
          </Box>
          <Box
            className='join-our-community-card zIndex2'
            display={'flex'}
            alignItems={'center'}
            flexDir={'column'}>
            <Image
              src={Logo3}
              mt={'26px'}
              mb={'50px'}
            />
            <Text
              mb={'35px'}
              className='title'>
              Join Our Community
            </Text>
            <Box mb={'36px'}>
              <Text className='sub-title'>
                Follow us & Grab a{' '}
                <span className='blue'>5 USDT + 500 BUSD</span> Registration
                Reward
              </Text>
            </Box>
            <Box
              mb={'57px'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}>
              <Box
                className='logo-wrapper'
                marginX={'18px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                as='button'
                onClick={() => {
                  const isBrowser = typeof window !== 'undefined'
                  if (!isBrowser) return
                  window.open(TWITTER_URL, '_blank')
                }}>
                <Img
                  className='logo'
                  src={Twitter}
                />
              </Box>
              <Box
                className='logo-wrapper'
                marginX={'18px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                as='button'
                onClick={() => {
                  const isBrowser = typeof window !== 'undefined'
                  if (!isBrowser) return
                  window.open(DISCORD_URL, '_blank')
                }}>
                <Img
                  className='logo'
                  src={Discord}
                />
              </Box>
              <Box
                className='logo-wrapper'
                marginX={'18px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                as='button'
                onClick={() => {
                  const isBrowser = typeof window !== 'undefined'
                  if (!isBrowser) return
                  window.open(LINKEDIN_URL, '_blank')
                }}>
                <Img
                  className='logo'
                  src={LinkIn}
                />
              </Box>
              <Box
                className='logo-wrapper'
                marginX={'18px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                as='button'
                onClick={() => {
                  const isBrowser = typeof window !== 'undefined'
                  if (!isBrowser) return
                  window.open(MEDIUM_URL, '_blank')
                }}>
                <Img
                  className='logo'
                  src={LogoM}
                />
              </Box>
            </Box>
            <Box
              className='btn-join-xbank'
              as='button'>
              <Text>Join xBank</Text>
            </Box>
          </Box>
        </Container>
        <NewVersionFooter />
      </div>
    </>
  )
}
export default IndexPage

function NftCard(props: { img: any; title: string; url: string }) {
  return (
    <Box
      className='home-nft-card zIndex2'
      cursor={'pointer'}
      position={'relative'}
      _hover={{
        bottom: '20px',
      }}
      bottom={0}
      transition='all 0.4s'
      as='a'
      target='_blank'
      href={props.url}>
      <Img
        src={props.img}
        mb={'40px'}
      />
      <Text
        paddingX={'10px'}
        size={'16px'}
        fontWeight={500}>
        {props.title}
      </Text>
    </Box>
  )
}
