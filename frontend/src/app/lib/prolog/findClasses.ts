'use server';

// @ts-ignore
import TauProlog from "tau-prolog";
import { promises as fs } from 'fs';
const pl = require("tau-prolog");
require("tau-prolog/modules/promises.js")(pl);

export const findAllClasses = async (major) => {
    // load prolog kb from file kb.pl
    const kb = (await fs.readFile(process.cwd() + '/kb.pl')).toString();

    const session = pl.create(1000);

    const goal = `
        class("${major}", X).
    `;

    let classes = [];

    await session.promiseConsult(kb);
    await session.promiseQuery(goal);
    for await (let answer of session.promiseAnswers()) {
        const ansFormatted = await session.format_answer(answer);
        if (ansFormatted.includes("false")) {
            continue;
        }
        classes.push(ansFormatted.split("[")[1].split("]")[0].replaceAll(",", ""));
    }

    return classes;
};

export const findAllMajors = async () => {
    // load prolog kb from file kb.pl
    const kb = (await fs.readFile(process.cwd() + '/kb.pl')).toString();

    const session = pl.create(1000);

    const goal = `
        major(X).
    `;

    let majors = [];

    await session.promiseConsult(kb);
    await session.promiseQuery(goal);
    for await (let answer of session.promiseAnswers()) {
        const ansFormatted = await session.format_answer(answer);
        if (ansFormatted.includes("false")) {
            continue;
        }
        majors.push(ansFormatted.split("[")[1].split("]")[0].replaceAll(",", ""));
    }

    return majors;
};
