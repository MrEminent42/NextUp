# NextUp

NextUp is a curriculum planner for Cal Poly, built for Dr. Rodrigo Canaan's CSC 481 - Knowledge Based Systems course in Spring 2024. 

## frontend quick start: run the website locally
1. make sure your NodeJs version is >18.17.0. Node is available for download [here](https://nodejs.org/en/download/package-manager). Check your version with : `node --version`
2. change into the `frontend` directory: `cd frontend`
3. install necessary packages & dependencies: `npm install`
4. run the project locally with: `npm run dev`

## using NextUp
You can run it locally (instructions above) or visit the deployed version here (this branch v1, without experimental web crawler, is deployed at:) https://nextup-v1.vercel.app. 

## dependencies
Thanks to the folks who published & maintained the packages that made this project possible:
* [Jotai](https://jotai.org/) by Daishi Kato - atomic state management
* [Cheerio](https://cheerio.js.org/) by The Cheerio contributors - web crawler library
* [Chakra UI](https://v2.chakra-ui.com/) by Segun Adebayo - nice UI framework
* [NextJS](nextjs.org) by Vercel - a modern React framework
* [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) by Atlassian - drag & drop package for React
* [Tau Prolog](http://tau-prolog.org/) by José Antonio Riaza Valverde - prolog interpreter in JavaScript

## File Structure
The frontend folder does contain all files for the UI as well as the knowledge base.

* components folder - Contains all UI information on the design of the page. Each file corresponds to an aspect of the page (major select dropdown, columns, cards, etc).
* lib folder - Contains the Prolog predicates and knowledge base (in a string format for Tau Prolog to handle) as well as the local storage mechanism used for saving classes when the UI is refreshed. The atom subdirectory contains the storage utilities for saving class cards as well as the username. The prolog subdirectory contains the Prolog knowledge base in a string format and the query logic to connect the UI to the kb and query between.
* The scraper folder contains the scripts used to scrape the Cal Poly course catalog to populate the KB as well as the script to populate the class information when a class card is selected.
* The UI folder contains the typescript code for the usernames in NextUp.

## Understanding the codebase & file structure
```
├── frontend                    contains code for our website
│   ├── next.config.mjs         Node/React/NextJS config files
│   ├── next-env.d.ts           
│   ├── package.json            
│   ├── package-lock.json       
│   ├── postcss.config.mjs      
│   ├── public                  Public files for website
│   │   ├── next.svg
│   │   └── vercel.svg
│   ├── README.md
│   ├── src                     Our Next.JS code
│   │   └── app                 THE BULK OF OUR CODE - THIS IS WHAT CONTAINS THE WEBSITE
│   │       ├── components      UI components for the website
│   │       │   ├── Board.tsx               Todo/Completed board
│   │       │   ├── Card.tsx                Card for displaying a class 
│   │       │   ├── Column.tsx              
│   │       │   ├── DisplayColumn.tsx       THE MAIN CONTENTS OF OUR WEBSITE BEGINS HERE HERE
│   │       │   ├── EligibleBoard.tsx       Eligible classes board
│   │       │   └── MajorSelect.tsx               
Major select dropdown
│   │       ├── favicon.ico
│   │       ├── fonts.ts
│   │       ├── globals.css
│   │       ├── layout.tsx
│   │       ├── lib                         API/Library functions helpful elsewhere
│   │       │   ├── atoms                       Files for atomic state management and local storage management
│   │       │   │   ├── localStorage.ts     
│   │       │   │   └── usernameAtom.ts
Files containing save state logic, using localStorage hashmap object (Jotai for usernameAtom)
│   │       │   └── prolog                      Files related to prolog
│   │       │       ├── findClasses.ts              easy API methods for interfacing with prolog
│   │       │       ├── kb.ts                       **OUR PROLOG KNOWLEDGEBASE**
|   |       |       └── prerequisite_statements.txt 
String listing out different prerequisite predicate combinations
│   │       ├── page.tsx
│   │       ├── providers.tsx   Provier for Chakra UI (necessary for ChakraUI component library)
│   │       ├── scrape.js       Web scraper
│   │       └── ui              Some more UI compoennts 
│   │           ├── header.tsx
│   │           └── profile.tsx
│   ├── tailwind.config.ts      Node/React/NextJS config files
│   ├── theme.ts                Node/React/NextJS config files
│   └── tsconfig.json           Node/React/NextJS config files
├── README.md                   The readme :)
```
