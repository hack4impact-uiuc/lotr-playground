import Image from 'next/image';
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
} from '@chakra-ui/react';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  // https://trpc.io/docs/nextjs#6-make-an-api-request
  const characterRequest = api.characterRouter.getCharacter.useQuery({
    id: id ? +id : 0,
  });

  // const allCharacters = api.characterRouter.getAllCharacters.useQuery();

  // console.log(characterRequest.data);
  const characterInfo = characterRequest.data;

  return (
    <div style={{ display: 'flex' }}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        bg="black"
        borderRadius="0"
      >
        <Stack>
          <CardBody>
            <Heading size="md" color="white">
              {characterInfo?.name}
            </Heading>

            <Heading size="sm" color="white">
              General Information
            </Heading>
            <Card
              direction={{ base: 'column' }}
              overflow="hidden"
              variant="outline"
              backgroundColor="rgba(0, 0, 0, 0.80)"
              border="none"
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
            </Card>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="yellow" borderRadius="0">
              Edit Character
            </Button>
          </CardFooter>
        </Stack>
        {characterInfo && (
          <Image
            src={characterInfo.imageUrl}
            alt={`Picture of ${characterInfo.name}`}
            width={300}
            height={400}
          />
        )}
      </Card>
    </div>
  );
};

export default Post;
