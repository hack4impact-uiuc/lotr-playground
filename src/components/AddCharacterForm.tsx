import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  VStack,
  Input,
  FormControl,
  HStack,
  WrapItem,
  Button,
  ModalCloseButton,
} from '@chakra-ui/react';
import ButtonComp from './Button';

const AddCharacterForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ButtonComp onClick={onOpen} buttonText="Add a character" />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={'gray.800'}>
          <ModalHeader textColor={'white'}>Add a character </ModalHeader>
          <ModalCloseButton color={'white'} />
          <VStack p={4} spacing={4}>
            <FormControl>
              <Input placeholder="Name" textColor={'white'} />
            </FormControl>
            <FormControl>
              <Input placeholder="Gender" textColor={'white'} />
            </FormControl>
            <HStack>
              <FormControl>
                <Input placeholder="Race" textColor={'white'} />
              </FormControl>
              <FormControl>
                <Input placeholder="Realm" textColor={'white'} />
              </FormControl>
            </HStack>
            <FormControl>
              <Input placeholder="Wiki URL" textColor={'white'} />
            </FormControl>
            <FormControl>
              <Input placeholder="Image URL" textColor={'white'} />
            </FormControl>
          </VStack>
          <WrapItem pl={4} pr={4} pb={4}>
            <Button width={'100%'} colorScheme="yellow">
              Submit
            </Button>
          </WrapItem>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCharacterForm;
