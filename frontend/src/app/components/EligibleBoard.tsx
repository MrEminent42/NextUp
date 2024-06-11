"use client";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./Column";
import { Button, Center } from "@chakra-ui/react";
import { Course } from "./Types";


interface EligibleBoardProps {
  eligibleCourses: Course[];
}
interface Result extends DropResult { }
export default function EligibleBoard({ eligibleCourses }: EligibleBoardProps) {
  const handleDragEnd = (result: Result) => {
    return;
  };
  if (eligibleCourses.length === 0) {
    return (
      <div>
        <h1 className="text-2xl text-center font-bold">
          No eligible courses available.
        </h1>
      </div>
    );
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <h1 className="text-2xl text-center font-bold">Classes Available</h1>
        <Center className="mx-2 mt-5">
          <Column title={"TO DO"} courses={eligibleCourses} id={"1"} />
        </Center>
      </DragDropContext>
    </div>
  );
}
