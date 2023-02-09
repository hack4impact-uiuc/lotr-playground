import { Center, Heading, VStack } from '@chakra-ui/react';
import { type NextPage } from 'next';
import { useState } from 'react';
import BasicUsage from '../components/AddCharacterForm';
import ButtonComp from '../components/Button';

import { api } from '../utils/api';

const Home: NextPage = () => {
  const [modal, setModal] = useState(false);

  const hello = api.characterRouter.hello.useQuery({ name: 'Meraki' });
  const count = api.characterRouter.count.useQuery();

  const handleToggleModal = (): void => {
    setModal(!modal);
  };

  return (
    <Center minH={'100vh'}>
      <VStack spacing={5}>
        <Heading as="h1" size="2xl">
          {hello.data?.greeting}
        </Heading>
        <Heading as="h2" size="md">
          There are {count?.data ?? 0} characters in the DB.
        </Heading>
        <ButtonComp
          onClick={() => {
            alert('hello');
          }}
          buttonText={'Add Character'}
        />
        <BasicUsage />
      </VStack>
    </Center>
  );
};

export default Home;
