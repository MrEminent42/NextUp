"use client";
import React, { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./Column";
import { findAllClasses } from "../lib/prolog/findClasses";
import { Box, Select } from "@chakra-ui/react";

export type Course = {
  id: number;
  title: string;
  completed: boolean;
};

interface Result extends DropResult {}

export default function Board() {
  const [selectedMajor, setSelectedMajor] = useState("Computer Science");
  const [data, setData] = useState<Course[]>([]);
  const [completed, setCompleted] = useState<Course[]>([]);
  const [incomplete, setIncomplete] = useState<Course[]>([]);

  useEffect(() => {
    findAllClasses(selectedMajor).then((classes) => {
      setData(
        classes.map(
          (className, i) => ({ id: i, title: className, completed: false } as Course)
        )
      );
    });
  }, [selectedMajor]);

  useEffect(() => {
    const completedCourses = data.filter((course) => course.completed);
    const incompleteCourses = data.filter((course) => !course.completed);

    setCompleted(completedCourses);
    setIncomplete(incompleteCourses);
  }, [data]);

  const handleMajorChange = (event) => {
    setSelectedMajor(event.target.value);
  };

  const handleDragEnd = (result: Result) => {
    const { destination, source, draggableId } = result;
    if (!destination || source.droppableId === destination.droppableId) return;

    deletePreviousState(source.droppableId, parseInt(draggableId));

    const course = findItemById(parseInt(draggableId), [...incomplete, ...completed]);

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
    <Box>
      <Select value={selectedMajor} onChange={handleMajorChange}>
        <option value="Computer Science">Computer Science</option>
        <option value="Aerospace Engineering">Aerospace Engineering</option>
        <option value="Agribusiness">Agribusiness</option>
        {/* Add more options for other majors */}
      </Select>
      <DragDropContext onDragEnd={handleDragEnd}>
        <h2 style={{ textAlign: "center" }}>PROGRESS BOARD</h2>
        <div className="flex justify-between items-center flex-row mx-2">
          <Column title={"TO DO"} courses={incomplete} id={"1"} />
          <Column title={"DONE"} courses={completed} id={"2"} />
        </div>
      </DragDropContext>
    </Box>
  );
}
