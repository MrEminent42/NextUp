"use server";

// @ts-ignore
import TauProlog from "tau-prolog";
const pl = require("tau-prolog");
import { knowledgeBase } from "./kb";
require("tau-prolog/modules/promises.js")(pl);

type Course = {
  id: number;
  title: string;
  completed: boolean;
};

export const generatePrologKB = async (completedCourses: Course[], major: string) => {
  const kb = knowledgeBase;

  // Use a Set to store unique taken facts
  const takenSet = new Set(
    completedCourses
      .filter((course) => course.completed)
      .map((course) => `taken("${course.title}").`)
  );

  // Convert Set to a string
  const takenFacts = Array.from(takenSet).join("\n");

  // Combine base KB with new facts
  return `${kb}\n${takenFacts}`;
};

export const findAvailableClasses = async (completedCourses: Course[], major: string): Promise<string[]> => {
  // Returns updated KB with new facts
  const kb = await generatePrologKB(completedCourses, major);

  const session = TauProlog.create(1000);
  const goal = `
    class("${major}", X), testPrereqs(X).
  `;

  let availableClassesSet = new Set<string>();

  await session.promiseConsult(kb);
  await session.promiseQuery(goal);
  for await (let answer of session.promiseAnswers()) {
    const ansFormatted = await session.format_answer(answer);
    if (ansFormatted.includes("false")) {
      continue;
    }
    // Add unique class to the set
    availableClassesSet.add(
      ansFormatted.split("[")[1].split("]")[0].replaceAll(",", "")
    );
  }
  // Convert set to array
  return Array.from(availableClassesSet);
};

export const findAllClasses = async (selectedMajor: string): Promise<string[]> => {
  const kb = knowledgeBase;
  const session = TauProlog.create(1000);

  const goal = `
    major("${selectedMajor}"),
    class("${selectedMajor}", X).
  `;

  let classesSet = new Set<string>();

  await session.promiseConsult(kb);
  await session.promiseQuery(goal);
  for await (let answer of session.promiseAnswers()) {
    const ansFormatted = await session.format_answer(answer);
    if (ansFormatted.includes("false")) {
      continue;
    }
    // Add unique class to the set
    classesSet.add(
      ansFormatted.split("[")[1].split("]")[0].replaceAll(",", "")
    );
  }

  // Convert set to array
  return Array.from(classesSet);
};