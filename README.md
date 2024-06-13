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
.
├── frontend                contains code for our website
│   ├── next.config.mjs         ↓ Node/React/NextJS config files 
│   ├── next-env.d.ts           |
│   ├── package.json            |
│   ├── package-lock.json       |
│   ├── postcss.config.mjs      ↑ end
│   ├── public                  Public files for website
│   │   ├── coursesData.json        web-scraped data/descriptions/etc. of all courses
│   │   ├── next.svg
│   │   └── vercel.svg
│   ├── src                     Our Next.JS code
│   │   └── app                     THE BULK OF OUR CODE - THIS IS WHAT CONTAINS THE WEBSITE FILES
│   │       ├── components              UI components for the website
│   │       │   ├── Board.tsx               Todo/Completed board
│   │       │   ├── Card.tsx                Card/tile for displaying a class 
│   │       │   ├── Column.tsx              One column inside a board
│   │       │   ├── DisplayColumn.tsx       THE MAIN CONTENTS OF OUR WEBSITE BEGINS HERE 
│   │       │   ├── EligibleBoard.tsx       Eligible classes board
│   │       │   └── MajorSelect.tsx         Major selection dropdown
│   │       ├── favicon.ico             ↓ Some more NextJS/generic website stuff
│   │       ├── fonts.ts                |
│   │       ├── globals.css             |
│   │       ├── layout.tsx              ↑ end
│   │       ├── lib                     API/Library functions helpful in the UI files 
│   │       │   ├── atoms                   Files for atomic state management and local storage management
│   │       │   │   ├── localStorage.ts         Utility for saving completed classes data to the local browser (saves to localStorage to persist across refreshes)
│   │       │   │   └── usernameAtom.ts         Atomic state (via Jotai) for the username (also saves to localStorage)
│   │       │   └── prolog
│   │       │       ├── findClasses.ts  
│   │       │       ├── kb.ts
│   │       ├── page.tsx                The ROOT HTML/React webpage that is loaded when a user visits the website (more code starts in DisplayColumn.tsx)
│   │       ├── providers.tsx           Wraps the entire website in a ChakraUI Provider (helpful for ChakraUI, where we get basic UI components from)
│   │       ├── scraper                 Web-scraping 
│   │       │   ├── prereq_generator.py     TODO HAN - short description
│   │       │   └── scraper.py              TODO HAN - short description
│   │       └── ui                      Some more UI compoennts
│   │           ├── header.tsx
│   │           └── profile.tsx
│   ├── tailwind.config.ts          ↓ Node/React/NextJS config files
│   ├── theme.ts                    | 
│   └── tsconfig.json               ↑ end
└── README.md               The readme :)
```
