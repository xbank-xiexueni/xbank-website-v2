import { Box } from '@chakra-ui/react';
import React from 'react';

const BtnLaunchApp = () => {
  return (
    <Box className='home-btn-launch' marginX={'10px'}>
      <Box className='home-btn-bg'></Box>
      <Box
        className='home-btn-launch-inner'
        as='button'
        onClick={() => {
          const isBrowser = typeof window !== 'undefined';
          if (!isBrowser) return;
          window.open('https://lending.xbank.plus/market', '_blank');
        }}
      >
        Launch APP
      </Box>
    </Box>
  );
};
export default BtnLaunchApp;
