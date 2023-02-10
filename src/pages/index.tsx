import { Center, Heading, useDisclosure, VStack } from '@chakra-ui/react';
import { type NextPage } from 'next';
import AddCharacterForm from '../components/AddCharacterForm';
import ButtonComp from '../components/Button';

import { api } from '../utils/api';

const Home: NextPage = () => {
  const hello = api.characterRouter.hello.useQuery({ name: 'Meraki' });
  const count = api.characterRouter.count.useQuery();

  return (
    <Center minH={'100vh'}>
      <VStack spacing={5}>
        <Heading as="h1" size="2xl">
          {hello.data?.greeting}
        </Heading>
        <Heading as="h2" size="md">
          There are {count?.data ?? 0} characters in the DB.
        </Heading>
        <AddCharacterForm />
      </VStack>
    </Center>
  );
};

export default Home;
