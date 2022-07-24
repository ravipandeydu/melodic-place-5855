import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box
} from '@chakra-ui/react';

import {useState } from "react";


export default function Email() {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  return (
    <Box>
      
    <FormControl isInvalid={isError}>
      <FormLabel>Email Address</FormLabel>
      <Input
        type='email'
        value={input}
        onChange={handleInputChange}
      />
      {!isError ? (
        <FormHelperText>
          Enter correct email to login
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
    </Box>
  )
}