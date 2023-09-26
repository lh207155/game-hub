import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectChange: (platform: Platform) => void;
  platform: Platform | null;
}
const PlatformSelector = ({ onSelectChange, platform }: Props) => {
  const { data, isLoading, error } = usePlatforms();
  if (error) return;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectChange(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
