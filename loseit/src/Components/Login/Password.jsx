import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react';
  
  import {useState } from "react";
  
  
  export default function Password() {
    const [input, setInput] = useState('')
  
    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
  
    return (
      <FormControl isInvalid={isError}>
        <FormLabel>Password</FormLabel>
        <Input
          type='password'
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Enter the correct password to login
          </FormHelperText>
        ) : (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        )}
      </FormControl>
    )
  }