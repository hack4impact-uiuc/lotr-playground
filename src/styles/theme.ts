import { theme as defaultTheme, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Inter', ${defaultTheme.fonts.heading}`,
    body: `'Inter', ${defaultTheme.fonts.body}`,
  },
  colors: {
    gold: '#FDBF0E',
    background: '#212121',
  },
});

export default theme;
