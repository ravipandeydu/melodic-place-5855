import { Button } from "@chakra-ui/react";

export default function ButtonAll({ text, onclick }) {
  return <Button onClick={onclick}>{text}</Button>;
}
