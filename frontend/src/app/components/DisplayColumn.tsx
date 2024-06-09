"use client";
import { Box, SimpleGrid, VStack, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Board from "./Board";
import EligibleBoard from "./EligibleBoard";
import Header from "../ui/header"; // Adjust the path as necessary
import { findAllClasses, findAvailableClasses } from "../lib/prolog/findClasses";

type Course = {
  id: number;
  title: string;
  completed: boolean;
};

export default function DisplayColumn() {
  const [major, setMajor] = useState<string>('');
  const [eligibleCourses, setEligibleCourses] = useState<Course[]>([]);
  const [completed, setCompleted] = useState<Course[]>([]);
  const [incomplete, setIncomplete] = useState<Course[]>([]);

  const [data, setData] = useState<Course[]>([]);

  const fetchClasses = async (selectedMajor: string) => {
    try {
      const classes: string[] = await findAllClasses(selectedMajor); // Ensure type is string[]
      const courses = classes.map(
        (className: string, i: number) =>
          ({ id: i, title: className, completed: false } as Course)
      );
      setData(courses);
    } catch (error) {
      console.error("Error loading classes", error);
    }
  };

  useEffect(() => {
    if (major) {
      fetchClasses(major);
    }
  }, [major]);

  useEffect(() => {
    const completedCourses = data.filter((course) => course.completed);
    const incompleteCourses = data.filter((course) => !course.completed);

    setCompleted(completedCourses);
    setIncomplete(incompleteCourses);
  }, [data]);

  const handleSend = async () => {
    if (completed.length <= 0) {
      alert("Please add courses before submitting form");
      return;
    }
    try {
      const classes = await findAvailableClasses(completed, major);
      setEligibleCourses(
        classes.map(
          (className: string, i: number) =>
            ({ id: i + 1, title: className, completed: false } as Course)
        )
      );
    } catch (error) {
      console.error("Error finding available classes:", error);
    }
  };

  return (
    <Box>
      <Header />
      <Flex p={[10, 10]} gap={5}>
        <Box flex="1" bg="#B0A1BA" rounded="lg" p={5}>
          <Board
            completed={completed}
            setCompleted={setCompleted}
            setEligibleCourses={setEligibleCourses}
            setIncomplete={setIncomplete}
            incomplete={incomplete}
            onSend={handleSend}
            setMajor={setMajor} // Pass setMajor to Board
          />
        </Box>
        <Box flex="1" bg="#B0A1BA" rounded="lg" p={5}>
          <EligibleBoard eligibleCourses={eligibleCourses} />
        </Box>
      </Flex>
    </Box>
  );
}
