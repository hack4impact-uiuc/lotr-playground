import { useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  VStack,
  HStack,
  WrapItem,
  ModalCloseButton,
} from '@chakra-ui/react';
import ButtonTemp from './Button';
import FormInput from './FormInput';

const AddCharacterForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [race, setRace] = useState('');
  const [realm, setRealm] = useState('');
  const [wikiUrl, setWikiUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  return (
    <>
      <ButtonTemp onClick={onOpen} buttonText="Add a Character" />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalHeader textColor="white">Add a Character</ModalHeader>
          <ModalCloseButton color="white" />
          <VStack p={4} spacing={4}>
            <FormInput placeholder="Name" value={name} setValue={setName} />
            <FormInput
              placeholder="Gender"
              value={gender}
              setValue={setGender}
            />
            <HStack>
              <FormInput placeholder="Race" value={race} setValue={setRace} />
              <FormInput
                placeholder="Realm"
                value={realm}
                setValue={setRealm}
              />
            </HStack>
            <FormInput
              placeholder="Wiki URL"
              value={wikiUrl}
              setValue={setWikiUrl}
            />
            <FormInput
              placeholder="Image URL"
              value={imageUrl}
              setValue={setImageUrl}
            />
          </VStack>
          <WrapItem pl={4} pr={4} pb={4}>
            <ButtonTemp
              onClick={() => {
                alert('Submitted');
              }}
              buttonText="Submit"
            />
          </WrapItem>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCharacterForm;
