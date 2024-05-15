import React from "react";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";

interface ColumnProps {
  title: string;
  courses: Course[];
  id: string;
}

type Course = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Column({ title, courses, id }: ColumnProps) {
  console.log(title, " tasks:", courses);
  return (
    <div
      style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      className="border-solid border-[1px] border-[gray] column bg-[#f4f5f7] rounder-[2.5px] w-[400px] h-[900px] overflow-y-scroll"
    >
      <h1 className="sticky top-0 bg-[lightblue] py-2 m-auto text-center">
        {title}
      </h1>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            className="p-[3px] bg-[#f4f5f7] grow min-h-[200px transition-all"
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {courses.map((course: Course, index: number) => (
              <Card key={index} index={index} course={course} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}