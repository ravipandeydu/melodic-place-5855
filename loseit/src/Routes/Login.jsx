import {Center, Box, Text, Heading} from "@chakra-ui/react";
import Email from "../Components/Login/Email";
import Logo from "../Components/common/Logo";
import Password from "../Components/Login/Password";
import ButtonAll from "../Components/common/Button"
import { useNavigate } from "react-router-dom";

export default function Login(){
  let navigate = useNavigate();
  function handleLogin(){
    navigate("/")
  }
    return(
        <Box p="10% 35%" pb="1rem">
            <Logo />
            <Email />
            <Password />
            <Center>
            <ButtonAll onclick = {handleLogin} text={"Login"} />
            </Center>
            <Text fontSize="15.4px"
              textAlign="center"
              color="#ff9400">Forgot Your Password?</Text>
            <Box fontSize="15.4px"
              textAlign="center"
              color="#808284">Don't have an account? <Text display="inline" color="#ff9400">Create one now!</Text></Box>
            <Heading
            as="h1"
            fontSize="20px"
            justifySelf="center"
            textAlign="center"
            color="#d1d5db"
            mb="10px">OR</Heading>
            <Center>
            <ButtonAll text={"Sign In With Apple"} />
            </Center>
            <Text fontSize="15.4px"
              textAlign="center"
              color="#808284">Sign In with Facebook is no longer supported</Text>
            <Text fontSize="15.4px"
              textAlign="center"
              color="#ff9400">Create A New Password Now</Text>
        </Box>
    )
}