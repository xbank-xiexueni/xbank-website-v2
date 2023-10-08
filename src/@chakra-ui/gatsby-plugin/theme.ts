import { extendTheme } from '@chakra-ui/react';

// const breakpoints = {
//   xs: '345px',
//   sm: '668px',
//   md: '968px',
//   lg: '1200px',
//   xl: '1400px',
//   '2xl': '1920px',
// };

// const theme = {
//   colors: {
//     primary: '#0000FF',
//     secondary: '#E802E5',
//     // 提示文字
//     font: {
//       primary: '#00000F',
//       tip: '#566E8C',
//       secondary: '#524C4C',
//       extra: '#B5C4D7',
//     },
//     bg: {
//       gray: '#F2F5FA',
//     },
//     border: {
//       1: '#EFF4FB',
//       2: '#B3B3FF',
//       3: '#EBEBFF',
//     },
//   },
//   styles: {
//     global: {
//       'html, body': {
//         'background-color': '#000000',
//         // color: 'font.primary',
//         fontFamily: 'HarmonyOS',
//         fontSize: {
//           md: '16px',
//           sm: '14px',
//           xs: '14px',
//         },
//       },
//     },
//   },
//   breakpoints,
//   fonts: {
//     // body: 'HarmonyOS',
//     // heading: 'HarmonyOS',
//     // mono: 'HarmonyOS',
//   },
//   components: {
//     Button: {
//       variants: {
//         primary: {
//           // 这么写是为了 hover over 不会突变
//           bg: 'primary',
//           color: 'white',
//           fontSize: { md: '24px', sm: '18px', xs: '16px' },
//           fontFamily: 'HarmonyOS-medium',
//           borderRadius: { md: '50px', sm: '46px', xs: '40px' },
//           h: {
//             md: '68px',
//             sm: '56px',
//             xs: '48px',
//           },
//           _disabled: {
//             bg: 'font.tip',
//             opacity: 1,
//           },
//           _hover: {
//             bg: 'primary',
//             _disabled: {
//               bg: 'font.tip',
//               opacity: 1,
//             },
//             opacity: 0.8,
//           },

//           _loading: {
//             color: 'font.tip',
//           },
//         },
//       },
//     },
//   },
// };

// export default extendTheme(theme);

const theme = {
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#00000F',
        fontFamily: 'HarmonyOS Sans SC',
        fontSize: {
          md: '16px',
          sm: '14px',
          xs: '14px',
        },
      },
    },
  },
};
export default extendTheme(theme);
