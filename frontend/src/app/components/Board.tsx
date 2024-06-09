"use client";
import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./Column";
import { Button, Center, Box, Flex, Text } from "@chakra-ui/react";
import MajorSelect from "./MajorSelect"; // Adjust the path as necessary

type Course = {
  id: number;
  title: string;
  completed: boolean;
};

interface BoardProps {
  completed: Course[];
  setCompleted: React.Dispatch<React.SetStateAction<Course[]>>;
  setEligibleCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  incomplete: Course[];
  setIncomplete: React.Dispatch<React.SetStateAction<Course[]>>;
  onSend: () => void;
  setMajor: (major: string) => void; // Add setMajor prop
}

interface Result extends DropResult {}

export default function Board({
  completed,
  setCompleted,
  setEligibleCourses,
  incomplete,
  setIncomplete,
  onSend,
  setMajor, // Destructure setMajor prop
}: BoardProps) {

  const handleDragEnd = (result: Result) => {
    const { destination, source, draggableId } = result;
    if (!destination || source.droppableId === destination.droppableId) return;

    deletePreviousState(source.droppableId, parseInt(draggableId));

    const course = findItemById(parseInt(draggableId), [
      ...incomplete,
      ...completed,
    ]);

    if (course) {
      setNewState(destination.droppableId, course);
    }
  };

  function deletePreviousState(sourceDroppableId: string, courseId: number) {
    switch (sourceDroppableId) {
      case "1":
        setIncomplete(removeItemById(courseId, incomplete));
        break;
      default:
        setCompleted(removeItemById(courseId, completed));
        break;
    }
  }
  function setNewState(destinationDroppableId: string, course: Course) {
    let updateCourse;
    switch (destinationDroppableId) {
      case "1": // TO DO
        updateCourse = { ...course, completed: false };
        setIncomplete([updateCourse, ...incomplete]);
        break;
      default: // DONE
        updateCourse = { ...course, completed: true };
        setCompleted([updateCourse, ...completed]);
        break;
    }
  }
  function findItemById(id: number, array: Course[]) {
    return array.find((item) => item.id === id);
  }

  function removeItemById(id: number, array: Course[]) {
    return array.filter((item) => item.id !== id);
  }

  return (
    <Box>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Flex justifyContent="center" alignItems="center" mb={4} position="relative">
          <Box bg="white" p={2} borderRadius="md" boxShadow="md" position="absolute" left="0">
            <MajorSelect onChange={(value) => setMajor(value)} />
          </Box>
          <Text className="text-2xl text-center font-bold">
            Progress Board
          </Text>
        </Flex>
        <div className="flex justify-between items-center flex-row mx-2 mt-5">
          <Column title={"TO DO"} courses={incomplete} id={"1"} />
          <Column title={"DONE"} courses={completed} id={"2"} />
        </div>
      </DragDropContext>
      <Center className="my-4">
        <Button
          className="block mx-auto text-center border-black bg-white rou"
          onClick={onSend}
        >
          Submit
        </Button>
      </Center>
    </Box>
  );
}
