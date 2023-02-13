import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter';
import { type AppType } from 'next/app';

import theme from '../styles/theme';
import { api } from '../utils/api';

const LOTRApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default api.withTRPC(LOTRApp);
