import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "./ui/header";
import Board from "./components/Board";

export default function Home() {
  return (
    <Box>
      <Board />
      <Header />
      <Box p={[10, 10]}>
        <SimpleGrid columns={[1, null, 2]} spacingX='3rem'>
          <Box bg='tomato'>
            <Text>
              select classes youve taken
            </Text>
          </Box>
          <Box bg="aquamarine">
            <Text>
              here are classes youre eligible for
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}