"use client";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../ui/header";
import Board from "./Board";
import EligibleBoard from "./EligibleBoard";
import { useEffect, useState } from "react";
import {
  findAllClasses,
} from "../lib/prolog/findClasses";

type Course = {
  id: number;
  title: string;
  completed: boolean;
};

export default function DisplayColumn() {
  const [eligibleCourses, setEligibleCourses] = useState<Course[]>([]);
  const [completed, setCompleted] = useState<Course[]>([]);
  const [incomplete, setIncomplete] = useState<Course[]>([]);

  const [data, setData] = useState<Course[]>([]);

  useEffect(() => {
    try {
      findAllClasses().then((classes) => {
        setData(
          classes.map(
            (className, i) =>
              ({ id: i, title: className, completed: false } as Course)
          )
        );
      });
    } catch (error) {
      console.error("Error loading classes", error);
    }
  }, []);

  useEffect(() => {
    const completedCourses = data.filter((course) => course.completed);
    const incompleteCourses = data.filter((course) => !course.completed);

    setCompleted(completedCourses);
    setIncomplete(incompleteCourses);
  }, [data]);
  return (
    <Box>
      <Header />
      <Box p={[10, 10]}>
        <SimpleGrid columns={[1, null, 2]} spacingX="3rem">
          <Box className="bg-[#B0A1BA] rounded-lg py-5">
            {/* <Text>select classes youve taken</Text> */}
            <Board
              completed={completed}
              setCompleted={setCompleted}
              setEligibleCourses={setEligibleCourses}
              setIncomplete={setIncomplete}
              incomplete={incomplete}
            />
          </Box>
          <Box className="bg-[#B0A1BA] rounded-lg py-5">
            {/* <Text>here are classes youre eligible for</Text> */}
            <EligibleBoard
              eligibleCourses={eligibleCourses}
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
