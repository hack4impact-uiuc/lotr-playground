import {
  Card,
  Center,
  Heading,
  VStack,
  CardBody,
  Image,
  Grid,
} from '@chakra-ui/react';
import { type NextPage } from 'next';

import { api } from '../utils/api';

const Home: NextPage = () => {
  const characters = api.characterRouter.getCharacters.useQuery()?.data;

  return (
    <Center minH={'100vh'} backgroundColor="gray.900">
      <VStack spacing={5}>
        <Grid maxWidth="80%" templateColumns="repeat(3, 5fr)" gap={5}>
          {characters &&
            characters.map((character) => {
              return (
                <a href={`/character/${character.id}`} key={character.name}>
                  <Card width="100%" borderRadius={0}>
                    <CardBody width="100%" margin={0} padding={0}>
                      <Image
                        height={200}
                        width={300}
                        objectFit="cover"
                        src={character.imageUrl}
                        alt={character.name}
                      />
                      <Center
                        bgColor="background"
                        color="white"
                        _hover={{ bg: 'gold', color: 'gray.900' }}
                      >
                        <Heading size="md" margin={5} fontFamily="heading">
                          {' '}
                          {character.name}{' '}
                        </Heading>
                      </Center>
                    </CardBody>
                  </Card>
                </a>
              );
            })}
        </Grid>
      </VStack>
    </Center>
  );
};

export default Home;
