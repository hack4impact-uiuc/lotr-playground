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

  return (
    <>
      <ButtonTemp onClick={onOpen} buttonText="Add a Character" />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalHeader textColor="white">Add a Character</ModalHeader>
          <ModalCloseButton color="white" />
          <VStack p={4} spacing={4}>
            <FormInput placeholder="Name" />
            <FormInput placeholder="Gender" />
            <HStack>
              <FormInput placeholder="Race" />
              <FormInput placeholder="Realm" />
            </HStack>
            <FormInput placeholder="Wiki URL" />
            <FormInput placeholder="Image URL" />
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
