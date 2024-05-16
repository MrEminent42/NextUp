"use client";
import React, { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./Column";

const testData = [
  {
    id: 1,
    title: "CSC 203",
    completed: false,
  },
  {
    id: 2,
    title: "CSC 441",
    completed: false,
  },
  {
    id: 3,
    title: "CSC 121",
    completed: false,
  },
  {
    id: 4,
    title: "CSC 123",
    completed: false,
  },
];

type Course = {
  id: number;
  title: string;
  completed: boolean;
};

interface Result extends DropResult {}
export default function Board() {
  const [data, setData] = useState<Course[]>(testData);
  const [completed, setCompleted] = useState<Course[]>([]);
  const [incomplete, setIncomplete] = useState<Course[]>([]);
  useEffect(() => {
    const completedCourses = data.filter((course) => course.completed);
    const incompleteCourses = data.filter((course) => !course.completed);

    setCompleted(completedCourses);
    setIncomplete(incompleteCourses);
    console.log(completedCourses, incompleteCourses)
  }, [data]);

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
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2 style={{ textAlign: "center" }}>PROGRESS BOARD</h2>

      <div className="flex justify-between items-center flex-row mx-2">
        <Column title={"TO DO"} courses={incomplete} id={"1"} />
        <Column title={"DONE"} courses={completed} id={"2"} />
      </div>
    </DragDropContext>
  );
}
