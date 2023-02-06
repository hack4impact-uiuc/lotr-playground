import { Center, Heading } from '@chakra-ui/react';
import type { Character } from '@prisma/client';

const Card = ({ character }: { character: Character }) => {
  return (
    <Center>
      <Heading>{character.name}</Heading>
    </Center>
  );
};

export default Card;
