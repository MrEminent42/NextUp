"use client";
import React, { useState, useEffect, use } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./Column";

import {
  findAvailableClasses,
} from "../lib/prolog/findClasses";
import { Button, Center } from "@chakra-ui/react";

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
  setIncomplete:React.Dispatch<React.SetStateAction<Course[]>>;
}

interface Result extends DropResult {}
export default function Board({
  completed,
  setCompleted,
  setEligibleCourses,
  incomplete,
  setIncomplete,
}: BoardProps) {

  const handleSend = async () => {
    if(completed.length <= 0) {
      alert("Please add courses before submitting form");
      return;
    }
    try {
      findAvailableClasses(completed).then((classes) => {
        setEligibleCourses(
          classes.map(
            (className, i) =>
              ({ id: i+1, title: className, completed: false } as Course)
          )
        );
      });
    } catch (error) {
      console.error("Error finding available classes:", error);
    }
  };
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
    return array.find((item) => item.id == id);
  }

  function removeItemById(id: number, array: Course[]) {
    return array.filter((item) => item.id != id);
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <h1 className="text-2xl text-center font-bold">Progress Board</h1>
        <div className="flex justify-between items-center flex-row mx-2 mt-5">
          <Column title={"TO DO"} courses={incomplete} id={"1"} />
          <Column title={"DONE"} courses={completed} id={"2"} />
        </div>
      </DragDropContext>
      <Center className="my-4">
        <Button
          className="block mx-auto text-center border-black bg-white rou"
          onClick={handleSend}
        >
          Submit
        </Button>
      </Center>
    </div>
  );
}
