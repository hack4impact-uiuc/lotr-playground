import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input type="text" w="100%" borderRadius={0} bg="background" color="white" />
    </InputGroup>
  );
};

export default SearchBar;
