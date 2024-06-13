This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Dependencies
Thanks to the folks who published & maintained the packages that made this project possible:

* Jotai by Daishi Kato - atomic state management
* Cheerio by The Cheerio contributors - web crawler library
* Chakra UI by Segun Adebayo - nice UI framework
* NextJS by Vercel - a modern React framework
react-beautiful-dnd by Atlassian - drag & drop package for React
* Tau Prolog by José Antonio Riaza Valverde - prolog interpreter in JavaScript

## File Structure
The frontend folder does contain all files for the UI as well as the knowledge base.

* components folder - Contains all UI information on the design of the page. Each file corresponds to an aspect of the page (major select dropdown, columns, cards, etc).
* lib folder - Contains the Prolog predicates and knowledge base (in a string format for Tau Prolog to handle) as well as the local storage mechanism used for saving classes when the UI is refreshed. The atom subdirectory contains the storage utilities for saving class cards as well as the username. The prolog subdirectory contains the Prolog knowledge base in a string format and the query logic to connect the UI to the kb and query between.
* The scrapper folder contains the scripts used to scrape the Cal Poly course catalog to populate the KB as well as the script to populate the class information when a class card is selected.
* The UI folder contains the typescript code for the usernames in NextUp.

## Understanding the codebase
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
