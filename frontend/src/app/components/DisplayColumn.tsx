"use client"
// components/DisplayColumn.js
"use client";
import { useState, useEffect } from "react";
import Board from "./Board";
import EligibleBoard from "./EligibleBoard";
import { Box, Flex } from '@chakra-ui/react'
import Header from "../ui/header"; // Adjust the path as necessary
import { findAllClasses, findAvailableClasses } from "../lib/prolog/findClasses";
import { saveToLocalStorage, loadFromLocalStorage } from '../lib/atoms/localStorage';

type Course = {
  id: number;
  title: string;
  completed: boolean;
};

export default function DisplayColumn() {
  const [isMounted, setIsMounted] = useState(false);
  const [major, setMajor] = useState<string>('');
  const [eligibleCourses, setEligibleCourses] = useState<Course[]>([]);
  const [completed, setCompleted] = useState<Course[]>([]);
  const [incomplete, setIncomplete] = useState<Course[]>([]);
  const [data, setData] = useState<Course[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const savedMajor = loadFromLocalStorage('selectedMajor');
    const savedCompletedCourses = loadFromLocalStorage('completedCourses');

    if (savedMajor) {
      setMajor(savedMajor);
    }

    if (savedCompletedCourses) {
      setCompleted(savedCompletedCourses);
    }
  }, []);

  const fetchClasses = async (selectedMajor: string) => {
    try {
      const classes: string[] = await findAllClasses(selectedMajor);
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
    if (isMounted && major) {
      fetchClasses(major);
    }
  }, [isMounted, major]);

  useEffect(() => {
    if (data.length > 0) {
      const completedIds = new Set(completed.map(course => course.id));
      const newIncomplete = data.filter(course => !completedIds.has(course.id));
      setIncomplete(newIncomplete);
    }
  }, [data, completed]);

  useEffect(() => {
    if (isMounted) {
      saveToLocalStorage('completedCourses', completed);
    }
  }, [completed, isMounted]);

  useEffect(() => {
    if (isMounted) {
      saveToLocalStorage('selectedMajor', major);
    }
  }, [major, isMounted]);

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

  const resetCourses = () => {
    setIncomplete([]);
    setCompleted([]);
    setData([]);
  };

  if (!isMounted) {
    return null;
  }

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
            setMajor={setMajor}
            resetCourses={resetCourses}
          />
        </Box>
        <Box flex="1" bg="#B0A1BA" rounded="lg" p={5}>
          <EligibleBoard eligibleCourses={eligibleCourses} />
        </Box>
      </Flex>
    </Box>
  );
}