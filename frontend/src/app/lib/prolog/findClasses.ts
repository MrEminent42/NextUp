'use server';

import { Course } from "@/app/components/Board";
import TauProlog from "tau-prolog";

export const findClasses = (taken: Course[]) => {
    // load prolog kb from file kb.pl
    // const kb = require("../../../../../kb");
    // let session = pl.create();


    // const pl = require("./tau-prolog");
    // const session = pl.create(1000);
    const session = TauProlog.create(1000);



    session.consult("                   \
        taken(jon). \
        taken(thing2). \
    ", {
        success: function () {
            /* Program parsed correctly */
            console.log("TAU LOAD SUCCESS!")
        },
        error: function (err: any) {
            console.log("TAU LOAD ERROR!")
            console.log(err)
        },
    });

    session.query("taken(X).", {
        success: (goal: any) => {
            console.log("QUERY SUCCESS!")
            console.log(goal)
        },
        error: (err: any) => {
            console.log("QUERY ERROR!")
            console.log(err)
        }
    })

}