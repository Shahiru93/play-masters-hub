import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { BsSun } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"}>{<BsSun />}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
