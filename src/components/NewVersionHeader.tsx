import { Box, Flex, Spacer, Image } from '@chakra-ui/react'
import React from 'react'
import Logo from '../images/svg/logo.svg'
import { Link, navigate } from 'gatsby'
import RightArr from '../images/svg/menu-right-arr.svg'
import {
  DISCORD_URL,
  LINKEDIN_URL,
  MEDIUM_URL,
  TWITTER_URL,
} from '../constants/URL'
const NewVersionHeader = () => {
  return (
    <Flex
      h={'72px'}
      alignItems={'center'}
      padding={'12px 124px 12px 108px'}>
      <Image
        h={'25px'}
        w={'127px'}
        src={Logo}
      />
      <Spacer />
      <Box
        // w='400px'
        paddingX={'20px'}
        h='48px'
        borderRadius={'32px'}
        border={'1px solid rgba(255, 255, 255, 0.08)'}
        bg={'rgba(255, 255, 255, 0.08)'}
        justifyContent={'space-around'}
        alignItems={'center'}
        display='flex'>
        <Box
          as={'button'}
          className='nav-button'
          onClick={() => {
            navigate('/')
          }}>
          Home
          <Box className='nav-button-active-line'></Box>
        </Box>
        <Box>
          <Box
            as={'button'}
            className='nav-button'>
            Personal
            <Box className='nav-button-active-line'></Box>
            <Box className='nav-button-menu'>
              <Link
                className='nav-button-menu-item'
                to='/buy-now-pay-later'>
                BNPL
                <Image
                  className='menu-right-arr'
                  src={RightArr}
                />
              </Link>
              <Link
                className='nav-button-menu-item'
                to='/collateral-sell'>
                Collateral Selling
                <Image
                  className='menu-right-arr'
                  src={RightArr}
                />
              </Link>
              <Link
                className='nav-button-menu-item'
                to='/loans-for-loans'>
                Loans for Loans
                <Image
                  className='menu-right-arr'
                  src={RightArr}
                />
              </Link>
              {/* <Link
                className='nav-button-menu-item'
                to='https://lending.xbank.plus'
                target='_blank'>
                Launch App
                <Image
                  className='menu-right-arr'
                  src={RightArr}
                />
              </Link> */}
            </Box>
          </Box>
        </Box>
        <Box
          as={'button'}
          className='nav-button'>
          Business
          <Box className='nav-button-active-line'></Box>
          <Box className='nav-button-menu'>
            {/* <Link
              className='nav-button-menu-item'
              to='/buy-now-pay-later'>
              Buy now pay later
              <Image
                className='menu-right-arr'
                src={RightArr}
              />
            </Link> */}
            {/* <Link
              className='nav-button-menu-item'
              to='https://lending.xbank.plus/my-assets'
              target='_blank'>
              Collateral Selling
              <Image
                className='menu-right-arr'
                src={RightArr}
              />
            </Link> */}
            <Link
              className='nav-button-menu-item'
              to='/installment-payments'>
              Installment Payments
              <Image
                className='menu-right-arr'
                src={RightArr}
              />
            </Link>
            <Link
              className='nav-button-menu-item'
              to='/sell-on-credit'>
              Sell on Credit
              <Image
                className='menu-right-arr'
                src={RightArr}
              />
            </Link>
          </Box>
        </Box>
        <Box
          onClick={() => {
            const isBrowser = typeof window !== 'undefined'
            if (!isBrowser) return
            window.open('https://xbankdocs.gitbook.io/product-docs/', '_blank')
          }}
          as={'button'}
          className='nav-button'>
          Docs
          <Box className='nav-button-active-line'></Box>
        </Box>
        <Box
          as={'button'}
          className='nav-button'>
          Community
          <Box className='nav-button-active-line'></Box>
          <Box className='nav-button-menu'>
            <Link
              className='nav-button-menu-item'
              to={TWITTER_URL}>
              Twitter
              <Image
                className='menu-right-arr'
                src={RightArr}
              />
            </Link>
            <Link
              className='nav-button-menu-item'
              to={DISCORD_URL}>
              Discord
              <Image
                className='menu-right-arr'
                src={RightArr}
              />
            </Link>
            <Link
              className='nav-button-menu-item'
              to={LINKEDIN_URL}>
              LinkedIn
              <Image
                className='menu-right-arr'
                src={RightArr}
              />
            </Link>
            <Link
              className='nav-button-menu-item'
              to={MEDIUM_URL}>
              Medium
              <Image
                className='menu-right-arr'
                src={RightArr}
              />
            </Link>
          </Box>
        </Box>
      </Box>
      <Spacer />
      <Image
        h={'25px'}
        w={'127px'}
        src={Logo}
        opacity={0}
      />
    </Flex>
  )
}

export default NewVersionHeader
