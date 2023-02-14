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
      bgColor="gold"
      color="black"
      onClick={onClick}
    >
      {buttonText}
    </DefaultButton>
  );
};

export default ButtonTemp;
