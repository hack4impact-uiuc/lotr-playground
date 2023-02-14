import { Button as DefaultButton } from '@chakra-ui/react';

interface ButtonProps {
  onClick: () => void;
  buttonText: string;
}

const ButtonTemp = ({ onClick, buttonText }: ButtonProps) => {
  return (
    <DefaultButton
      borderRadius={0}
      size="lg"
      width="100%"
      colorScheme="yellow"
      onClick={onClick}
    >
      {buttonText}
    </DefaultButton>
  );
};

export default ButtonTemp;
