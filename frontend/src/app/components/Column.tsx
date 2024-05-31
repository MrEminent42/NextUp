"use client"
import {useState} from "react";
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


const SearchBar = ({ onChange, value }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, value: string }) => {
  return (
    <input
      type="search"
      className="w-full mb-[25px] bg-[#FFFCF4] border border-black rounded-md p-2 text-black outline-none"
      placeholder="Search Courses"
      onChange={onChange}
      value={value}
    />
  );
};

export default function Column({ title, courses, id }: ColumnProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(searchInput.toLowerCase());
  });


  console.log(title, " tasks:", courses);
  return (
    <div
      style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      className="border-solid border-[1px] border-[gray] column bg-[#f4f5f7] rounder-[2.5px] w-[400px] h-[900px] overflow-y-scroll"
    >
      <h1 className="sticky top-0 bg-[lightblue] py-2 m-auto text-center">
        {title}
      </h1>
      <SearchBar onChange={handleChange} value={searchInput} />
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            className="p-[3px] bg-[#f4f5f7] grow min-h-[300px] transition-all"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {filteredCourses.map((course: Course, index: number) => (
              <Card key={index} index={index} course={course} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}