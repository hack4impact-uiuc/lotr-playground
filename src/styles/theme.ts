import { extendTheme } from '@chakra-ui/react';
import { Inter } from '@next/font/google';

export const inter = Inter({ subsets: ['latin'] });

const theme = extendTheme({
  colors: {
    gold: '#FDBF0E',
  },
  styles: {
    global: {
      'html, body': inter.style,
    },
  },
});

export default theme;
