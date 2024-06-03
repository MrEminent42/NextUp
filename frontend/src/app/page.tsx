"use client"
import { Box, SimpleGrid, Text, Select } from "@chakra-ui/react";
import Header from "./ui/header";
import Board from "./components/Board";
import { useState } from "react";

export default function Home() {
  const [selectedMajor, setSelectedMajor] = useState("Computer Science");

  const handleMajorChange = (event) => {
    setSelectedMajor(event.target.value);
  };

  return (
    <Box>
      <Header />
      <Box p={[10, 10]}>
        <SimpleGrid columns={[1, null, 2]} spacingX='3rem'>
          <Box bg='tomato'>
            <Text>
              Select classes you've taken
            </Text>
            <Board selectedMajor={selectedMajor} />
          </Box>
          <Box bg="aquamarine">
            <Text>
              Here are classes you're eligible for
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
