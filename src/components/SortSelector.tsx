import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  // onSelectChange: (platform: Platform) => void;
  // selectedPlatform: Platform | null;
}
const SortSelector = () => {
  const { data, isLoading, error } = usePlatforms();
  if (error) return;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        321
      </MenuButton>
      <MenuList>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
