import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const Navbar = () => {
  return (
    <HStack display="flex" alignItems="center" justifyContent="space-between">
      <Image src={logo} boxSize="60px" p={1}></Image>
      <SearchInput />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
