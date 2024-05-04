import { Box, SimpleGrid } from "@chakra-ui/react";
import Header from "./ui/header";

export default function Home() {
  return (
    <Box>
      <Header />
      <Box p={[10, 10]}>
        <SimpleGrid columns={[1, null, 2]} spacingX='3rem'>
          <Box bg='tomato'>select classes youve taken</Box>
          <Box bg='aquamarine'>here are classes you're eligible for</Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}