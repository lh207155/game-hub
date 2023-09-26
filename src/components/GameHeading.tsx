import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const haeding = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Game`;
  return <Heading fontSize={"5xl"}>{haeding}</Heading>;
};

export default GameHeading;
