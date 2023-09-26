import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <Emoji rating_top={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
