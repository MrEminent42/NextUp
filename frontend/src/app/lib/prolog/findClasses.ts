'use server';

import { Course } from "@/app/components/Board";
// @ts-ignore
import TauProlog from "tau-prolog";
import { promises as fs } from 'fs';

// export const findClasses = async (taken: Course[]) => {
export const findClasses = async () => {
    // load prolog kb from file kb.pl
    // const kb = (await fs.readFile(process.cwd() + '/kb_simple.pl')).toString();
    const kb = (await fs.readFile(process.cwd() + '/kb.pl')).toString();
    console.log("Loaded KB: ", kb);

    const session = TauProlog.create(1000);

    const goal = `
        taken(X).
    `;


    session.consult(kb, {
        // loaded successfully
        success: () => {
            session.query(goal, {
                // successful query
                success: function () {
                    // log answers to console (for now)
                    session.answers((x: any) => console.log("[ANSWERS]", session.format_answer(x)));
                },
                // error while querying
                error: (err: any) => {
                    console.log("[QUERY]: Error querying KB: ", err);
                    console.log("[QUERY]: Error JSON: ", JSON.stringify(err))
                }
            })
        },
        // error loading
        error: (err: any) => {
            console.log("[CONSULT]: Error loading KB: ", err);
            console.log("[CONSULT]: Error JSON: ", JSON.stringify(err))
        }
    });

    return "";
}