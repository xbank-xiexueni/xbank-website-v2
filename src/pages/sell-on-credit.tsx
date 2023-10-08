import {
  Box,
  Text,
  Container,
  Flex,
  BoxProps,
  useToast,
} from '@chakra-ui/react';
import React from 'react';

import StepGuide from '../components/step-guide/StepGuide';
import ColorShadow from '../components/ColorShadow';
import Comparison from '../components/comparison/Comparison';
import DiscoverMore from '../components/discover-more/DiscoverMore';
import StarSky from '../components/StarSky';
import NewVersionHeader from '../components/NewVersionHeader';
import NewVersionFooter from '../components/NewVersionFooter';
import BgVideo from '../components/BgVideo';
// import VideoSun from '../images/su'

const WYH_DATA = [
  {
    title: 'Helps Boost Sales',
    description:
      'Offering installment options can lower the entry barriers and boost sales of your NFTs',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='89'
        height='89'
        viewBox='0 0 89 89'
        fill='none'
      >
        <path
          d='M19.5 27.5H73.5V63.5C73.5 67.366 70.366 70.5 66.5 70.5H26.5C22.634 70.5 19.5 67.366 19.5 63.5V27.5Z'
          fill='url(#paint0_linear_2039_12888)'
          fillOpacity='0.24'
        />
        <path
          d='M19.5 59.7L19.5 63.3C19.5 65.2096 20.2585 67.0409 21.6089 68.3912C22.9591 69.7414 24.7904 70.5 26.7 70.5L66.3 70.5C68.2096 70.5 70.0409 69.7414 71.3912 68.3912C72.7414 67.0409 73.5 65.2096 73.5 63.3L73.5 23.7C73.5 21.7904 72.7414 19.9591 71.3912 18.6089C70.0409 17.2585 68.2096 16.5 66.3 16.5L26.7 16.5C24.7904 16.5 22.9591 17.2585 21.6089 18.6089C20.2585 19.9591 19.5 21.7904 19.5 23.7L19.5 27.3'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.4'
          d='M19.5 52.5L19.5 34.5'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M53.1673 42.8334C49.4854 42.8334 46.5006 39.8486 46.5006 36.1667C46.5006 32.4848 49.4854 29.5 53.1673 29.5C56.8492 29.5 59.834 32.4848 59.834 36.1667C59.834 39.8486 56.8492 42.8334 53.1673 42.8334Z'
          stroke='white'
          strokeWidth='1.33333'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M56.888 44.3035L54.6645 44.9472C54.6584 45.0153 54.6584 45.0839 54.6645 45.152C54.6763 45.9059 54.4441 46.6429 54.0035 47.2504C53.5629 47.858 52.9381 48.3028 52.2247 48.5167C51.4795 48.7136 50.7223 48.8603 49.958 48.9556C48.4809 49.1803 46.9904 49.3025 45.4969 49.3213H43.5623C43.3402 49.3377 43.1192 49.2772 42.9356 49.1496C42.752 49.022 42.6166 48.8349 42.5517 48.6192C42.4992 48.4597 42.4862 48.2899 42.5139 48.1243C42.5416 47.9585 42.609 47.8024 42.7103 47.6695C42.8116 47.5364 42.9436 47.4308 43.0947 47.3616C43.2458 47.2925 43.4113 47.2623 43.5767 47.2732C45.4487 47.2832 47.3195 47.1756 49.1784 46.9513C49.9869 46.8344 50.7953 46.688 51.5749 46.5125C51.9112 46.4028 52.1991 46.1776 52.3888 45.8757C52.5785 45.574 52.6584 45.2145 52.6145 44.8593C52.5575 44.5229 52.3944 44.2143 52.1497 43.9794C51.9051 43.7448 51.592 43.5966 51.2573 43.5573L46.6952 43.294L42.364 43.06C41.3359 42.976 40.3121 43.2665 39.4765 43.8792L31.0163 50.1991C30.7827 50.358 30.6136 50.5969 30.5398 50.872C30.4832 51.0863 30.487 51.3121 30.5508 51.5243C30.6146 51.7363 30.7359 51.926 30.9008 52.0716L35.4052 56.797C35.507 56.9255 35.6335 57.0318 35.7771 57.1092C35.9207 57.1866 36.0783 57.2335 36.2404 57.2472C36.4025 57.261 36.5657 57.2411 36.7199 57.1888C36.8742 57.1366 37.0163 57.053 37.1377 56.9432C37.3368 56.7919 37.5377 56.644 37.7379 56.4967C38.1183 56.2167 38.4963 55.9384 38.8557 55.6412C39.1014 55.4345 39.3904 55.2876 39.7006 55.2116C40.0109 55.1355 40.3343 55.1324 40.646 55.2024C41.3212 55.3055 42.0438 55.3845 42.7227 55.4588C43.1035 55.5005 43.4705 55.5407 43.8077 55.5827C44.1148 55.6209 44.4217 55.6561 44.7283 55.6912C45.3587 55.7635 45.9868 55.8353 46.6085 55.9339C47.3349 56.0563 48.0783 56.0273 48.7932 55.8488C49.5081 55.6701 50.1796 55.3457 50.7665 54.8951L61.71 46.6296C61.9799 46.4487 62.1955 46.1961 62.3329 45.8993C62.4705 45.6025 62.5247 45.2731 62.4896 44.9472C62.4684 44.6911 62.3937 44.4424 62.2705 44.2178C62.1475 43.9932 61.9785 43.7976 61.7752 43.644C61.5717 43.4905 61.3385 43.3825 61.0908 43.3272C60.8432 43.2718 60.5867 43.2705 60.3384 43.3233C59.6033 43.5188 58.8683 43.7321 58.1369 43.9444C57.7191 44.0656 57.3025 44.1865 56.888 44.3035Z'
          stroke='white'
          strokeWidth='1.33333'
        />
        <defs>
          <linearGradient
            id='paint0_linear_2039_12888'
            x1='46.5'
            y1='27.5'
            x2='46.5'
            y2='70.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Early Audience Adoption',
    description:
      'Offering credit options can attract early audiences, including potential buyers who might not have had the means to make a full upfront payment.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='89'
        height='89'
        viewBox='0 0 89 89'
        fill='none'
      >
        <path
          opacity='0.4'
          d='M49.9961 22.7748L49.21 25.3113'
          stroke='white'
          strokeWidth='1.32778'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M58.9923 28.3577L57.0063 30.1499M64 37.5413L61.3464 38.1089M63.6757 47.8664L61.0652 47.0574M26.8486 45.4889L24.195 46.0565M27.1298 36.5404L24.5193 35.7314'
          stroke='white'
          strokeWidth='1.32778'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.4'
          d='M31.9598 29.0013L30.0922 27.0324M40.0401 24.8915L39.4156 22.2903'
          stroke='white'
          strokeWidth='1.32778'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M35.4102 56.5405L42.8964 59.2653L38.3551 71.7424L35.4102 68.4906L30.8689 69.0177L35.4102 56.5405Z'
          fill='white'
          fillOpacity='0.4'
        />
        <path
          d='M52.9629 56.5405L45.4767 59.2653L50.0179 71.7424L52.9629 68.4906L57.5042 69.0177L52.9629 56.5405Z'
          fill='white'
          fillOpacity='0.4'
        />
        <path
          d='M43.6405 36.8505C43.7995 36.3612 44.4918 36.3612 44.6508 36.8505L46.4112 42.2687C46.4823 42.4876 46.6863 42.6357 46.9164 42.6357H52.6134C53.1279 42.6357 53.3418 43.2941 52.9256 43.5965L48.3166 46.9452C48.1304 47.0804 48.0525 47.3202 48.1236 47.539L49.8841 52.9572C50.0431 53.4465 49.483 53.8534 49.0668 53.551L44.4578 50.2024C44.2717 50.0671 44.0196 50.0671 43.8335 50.2024L39.2245 53.551C38.8082 53.8534 38.2482 53.4466 38.4072 52.9572L40.1677 47.539C40.2388 47.3202 40.1609 47.0804 39.9747 46.9452L35.3657 43.5965C34.9495 43.2941 35.1634 42.6357 35.6779 42.6357H41.3749C41.605 42.6357 41.8089 42.4876 41.8801 42.2687L43.6405 36.8505Z'
          fill='white'
          fillOpacity='0.4'
        />
        <mask id='path-7-inside-1_2039_12877' fill='white'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M44.1462 61.8517C52.9459 61.8517 60.0795 54.718 60.0795 45.9182C60.0795 37.1184 52.9459 29.9847 44.1462 29.9847C35.3465 29.9847 28.2129 37.1184 28.2129 45.9182C28.2129 54.718 35.3465 61.8517 44.1462 61.8517ZM44.6508 36.8505C44.4918 36.3612 43.7995 36.3612 43.6405 36.8505L41.8801 42.2687C41.8089 42.4876 41.605 42.6357 41.3749 42.6357H35.6779C35.1634 42.6357 34.9495 43.2941 35.3657 43.5965L39.9747 46.9452C40.1609 47.0804 40.2388 47.3202 40.1677 47.539L38.4072 52.9572C38.2482 53.4466 38.8082 53.8534 39.2245 53.551L43.8335 50.2024C44.0196 50.0671 44.2717 50.0671 44.4578 50.2024L49.0668 53.551C49.483 53.8534 50.0431 53.4465 49.8841 52.9572L48.1236 47.539C48.0525 47.3202 48.1304 47.0804 48.3166 46.9452L52.9256 43.5965C53.3418 43.2941 53.1279 42.6357 52.6134 42.6357H46.9164C46.6863 42.6357 46.4823 42.4876 46.4112 42.2687L44.6508 36.8505Z'
          />
        </mask>
        <path
          d='M43.6405 36.8505L42.3777 36.4402V36.4402L43.6405 36.8505ZM44.6508 36.8505L45.9136 36.4402V36.4402L44.6508 36.8505ZM41.8801 42.2687L43.1428 42.679L41.8801 42.2687ZM35.3657 43.5965L34.5853 44.6707L35.3657 43.5965ZM39.9747 46.9452L40.7552 45.871L40.7552 45.871L39.9747 46.9452ZM40.1677 47.539L38.9049 47.1287L38.9049 47.1287L40.1677 47.539ZM38.4072 52.9572L39.67 53.3675V53.3675L38.4072 52.9572ZM39.2245 53.551L38.444 52.4768H38.444L39.2245 53.551ZM43.8335 50.2024L43.053 49.1282L43.053 49.1282L43.8335 50.2024ZM44.4578 50.2024L45.2383 49.1282L45.2383 49.1282L44.4578 50.2024ZM49.0668 53.551L48.2863 54.6252V54.6252L49.0668 53.551ZM49.8841 52.9572L48.6213 53.3675V53.3675L49.8841 52.9572ZM48.1236 47.539L49.3864 47.1287L49.3864 47.1287L48.1236 47.539ZM48.3166 46.9452L49.097 48.0194L49.097 48.0194L48.3166 46.9452ZM52.9256 43.5965L52.1451 42.5223L52.1451 42.5223L52.9256 43.5965ZM46.4112 42.2687L45.1484 42.679V42.679L46.4112 42.2687ZM58.7517 45.9182C58.7517 53.9847 52.2126 60.5239 44.1462 60.5239V63.1794C53.6792 63.1794 61.4073 55.4513 61.4073 45.9182H58.7517ZM44.1462 31.3125C52.2126 31.3125 58.7517 37.8517 58.7517 45.9182H61.4073C61.4073 36.3851 53.6792 28.657 44.1462 28.657V31.3125ZM29.5407 45.9182C29.5407 37.8517 36.0798 31.3125 44.1462 31.3125V28.657C34.6131 28.657 26.8851 36.3851 26.8851 45.9182H29.5407ZM44.1462 60.5239C36.0798 60.5239 29.5407 53.9847 29.5407 45.9182H26.8851C26.8851 55.4513 34.6131 63.1794 44.1462 63.1794V60.5239ZM44.9033 37.2608C44.6648 37.9948 43.6264 37.9948 43.388 37.2608L45.9136 36.4402C45.3571 34.7276 42.9342 34.7276 42.3777 36.4402L44.9033 37.2608ZM43.1428 42.679L44.9033 37.2608L42.3777 36.4402L40.6173 41.8584L43.1428 42.679ZM41.3749 43.9635C42.1803 43.9635 42.894 43.445 43.1428 42.679L40.6173 41.8584C40.7239 41.5302 41.0298 41.3079 41.3749 41.3079V43.9635ZM35.6779 43.9635H41.3749V41.3079H35.6779V43.9635ZM36.1462 42.5223C36.7705 42.976 36.4497 43.9635 35.6779 43.9635V41.3079C33.8772 41.3079 33.1284 43.6123 34.5853 44.6707L36.1462 42.5223ZM40.7552 45.871L36.1462 42.5223L34.5853 44.6707L39.1943 48.0194L40.7552 45.871ZM41.4305 47.9493C41.6793 47.1834 41.4067 46.3443 40.7552 45.871L39.1943 48.0194C38.9151 47.8165 38.7982 47.4569 38.9049 47.1287L41.4305 47.9493ZM39.67 53.3675L41.4305 47.9493L38.9049 47.1287L37.1444 52.5469L39.67 53.3675ZM38.444 52.4768C39.0684 52.0232 39.9085 52.6336 39.67 53.3675L37.1444 52.5469C36.5879 54.2595 38.5481 55.6837 40.0049 54.6252L38.444 52.4768ZM43.053 49.1282L38.444 52.4768L40.0049 54.6252L44.6139 51.2766L43.053 49.1282ZM45.2383 49.1282C44.5868 48.6548 43.7045 48.6548 43.053 49.1282L44.6139 51.2766C44.3347 51.4794 43.9566 51.4794 43.6774 51.2766L45.2383 49.1282ZM49.8473 52.4768L45.2383 49.1282L43.6774 51.2766L48.2863 54.6252L49.8473 52.4768ZM48.6213 53.3675C48.3828 52.6336 49.2229 52.0232 49.8473 52.4768L48.2863 54.6252C49.7432 55.6837 51.7034 54.2595 51.1469 52.5469L48.6213 53.3675ZM46.8608 47.9493L48.6213 53.3675L51.1469 52.5469L49.3864 47.1287L46.8608 47.9493ZM47.5361 45.871C46.8846 46.3443 46.612 47.1834 46.8608 47.9493L49.3864 47.1287C49.4931 47.4569 49.3762 47.8165 49.097 48.0194L47.5361 45.871ZM52.1451 42.5223L47.5361 45.871L49.097 48.0194L53.706 44.6707L52.1451 42.5223ZM52.6134 43.9635C51.8416 43.9635 51.5207 42.976 52.1451 42.5223L53.706 44.6707C55.1628 43.6123 54.4141 41.3079 52.6134 41.3079V43.9635ZM46.9164 43.9635H52.6134V41.3079H46.9164V43.9635ZM45.1484 42.679C45.3973 43.445 46.111 43.9635 46.9164 43.9635V41.3079C47.2615 41.3079 47.5674 41.5302 47.674 41.8584L45.1484 42.679ZM43.388 37.2608L45.1484 42.679L47.674 41.8584L45.9136 36.4402L43.388 37.2608Z'
          fill='white'
          mask='url(#path-7-inside-1_2039_12877)'
        />
      </svg>
    ),
  },
  {
    title: 'Increase the secondary market value',
    description:
      'Implementing Sell on Credit can expand accessibility, drive demand, and foster community engagement, all of which synergistically contribute to elevating the secondary market value of your NFTs.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='89'
        height='89'
        viewBox='0 0 89 89'
        fill='none'
      >
        <path
          d='M19.5 27.5H73.5V63.5C73.5 67.366 70.366 70.5 66.5 70.5H26.5C22.634 70.5 19.5 67.366 19.5 63.5V27.5Z'
          fill='url(#paint0_linear_2039_12869)'
          fillOpacity='0.24'
        />
        <path
          d='M19.5 59.7L19.5 63.3C19.5 65.2096 20.2585 67.0409 21.6089 68.3912C22.9591 69.7414 24.7904 70.5 26.7 70.5L66.3 70.5C68.2096 70.5 70.0409 69.7414 71.3912 68.3912C72.7414 67.0409 73.5 65.2096 73.5 63.3L73.5 23.7C73.5 21.7904 72.7414 19.9591 71.3912 18.6089C70.0409 17.2585 68.2096 16.5 66.3 16.5L26.7 16.5C24.7904 16.5 22.9591 17.2585 21.6089 18.6089C20.2585 19.9591 19.5 21.7904 19.5 23.7L19.5 27.3'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.4'
          d='M19.5 52.5L19.5 34.5'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <line
          x1='24.3145'
          y1='59.5'
          x2='36.3145'
          y2='59.5'
          stroke='white'
          strokeWidth='4'
        />
        <path
          d='M29.6822 51.4245C29.3644 51.8762 29.4728 52.5 29.9245 52.8178C30.3762 53.1356 31 53.0272 31.3178 52.5755L29.6822 51.4245ZM40 38.5L40.771 37.8631C40.5724 37.6227 40.273 37.4887 39.9614 37.5007C39.6498 37.5128 39.3616 37.6695 39.1822 37.9245L40 38.5ZM49.5 50L48.729 50.6369C48.9173 50.8647 49.1966 50.9976 49.4921 51C49.7876 51.0023 50.0691 50.8738 50.2608 50.6489L49.5 50ZM64.9969 32.9209C64.9532 32.3703 64.4714 31.9594 63.9209 32.0031L54.9491 32.7152C54.3985 32.7589 53.9877 33.2406 54.0313 33.7912C54.075 34.3417 54.5568 34.7526 55.1073 34.7089L63.0823 34.076L63.7152 42.0509C63.7589 42.6015 64.2406 43.0123 64.7912 42.9687C65.3417 42.925 65.7526 42.4432 65.7089 41.8927L64.9969 32.9209ZM31.3178 52.5755L40.8178 39.0755L39.1822 37.9245L29.6822 51.4245L31.3178 52.5755ZM39.229 39.1369L48.729 50.6369L50.271 49.3631L40.771 37.8631L39.229 39.1369ZM50.2608 50.6489L64.7608 33.6489L63.2392 32.3511L48.7392 49.3511L50.2608 50.6489Z'
          fill='white'
        />
        <defs>
          <linearGradient
            id='paint0_linear_2039_12869'
            x1='46.5'
            y1='27.5'
            x2='46.5'
            y2='70.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export const Icon = (p: BoxProps) => (
  <Box pos={'absolute'} {...p}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.0527 1.60396C20.0527 0.750797 19.4108 0.0250873 18.5579 0.00493904C16.4238 -0.0454731 14.2733 0.299285 12.2019 1.04394C4.53579 3.79985 -0.0243829 11.3659 0.801518 19.0183C0.914174 20.0621 1.9985 20.6516 2.98647 20.2964C3.80156 20.0034 4.26715 19.1583 4.19689 18.295C3.72024 12.438 7.16127 6.65145 12.9647 4.3754C14.6397 3.71735 16.3888 3.39205 18.13 3.39527C19.1484 3.39715 20.0527 2.62237 20.0527 1.60396Z'
        fill='url(#paint0_linear_2031_13435)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_2031_13435'
          x1='0.705078'
          y1='19.9998'
          x2='24.0841'
          y2='-2.65312'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#76EED8' />
          <stop offset='0.118756' stopColor='#76EE99' />
          <stop offset='0.291667' stopColor='#4891FF' />
          <stop offset='0.452857' stopColor='#CB37FF' />
          <stop offset='0.642525' stopColor='#EF76B6' />
          <stop offset='0.865093' stopColor='#FFD159' />
        </linearGradient>
      </defs>
    </svg>
  </Box>
);
const Index = () => {
  const toast = useToast();
  return (
    <>
      <BgVideo />
      {/* <video
        className='sun-light-video'
        src='/videos/sun.mp4'
        autoPlay={true}
      /> */}
      <StarSky />
      <NewVersionHeader />
      <Container
        color={'white'}
        maxW={{
          // xs: 345,
          sm: 666,
          md: 900,
          lg: 1200,
        }}
        px='0'
        position={'relative'}
        zIndex={3}
      >
        {/* title */}
        <Flex direction={'column'} pt='60px' align={'center'}>
          <Box display={'flex'}>
            <ColorShadow title='Give' />
            <ColorShadow title='your' />
            <ColorShadow title='sales' />
            <ColorShadow title='a' />
            <ColorShadow title='boost' />
            <ColorShadow title='with' />
          </Box>
          <Box display={'flex'}>
            <ColorShadow title='xBank' />
            <ColorShadow title='sell' />
            <ColorShadow title='on' />
            <ColorShadow title='credit' />
          </Box>
          <Box
            position={'relative'}
            // bg='blue'
            pb='60px'
            pt='40px'
          >
            <Text fontSize={'20px'} color={'#E0E0E0'} textAlign={'center'}>
              Provide installment payment services for your NFTs without the
              need for additional liquidity support.
            </Text>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              position={'relative'}
              zIndex={2}
            >
              <Box
                // as='button'
                className='home-btn-launch'
                marginX='10px'
                mt='32px'
              >
                <Icon left={'14px'} top={'6px'} zIndex={3} />
                <Icon
                  bottom={'9px'}
                  right={'10px'}
                  zIndex={3}
                  transform={'rotate(180deg)'}
                />
                <Box className='home-btn-bg' />
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
                    });
                  }}
                >
                  Apply Now
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>

        {/* steps */}
        <StepGuide
          mb='50px'
          data={{
            title: 'Join the xBank Legend Program',
            steps: [
              {
                title: 'Receiving Project Information',
                description: `Understand the project's needs and pain points`,
              },
              {
                title: 'Assessing Qualifications',
                description: `Evaluate needs and plan promotions for qualifying collections`,
              },
              {
                title: 'Drafting Plans',
                description: `Discuss and finalize the marketing plan for the collection`,
              },
              {
                title: 'Preparing the Scheme',
                description: `List and launch the collection in blur/Opensea and pool to the protocol`,
              },
              {
                title: 'Official Launch',
                description: `Start the activity and optimize the marketing path using data analysis`,
              },
            ],
          }}
          boxShadow='0px 0px 0px 9px rgba(255, 255, 255, 0.03) inset'
          border='1px solid rgba(255, 255, 255, 0.10)'
          background='linear-gradient(180deg, #1D1C20 0%, rgba(29, 28, 32, 0.30) 100%)'
        />
        {/* why */}
        <Box mt='104px' mb='25px'>
          <Text
            fontSize={'53px'}
            fontWeight={'900'}
            mb='100px'
            textAlign={'center'}
            fontFamily={'Orbitron'}
            wordBreak={'keep-all'}
          >
            Why Sell on Credit benefits your project
          </Text>

          <Flex gap={'24px'}>
            {WYH_DATA.map(({ title, description, icon }) => (
              <Flex
                gap={'40px'}
                key={title}
                flex={1}
                bg='#1D1C20'
                borderRadius={'24px'}
                border={'1px solid rgba(255, 255, 255, 0.08)'}
                h='400px'
                pt='40px'
                px='32px'
                color={'white'}
                direction={'column'}
              >
                <Flex
                  boxSize={'120px'}
                  bg='linear-gradient(180deg, #242325 0%, #171619 100%)'
                  border={'2px solid #181818'}
                  borderRadius={'12px'}
                  alignItems={'center'}
                  justify={'center'}
                >
                  {icon}
                </Flex>
                <Box>
                  <Text
                    fontSize={'20px'}
                    fontWeight={'600'}
                    lineHeight={'27px'}
                    mb='8px'
                    fontFamily={'HarmonyOS Sans SC'}
                  >
                    {title}
                  </Text>
                  <Text
                    fontSize={'14px'}
                    fontWeight={'400'}
                    lineHeight={'22px'}
                    color={'#A9A9A9'}
                    letterSpacing={'1px'}
                    fontFamily={'HarmonyOS Sans SC'}
                  >
                    {description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Flex>
        </Box>
        {/* comparison */}

        <Comparison
          pb='60px'
          data={{
            title: 'Comparision with Normal Lauchpad',
            items: [
              'Sell on Credit',
              'Normal Lauchpad',
              'Downpayment for buyer',
              'Down to 10%',
              'Full Payment',
              'Early Audience Reach',
              'Wider Community',
              'Narrow Groups',
              'Customer Relationships',
              'Streghthened',
              'Weak',
              'Potential Sales',
              'High',
              'Low',
              'Cost of project owners',
              'Very Low',
              'High',
            ],
          }}
        />

        <DiscoverMore />
      </Container>
      <NewVersionFooter />
    </>
  );
};

export default Index;
