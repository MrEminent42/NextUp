import { Course } from "@/app/components/Types";
import { atomWithStorage } from "jotai/utils";

const cacheKey = 'completedCourses';

export const completedCoursesAtom = atomWithStorage<Course[]>(cacheKey, []);