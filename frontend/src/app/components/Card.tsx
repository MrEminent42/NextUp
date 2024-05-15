"use client";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

type CardProps = {
  course: {
    id: string | number;
    title: string;
    completed: boolean;
  };
  index: number;
};

// Update the Card component to use CardProps
export default function Card({ course, index }: CardProps) {
  return (
    <Draggable draggableId={`${course.id}`} key={course.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          className="rounded-lg shadow-md p-2 text-black mb-2 min-h-[120px] mx-2 cursor-pointer flex justify-between flex-col"
        >
          <div className="flex justify-start p-2">
            <span>
              <small>
                #{course.id}
                {"  "}
              </small>
            </span>
          </div>
          <div className="flex justify-center p-5">
            <h2>{course.title}</h2>
          </div>
        </div>
      )}
    </Draggable>
  );
}
