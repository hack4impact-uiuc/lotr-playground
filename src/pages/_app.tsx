import { type AppType } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { api } from '../utils/api';

import '../styles/globals.css';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c',
    },
  },
});

const LOTRApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default api.withTRPC(LOTRApp);
