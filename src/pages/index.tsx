import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  VStack,
} from '@chakra-ui/react';
import { type NextPage } from 'next';
import AddCharacterForm from '../components/AddCharacterForm';

import SearchBar from '../components/SearchBar';
import { api } from '../utils/api';

const Home: NextPage = () => {
  const characters = api.characterRouter.getCharacters.useQuery()?.data;

  return (
    <Center minH="100vh" bgColor="#131616">
      <Image
        top={0}
        linear-gradient="(135deg, #50A68480 30%, #115E6780 90%)"
        w="100%"
        position="absolute"
        src="/wallpaperflare-cropped 1.png"
        alt="Lord of the Rings Wallpaper"
      />
      <Box
        w="100%"
        h="700px"
        position="absolute"
        top="247px"
        bg="linear-gradient(180deg, rgba(10, 13, 14, 0) 0%, #131617 31.77%)"
      />
      <VStack spacing={5} w="45%" pt="5%" pb="5%">
        <Image
          position="relative"
          w="45%"
          src="/lord-of-the-rings-png-title-logo-1.png"
          alt="Lord of the Rings Logo"
        />
        <Flex direction="row" justify="flex-end" w="100%">
          <Button bgColor="gold" color="black" borderRadius={0}>
            Add Character
          </Button>
        </Flex>
        <SearchBar />
        <AddCharacterForm />
        <Grid templateColumns="repeat(3, 5fr)" gap={5}>
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
