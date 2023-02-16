import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useState } from 'react';

const SearchBar = ({ handleSubmit } : {handleSubmit : (searchInput : string) => void }) => {
  const [searchInput, setSearchInput] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(searchInput);
    console.log("tacoooo");
  };

  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          w="100%"
          borderRadius={0}
          bg="background"
          color="white"
          value={searchInput}
          onChange={(e)=> setSearchInput(e.currentTarget.value)}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
