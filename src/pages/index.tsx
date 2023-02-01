import { Center, Heading, VStack } from '@chakra-ui/react';
import { type NextPage } from 'next';

import { api } from '../utils/api';

const Home: NextPage = () => {
  const hello = api.characterRouter.hello.useQuery({ name: 'Meraki' });
  const characters = api.characterRouter.getAll.useQuery();

  return (
    <Center minH={'100vh'}>
      <VStack spacing={5}>
        <Heading as="h1" size="2xl">
          {hello.data?.greeting}
        </Heading>
        <Heading as="h2" size="md">
          There are {characters?.data?.length ?? 0} characters in the DB.
        </Heading>
      </VStack>
    </Center>
  );
};

export default Home;
