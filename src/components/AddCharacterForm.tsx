import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@chakra-ui/react';
import ButtonComp from './Button';

const AddCharacterForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ButtonComp onClick={onOpen} buttonText="Add a character" />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a character</ModalHeader>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCharacterForm;
