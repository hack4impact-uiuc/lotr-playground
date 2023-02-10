import { useRouter } from 'next/router';
import { api } from '../../utils/api';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Flex,
  Center,
  Image,
  AspectRatio,
} from '@chakra-ui/react';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  // https://trpc.io/docs/nextjs#6-make-an-api-request
  const characterRequest = api.characterRouter.getCharacter.useQuery({
    id: id ? +id : 0,
  });

  const characterInfo = characterRequest.data;

  return (
    <Box w="100%" h="100vh" bg="black">
      <Center pb={4}>
        <Image src="/LordOfRingLogo.png" alt="Logo" width="300px" />
      </Center>
      <Center>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          bg="black"
          borderRadius="0"
          border="none"
        >
          <Stack>
            <CardBody>
              <Heading color="white" py={2} size="lg">
                {characterInfo?.name}
              </Heading>

              <Heading size="sm" color="white" py={2}>
                General Information
              </Heading>
              <Box
                overflow="hidden"
                backgroundColor="gray.900"
                border="none"
                borderRadius="none"
                p={3}
                mb={3}
              >
                <Text py="1" color="white">
                  Gender: {characterInfo?.gender}
                </Text>
                <Text py="1" color="white">
                  Race: {characterInfo?.race}
                </Text>
                <Text py="1" color="white">
                  Realm: {characterInfo?.realm}
                </Text>
              </Box>

              <Heading size="sm" color="white" py={2}>
                Wiki URL
              </Heading>
              <Box
                overflow="hidden"
                backgroundColor="gray.900"
                border="none"
                borderRadius="none"
                p={2}
              >
                <Text color="white">{characterInfo?.wikiUrl}</Text>
              </Box>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="yellow" borderRadius="0">
                Edit Character
              </Button>
            </CardFooter>
          </Stack>
          {characterInfo && (
            <Center boxSize="sm">
              <AspectRatio maxH="350px" ratio={3 / 4} flex="1 1 auto">
                <Image
                  src={characterInfo.imageUrl}
                  alt={`Picture of ${characterInfo.name}`}
                  objectFit="cover"
                />
              </AspectRatio>
            </Center>
          )}
        </Card>
      </Center>
    </Box>
  );
};

export default Post;
