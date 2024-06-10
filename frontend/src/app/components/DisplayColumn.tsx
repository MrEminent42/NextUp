"use client";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../ui/header";
import Board from "./Board";
import EligibleBoard from "./EligibleBoard";
import { useEffect, useMemo, useState } from "react";
import {
  findAllClasses,
} from "../lib/prolog/findClasses";
import { useAtom } from "jotai";
import { completedCoursesAtom } from "../lib/atoms/completedCoursesAtom";
import { Course } from "./Types";


export default function DisplayColumn() {
  const [eligibleCourses, setEligibleCourses] = useState<Course[]>([]);
  const [completed, setCompleted] = useAtom(completedCoursesAtom);
  const [incomplete, setIncomplete] = useState<Course[]>([]);

  const [data, setData] = useState<Course[]>([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const classes = await findAllClasses();
        const courses = classes.map(
          (className: string, i: number) =>
            ({ id: i, title: className, completed: false } as Course)
        );
        setData(courses);
      } catch (error) {
        console.error("Error loading classes", error);
      }
    };

    fetchClasses();
  }, []);

  // when data (fetched courses from KB) changes,
  // update "completed" and "incomplete" course lists
  useEffect(() => {
    const incompleteCourses = data.filter((course) => !course.completed);
    // since completed courses are loaded from cache as well
    // manually filter out courses that have been marked as completed from the cache
    setIncomplete(incompleteCourses.filter((course) => !completed.some((c) => c.title === course.title)));
  }, [data]);

  // when the "completed" course list changes,
  // update the list of "incomplete" courses to ensure
  // that the user can only select courses they haven't taken
  useEffect(() => {
    setIncomplete(incomplete.filter((course) => !completed.some((c) => c.title === course.title)));
  }, [completed])

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
