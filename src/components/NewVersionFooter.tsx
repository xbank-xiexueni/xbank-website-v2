import { Box, Container, HStack, Img, Link, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../images/svg/logo.svg'
import Email from '../images/svg/email.svg'
import Egg from '../images/svg/egg2.svg'
import FooterEarth from '../images/footer-earth.png'
const NewVersionFooter = () => {
  return (
    <>
      <Container
        p={0}
        maxW={{
          sm: 666,
          md: 900,
          lg: 1200,
        }}>
        <Box
          position={'relative'}
          color={'#FFFFFF'}
          width={'100%'}
          display={'flex'}
          flexDir={'column'}
          paddingY={'54px'}>
          <Img
            src={FooterEarth}
            className='footer-earth'
          />
          <Box
            paddingBottom={'20px'}
            className='zIndex2'
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Box
              display={'flex'}
              flexDir={'column'}>
              <Img
                src={Logo}
                mb={'20px'}
              />
              <HStack>
                <Img src={Email} />
                <Text>
                  <Box
                    as='button'
                    onClick={() => {
                      const isBrowser = typeof window !== 'undefined'
                      if (!isBrowser) return
                      window.open('mailto:help@xbank.plus')
                    }}>
                    help@xbank.plus
                  </Box>
                </Text>
              </HStack>
              <Text>Lending is risky, investment requires caution.</Text>
            </Box>
            <Box display={'flex'}>
              <Img src={Egg} />
            </Box>
          </Box>
          <Box
            paddingY={'25px'}
            className='zIndex2'
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            borderTop={'1px solid rgba(255, 255, 255, 0.2)'}>
            <Box>
              <Text>2023 © All Rights Reserved</Text>
            </Box>
            <Box>
              <Link
                fontSize={'12px'}
                fontWeight={400}
                color={'#FFFFFF'}
                opacity={0.5}
                mr='44px'
                href='https://xbank.plus/terms-of-service/en'
                target='_blank'>
                Terms of Services
              </Link>
              <Link
                fontSize={'12px'}
                fontWeight={400}
                color={'#FFFFFF'}
                opacity={0.5}
                href='https://xbank.plus/privacy-policy/en'
                target='_blank'>
                Private Policy
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}
export default NewVersionFooter
