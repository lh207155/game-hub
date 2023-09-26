import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";
interface Props {
  onSelectChange: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectChange, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginY={1} fontSize={"2xl"}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageURL(genre.image_background)}
                objectFit="cover"
              />
              <Button
                fontSize="lg"
                variant="link"
                onClick={() => onSelectChange(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
