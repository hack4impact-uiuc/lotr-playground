import { Button } from '@chakra-ui/react';

type ButtonProps = {
  onClick: () => void;
  buttonText: string;
};

const ButtonComp = ({ onClick, buttonText }: ButtonProps) => {
  return <Button onClick={onClick}>{buttonText}</Button>;
};

export default ButtonComp;
