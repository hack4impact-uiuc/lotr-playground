import { Button } from '@chakra-ui/react';

type ButtonProps = {
  onClick: () => void;
  buttonText: string;
};

const ButtonComp = (props: ButtonProps) => {
  return <Button onClick={props.onClick}>{props.buttonText}</Button>;
};

export default ButtonComp;
