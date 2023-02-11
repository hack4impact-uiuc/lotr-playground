import { Button } from '@chakra-ui/react';

interface ButtonProps {
  onClick: () => void;
  buttonText: string;
}

const ButtonTemp = ({ onClick, buttonText }: ButtonProps) => {
  return (
    <Button
      borderRadius={0}
      size={'lg'}
      width={'100%'}
      colorScheme="yellow"
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonTemp;
