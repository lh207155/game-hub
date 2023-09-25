import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GamaGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamaGrid;
