import { Input, FormControl } from '@chakra-ui/react';
import type { ChangeEvent } from 'react';

interface FormInputProps {
  placeholder: string;
  value: string;
  setValue: (newValue: string) => void;
}

const FormInput = ({ placeholder, value, setValue }: FormInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <FormControl>
      <Input
        size="lg"
        border={0}
        bg="gray.700"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        textColor="white"
        borderRadius={0}
      />
    </FormControl>
  );
};

export default FormInput;
