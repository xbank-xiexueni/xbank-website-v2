import React, { useEffect, useState } from 'react';
import { Text, Flex, chakra, Box, Image, Skeleton } from '@chakra-ui/react';
import icon from '../../images/collections/icon.png';
import '@/style/global.scss';
import img1 from '../../images/collections/1.png';
import img2 from '../../images/collections/2.png';
import img3 from '../../images/collections/3.png';
import img4 from '../../images/collections/4.png';
import img5 from '../../images/collections/5.png';
import img7 from '../../images/collections/7.png';
import img8 from '../../images/collections/8.png';
import img9 from '../../images/collections/9.png';
import img10 from '../../images/collections/10.png';
import img12 from '../../images/collections/12.png';
import img13 from '../../images/collections/13.png';
import img15 from '../../images/collections/15.png';
import img16 from '../../images/collections/16.png';
import img17 from '../../images/collections/17.png';
import img19 from '../../images/collections/19.png';
import img21 from '../../images/collections/21.png';
import img22 from '../../images/collections/22.png';
import img23 from '../../images/collections/23.png';
import Slider from 'react-slick';

const settings = {
  // dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  variableWidth: true,
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}
const MarketAndCollections = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    timeout(1500).finally(() => {
      setLoading(false);
    });
  });
  return (
    <Box mt='154px'>
      <chakra.h2
        fontSize={'56px'}
        fontWeight={900}
        textAlign={'center'}
        mb='32px'
        fontFamily={'Orbitron'}
      >
        Buy Now, Pay Later With These NFTs
      </chakra.h2>

      {loading ? (
        <Skeleton
          mt={'60px'}
          h={'440px'}
          mx='20px'
          borderRadius={20}
          bg='bg.gray'
        />
      ) : (
        <Flex
          flexDir={'column'}
          rowGap={'16px'}
          columnGap={'30px'}
          mt={'60px'}
          // maxH={'500px'}
          position={'relative'}
          bg='#1D1C20'
          py='40px'
          overflow={'hidden'}
          borderRadius={'24px'}
        >
          <Box
            pos={'absolute'}
            right={'-75px'}
            zIndex={2}
            w={'225px'}
            h='500px'
            bg='linear-gradient(90deg, rgba(29, 28, 32, 0.00) 20%, #1D1C20 45%, #1D1C20 81.47%)'
          />
          <Box
            pos={'absolute'}
            left={'-90px'}
            zIndex={2}
            w={'225px'}
            h='500px'
            transform={'rotate(180deg)'}
            background='linear-gradient(90deg, rgba(29, 28, 32, 0.00) 20%, #1D1C20 45%, #1D1C20 81.47%)'
          />
          {[
            [
              img1,
              img2,
              img3,
              img4,
              img5,
              img19,
              img7,
              img8,
              img9,
              img10,
              img19,
              img12,
              img13,
              img19,
            ],
            [
              img10,
              img19,
              img12,
              img13,
              img19,
              img15,
              img16,
              img17,
              img19,
              img21,
              img22,
              img19,
            ],
            [
              img19,
              img21,
              img22,
              img23,
              img1,
              img2,
              img19,
              img3,
              img4,
              img5,
              img19,
              img7,
              img8,
              img9,
              img10,
            ],
          ].map((arr, index) => (
            <Slider
              {...settings}
              // className='d-inline-block'
              key={index}
              rtl={index === 1}
            >
              {arr.map((item) => (
                <Box key={item} boxSize={'120px'} mr={'16px'}>
                  <Image
                    src={item}
                    boxSize={'120px'}
                    alt='collections'
                    // loading='lazy'
                  />
                </Box>
              ))}
            </Slider>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default MarketAndCollections;
