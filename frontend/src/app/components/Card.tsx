"use client";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import coursesData from "../../../public/coursesData.json"; // Adjust the path as necessary

type CardProps = {
  course: {
    id: number;
    title: string;
    completed: boolean;
  };
  index: number;
};

export default function Card({ course, index }: CardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const courseData = coursesData.find((c) => c.id === course.title);

  return (
    <>
      <Draggable draggableId={course.id.toString()} key={course.id} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="rounded-lg shadow-md p-2 text-black mb-2 min-h-[120px] mx-2 cursor-pointer flex justify-between flex-col"
            onClick={() => {
              console.log("Card Clicked:", course);
              onOpen();
            }}
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

      {courseData && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{courseData.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p><strong>Description:</strong> {courseData.description}</p>
              <p><strong>Units:</strong> {courseData.units}</p>
              <p><strong>Prerequisites:</strong> {courseData.prerequisites}</p>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
