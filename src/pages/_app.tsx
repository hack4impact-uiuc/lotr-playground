import '@fontsource/inter';
import { type AppType } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { api } from '../utils/api';
import theme from '../styles/theme';

const LOTRApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default api.withTRPC(LOTRApp);
