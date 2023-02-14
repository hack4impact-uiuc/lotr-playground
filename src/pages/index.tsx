import {
  Card,
  CardBody,
  Center,
  Grid,
  Heading,
  Image,
  VStack,
} from '@chakra-ui/react';
import { type NextPage } from 'next';
import AddCharacterForm from '../components/AddCharacterForm';


import { api } from '../utils/api';

const Home: NextPage = () => {
  const characters = api.characterRouter.getCharacters.useQuery()?.data;  

  return (
    <Center minH="100vh" backgroundColor="gray.900">
      <VStack spacing={5}>
        <AddCharacterForm />
        <Grid maxW="80%" templateColumns="repeat(3, 5fr)" gap={5}>
          {characters &&
            characters.map((character) => {
              return (
                <a href={`/character/${character.id}`} key={character.name}>
                  <Card w="100%" borderRadius={0}>
                    <CardBody w="100%" m={0} p={0}>
                      <Image
                        h={200}
                        w={300}
                        objectFit="cover"
                        src={character.imageUrl}
                        alt={character.name}
                      />
                      <Center
                        bgColor="background"
                        color="white"
                        _hover={{ bg: 'gold', color: 'gray.900' }}
                      >
                        <Heading size="md" m={5} fontFamily="heading">
                          {character.name}
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
