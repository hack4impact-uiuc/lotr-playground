import { Input, FormControl } from '@chakra-ui/react';

interface FormInputProps {
  placeholder: string;
}

const FormInput = ({ placeholder }: FormInputProps) => {
  return (
    <FormControl>
      <Input
        size="lg"
        border={0}
        bg="gray.700"
        placeholder={placeholder}
        textColor="white"
        borderRadius={0}
      />
    </FormControl>
  );
};

export default FormInput;
