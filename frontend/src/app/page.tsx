"use client";
import React, { useState, useEffect } from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "./ui/header";
import Board from "./components/Board";
import { findAllMajors } from "./lib/prolog/findClasses";
import { Select } from "chakra-react-select";

export default function Home() {
  const [majors, setMajors] = useState<{ value: string; label: string }[]>([]);
  const [selectedMajor, setSelectedMajor] = useState<{ value: string; label: string } | null>(null);

  useEffect(() => {
    findAllMajors().then((majors) => {
      const formattedMajors = majors.map((major) => ({ value: major, label: major }));
      setMajors(formattedMajors);
      if (formattedMajors.length > 0) {
        setSelectedMajor(formattedMajors[0]);
      }
    });
  }, []);

  const handleMajorChange = (selectedOption) => {
    setSelectedMajor(selectedOption);
  };

  return (
    <Box>
      <Header />
      <Box p={[10, 10]}>
        <Select 
          value={selectedMajor} 
          onChange={handleMajorChange}
          options={majors}
          placeholder="Select Major"
          chakraStyles={{
            container: (provided) => ({
              ...provided,
              width: '500px', // Adjust the width as needed
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: 'white',
            }),
          }}

        />
        <SimpleGrid columns={[1, null, 2]} spacingX='3rem'>
          <Box bg='tomato'>
            <Text>Select classes you've taken</Text>
            {selectedMajor && <Board selectedMajor={selectedMajor.value} />}
          </Box>
          <Box bg="aquamarine">
            <Text>Here are classes you're eligible for</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
